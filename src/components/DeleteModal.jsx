import React from "react";

export default function DeleteModal({ dltVisibility, setDltVisibility }) {
  const handleClick = () => {
    console.log(dltVisibility);
    setDltVisibility(false);
  };
  if (!dltVisibility) {
    return null;
  }
  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-zinc-900 p-10 rounded-xl w-72">
        <h1 className="font-semibold text-center text-4xl text-white">
          Attention
        </h1>
        <p className="text-center text-white text-2xl mb-5">Deleted</p>

        {/* <div className="flex flex-col">
          <input
            type="text"
            className="border border-gray-700 p-2 rounded mb-5"
            placeholder="email@example.com"
          />
          <input
            type="text"
            className="border border-gray-700 p-2 rounded mb-5"
            placeholder="********"
          />
        </div> */}
        <div className="text-center">
          <button
            className="px-5 py-2 bg-rose-700 text-white hover:bg-rose-500 hover:scale-105 rounded text-3xl"
            onClick={handleClick}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
