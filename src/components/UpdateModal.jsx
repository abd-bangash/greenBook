import React from "react";
import { useFormik } from "formik";

export default function UpdateModal({ updtVisibility, setUpdtVisibility }) {
  const handleClick = () => {
    console.log(updtVisibility);
    setUpdtVisibility(false);
  };
  if (!updtVisibility) {
    return null;
  }
  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-zinc-900 p-10 rounded-xl w-[30%]">
        <h1 className="font-semibold text-center text-4xl text-white">
          Attention
        </h1>
        <p className="text-center text-white text-2xl mb-5">Edit Order</p>

        <form method="PATCH">
          <div className="flex flex-col">
            <input
              type="text"
              className="border border-gray-700 p-2 rounded mb-5 text-2xl w-[90%] translate-x-[5%] text-center text-zinc-800"
              placeholder="update postal address"
            />
            <input
              type="number"
              className="border border-gray-700 p-2 rounded mb-5 text-2xl  w-[90%] translate-x-[5%] text-center text-zinc-800"
              placeholder="update No of Copies"
            />
            <input
              type="tel"
              className="border border-gray-700 p-2 rounded mb-5 text-2xl  w-[90%] translate-x-[5%] text-center text-zinc-800"
              placeholder="Update Contact Number"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="px-5 py-2 bg-emerald-700 text-white hover:bg-emerald-500 hover:scale-105 rounded text-3xl"
              onClick={handleClick}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
