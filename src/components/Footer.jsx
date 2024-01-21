import React from "react";
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";
import ScrollToTop from "react-scroll-to-top";

function Footer() {
  return (
    <>
      <div className="w-full flex  justify-start items-center  bg-zinc-700 my-12">
        <div>
          <div className="w-[60%] text-lg  text-zinc-100 font-semibold m-3">
            Crafted by: AbdulAhad Khan
          </div>
        </div>

        <div className="text-2xl text-zinc-800 font-semibold my-5 ">
          <button></button>
        </div>
        <div className="flex justify-center items-center m-12">
          {" "}
          <ScrollToTop
            smooth
            component={
              <p
                className="flex items-center justify-center"
                style={{ color: "black" }}
              >
                <MdOutlineKeyboardDoubleArrowUp size="1.5em" />
              </p>
            }
          />
        </div>
      </div>
    </>
  );
}

export default Footer;
