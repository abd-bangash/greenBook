import React from "react";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div className="absolute w-full h-screen bg-zinc-800 flex justify-between text-white m-0 p-0">
      <div className="left relative w-[50%] flex flex-wrap justify-around items-center m-0 p-0">
        <div className="heading w-[90%] m-0 p-0">
          <h1 className=" text-center text-7xl font-semibold ">
            SignUp / Login
          </h1>
        </div>
        <div className="text   m-0 p-0">
          <Link to={"/signup"}>
            <p className="text-2xl font-semibold">Become a member .</p>
          </Link>
        </div>
        <div className="text  m-0 p-0">
          <Link to={"/login"}>
            <p className="text-2xl font-semibold">Already a member ?</p>
          </Link>
        </div>
      </div>
      <div className="right relative w-[50%]  flex flex-wrap justify-center items-center">
        <div className="heading m-0 p-0">
          <h1 className="text-7xl font-bold m-0 p-0">Green Book</h1>
        </div>
        <div className="text p-4">
          <p className="text-2xl">
            Although Climate Change is a global problem, yet Pakistan is one of
            the most affected countries, and therefore warrants some
            extraordinary steps to stem the tide. However, there could be no
            short-term solutions. In fact, considering the quantum of challenge
            the country is faced with, the entire nation needs to be sensitized.
            In this regard, the starting point, as per the School Education
            Department, South Punjab, could be sensitizing the next generation
            by imparting Climate Change related education at our schools. With
            this aim in view, the Department has launched a pilot project at
            Multan, which would be upscaled to public schools of entire South
            Punjab in due course of time.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
