import React from "react";
function Login() {
  return (
    <>
      <div className="relative w-full h-screen  text-white z-1 bg-[url(https://images.unsplash.com/photo-1514823529749-16594073828c?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-no-repeat bg-cover">
        <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
          {/* <div className="flex justify-center my-3">
            <h1 className="logo text-6xl text-white">Green Book</h1>
          </div> */}
          <div className="bg h-[30vw] w-[25vw] py-3 bg-zinc-800/90 z-2 shadow-xl shadow-black rounded-xl">
            <div className="form flex justify-center mt-9">
              <h1 className="text-white text-5xl font-semibold tracking-wide  ">
                Login
              </h1>
            </div>
            <div className="form w-[25vw] flex justify-center items-center  ">
              <form
                action="submit"
                method="post"
                className="flex flex-wrap justify-center"
              >
                <div>
                  <input
                    className="w-[22vw] h-14  my-9 p-2 pl-auto bg-white/90 text-black font-semibold text-center text-lg rounded-xl  shadow-md shadow-black"
                    type="text"
                    name="email"
                    placeholder="Enter your email address here."
                  />
                </div>

                <div>
                  <input
                    className="w-[22vw] h-14 my-9 p-2 pl-auto bg-white/90 text-black font-semibold text-center text-lg rounded-xl  shadow-md shadow-black"
                    type="password"
                    name="password"
                    placeholder="Enter your password here."
                  />
                </div>
                <div className="btn w-44 flex justify-center  p-3 border-2 border-zinc-900 bg-zinc-950 shadow-lg shadow-black text-white font-semibold  hover:scale-105 rounded-xl">
                  <button className="bg-green text-xl">Continue</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
