import React from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "./components/Welcome";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Order from "./components/Order";
import OrderPanel from "./components/OrderPanel";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/order" element={<Order />}></Route>
        <Route path="/order-panel" element={<OrderPanel />}></Route>
        <Route path="/navbar" element={<Navbar />}></Route>
        <Route path="/footer" element={<Footer />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
