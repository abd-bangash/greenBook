const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { date } = require("yup");
const app = express();
app.use(express.json());
app.use(cors());

dbConnect = async () => {
  await mongoose
    .connect("mongodb://127.0.0.1:27017/green_book")
    .then(() => {
      console.log("Data base connected successfully");
    })
    .catch((e) => {
      console.log(e);
    });
};

const findDateAndTime = () => {
  const d = new Date();
  // Format the date
  const dateString =
    d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();
  // Format the time
  const timeString =
    d.getHours() +
    ":" +
    (d.getMinutes() < 10 ? "0" : "") +
    d.getMinutes() +
    ":" +
    (d.getSeconds() < 10 ? "0" : "") +
    d.getSeconds();
  return [dateString, timeString];
};

dbConnect();

const ordersSchema = new mongoose.Schema({
  name: String,
  noOfCopies: String,
  contactNo: String,
  email: String,
  postalAddress: String,
  message: String,
  date: String,
  time: String,
});

//orders

const Orders = new mongoose.model("Order", ordersSchema);

app.get("/order", async (req, res) => {
  try {
    const ordersData = await Orders.find({});
    res.status(200).json({ data: ordersData });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

app.post("/order", async (req, res) => {
  try {
    const orderData = req.body;
    const [date, time] = findDateAndTime();
    const newOrder = new Orders({ ...orderData, date, time });
    newOrder.save();
    res.status(200).json({ data: orderData });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

app.delete("/order/:id", async (req, res) => {
  try {
    const id = req.params.id;
    if (!mongoose.isValidObjectId(id)) {
      return res.status(500).json({ message: "not a valid id" });
    }
    const data = await Orders.findByIdAndDelete({ _id: id });
    if (!data) {
      return res.status(404).json({ message: "article not found" });
    }
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.patch("/order/:id", async (req, res) => {
  try {
    const id = req.params.id;
    if (!mongoose.isValidObjectId(id)) {
      return res.status(500).json({ message: "not a valid id" });
    }
    const update = req.body;
    const data = await Orders.findByIdAndUpdate(id, update, { new: true });

    if (!data) {
      return res.status(404).json({ message: "article not found" });
    }
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(3000, () => {
  console.log("Server listeing on port 3000");
  console.log(findDateAndTime());
});
