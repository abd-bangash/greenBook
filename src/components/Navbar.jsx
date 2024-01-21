import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { GiLindenLeaf } from "react-icons/gi";
import { BsFillCartPlusFill } from "react-icons/bs";

function Navbar() {
  let navigate = useNavigate();

  const handleClick = (link) => {
    navigate(link);
  };

  return (
    <div className="w-full h-[13vh] ">
      <div className="info w-full h-[30%] bg-lime-400 flex text-lg flex-wrap justify-between">
        <div className="left flex justify-around items-center mx-2">
          <div className="flex items-center">
            <div className="mx-3">
              <FaPhoneAlt />
            </div>
            <p>(92) 061 9210433</p>
          </div>
        </div>
        <div className="center text-zinc-800 font-semibold flex items-center justify-center">
          Find Us.
        </div>
        <div className="right flex justify-around items-center px-3 mx-3">
          <div className="px-2">
            <a href="https://www.facebook.com/thechildrengreenbook">
              <FaFacebook size="1.2em" />
            </a>
          </div>
          <div className="px-2">
            {" "}
            <a href="https://www.youtube.com/">
              <FaYoutube size="1.5em" />
            </a>
          </div>
        </div>
      </div>
      <div className="nav w-full h-[70%] bg-zinc-700 text-white text-2xl flex justify-between p-2">
        <div className="logo font-semibold m-1 ml-7 flex justify-center items-center hover:text-zinc-900">
          <div className="mr-4">
            <GiLindenLeaf />
          </div>
          <div>
            {" "}
            <div className="upper">Green</div>
            <div className="lower">Book</div>
          </div>
        </div>
        <div className="buttons flex justify-center items-center font-semibold">
          <div className="b1 px-12 hover:text-zinc-900">
            <button onClick={() => handleClick("/home")}>Home</button>
          </div>
          <div className="b1 px-12 hover:text-zinc-900">
            <button onClick={() => handleClick("/aboutus")}>About Us</button>
          </div>
          <div className="b2 px-12 hover:text-zinc-900">
            <button onClick={() => handleClick("/review")}>Review</button>
          </div>
          <div className="b3 px-12 hover:text-zinc-900">
            <button onClick={() => handleClick("/gallery")}>Gallery</button>
          </div>
        </div>
        <div className="ender flex justify-center items-center mx-5 hover:text-zinc-900">
          <button onClick={() => handleClick("/order")}>
            <BsFillCartPlusFill size="1.5em" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
