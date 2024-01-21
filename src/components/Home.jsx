import React from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

function Home() {
  let navigate = useNavigate();
  const handleClick = (link) => {
    navigate(link);
  };
  return (
    <>
      <div className="home w-full h-[130vh] bg-zinc-700 justify-center">
        <Navbar />
        <div className="banner w-full flex justify-center rounded-3xl overflow-hidden">
          <img
            src="https://thechildrengreenbook.net/assets/images/banners/banner-02.jpeg"
            alt=""
            className="w-full h-[38vh]"
          />
        </div>
        <div className="introText text-white m-12 flex flex-wrap justify-center">
          <div>
            <h1 className="text-5xl m-3  font-semibold">Introduction</h1>
          </div>
          <div>
            {" "}
            <p className="text-xl m-3 text-center w-full">
              Although Climate Change is a global problem, yet Pakistan is one
              of the most affected countries, and therefore warrants some
              extraordinary steps to stem the tide. However, there could be no
              short-term solutions. In fact, considering the quantum of
              challenge the country is faced with, the entire nation needs to be
              sensitized. In this regard, the starting point, as per the School
              Education Department, South Punjab, could be sensitizing the next
              generation by imparting Climate Change related education at our
              schools. With this aim in view, the Department has launched a
              pilot project at Multan, which would be upscaled to public schools
              of entire South Punjab in due course of time.
            </p>
          </div>
          <div className="bg-white text-zinc-800 text-lg font-semibold rounded-xl p-3 m-3 shadow-lg shadow-zinc-800 hover:bg-zinc-800 hover:text-white hover:scale-110">
            <button onClick={() => handleClick("aboutus")}>Know More</button>
          </div>
        </div>
        <div className="orderACopy flex flex-wrap justify-center text-white my-3 bg-zinc-800 overflow-hidden">
          <div className="text-5xl font-bold m-3">Get A Copy</div>
          <div className="text-xl text-center font-semibold w-full m-3">
            If you wish to get a hard copy of The Children's Green Book, please
            click the button below:
          </div>
          <div className="bg-white text-zinc-800 text-lg font-semibold rounded-xl p-3 m-3 shadow-lg shadow-zinc-800 hover:bg-zinc-900 hover:text-white hover:scale-110">
            <button onClick={() => handleClick("order")}>Order Copy</button>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
