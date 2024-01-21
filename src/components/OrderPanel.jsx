import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import OrdersTable from "./OrdersTable";
import DeleteModal from "./DeleteModal";
import UpdateModal from "./UpdateModal";

function OrderPanel() {
  const [ordersData, setOrdersData] = useState([]);
  const [dltVisibility, setDltVisibility] = useState(false);
  const [updtVisibility, setUpdtVisibility] = useState(true);
  const apiLink = "http://localhost:3000/order";

  const getData = async (link) => {
    try {
      let res = await fetch(link);
      if (res.ok) {
        let recData = await res.json();
        setOrdersData(recData.data);
      } else {
        console.log("error getting data of orders");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = async (deleteId) => {
    const id = deleteId;
    const url = `${apiLink}/${id}`;
    try {
      let res = await fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.ok) {
        let deleted = await res.json();
        console.log(deleted);
        setDltVisibility(true);
        setOrdersData((prevData) =>
          prevData.filter((order) => order._id !== deleted._id)
        );
      } else {
        console.log("error deleting order");
      }
      console.log(id);
    } catch (error) {
      console.log(error);
    }
  };
  const handleClickUpdate = async (updateId) => {
    const id = updateId;
    const url = `${apiLink}/${id}`;
    try {
      let res = await fetch(url, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.ok) {
        let newData = await res.json();
        console.log(newData);
        setUpdtVisibility(true);
        setOrdersData((prevData) =>
          prevData.map((order) => order._id === updateId._id?{...order,newData}:order)
        );
      } else {
        console.log("error deleting order");
      }
      console.log(id);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData(apiLink);
  }, []);

  return (
    <div className="w-full h-screen bg-zinc-800 text-white">
      <Navbar />
      <div className="flex justify-center items-center p-10 font-bold">
        <h1 className="heading text-6xl">Orders Panel</h1>
      </div>
      <div className="ordersTable w-full h-[50%]">
        <OrdersTable ordersData={ordersData} handleClick={handleClick} />
      </div>
      <DeleteModal
        dltVisibility={dltVisibility}
        setDltVisibility={setDltVisibility}
      ></DeleteModal>
      <UpdateModal
        updtVisibility={updtVisibility}
        setUpdtVisibility={setUpdtVisibility}
      ></UpdateModal>
    </div>
  );
}

export default OrderPanel;
