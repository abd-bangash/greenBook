import React, { useState } from "react";
import Navbar from "./Navbar";
import { useFormik } from "formik";

function Order() {
  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Required";
    } else if (values.name.length > 25) {
      errors.name = "Must be 25 characters or less";
    }

    if (!values.noOfCopies) {
      errors.noOfCopies = "Required";
    } else if (values.noOfCopies > 20) {
      errors.noOfCopies = "Cannot order more than 20 copies ";
    } else if (values.noOfCopies < 1) {
      errors.noOfCopies = "Cannot order less than 1 copy ";
    }

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    if (!values.contactNo) {
      errors.contactNo = "Required";
    }

    if (!values.postalAddress) {
      errors.postalAddress = "Required";
    }

    return errors;
  };

  const submitFormBackend = async (orderData) => {
    try {
      let path = "http://localhost:3000/order";
      let res = await fetch(path, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });
      if (res.ok) {
        let data = await res.json();
        console.log(data);
      } else {
        console.log("failed to submit form");
      }
    } catch (e) {
      console.log(e);
    }
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      noOfCopies: "",
      contactNo: "",
      email: "",
      postalAddress: "",
      message: "",
    },
    validate: validate,
    onSubmit: (values, action) => {
      alert(
        "Submitting form with values : `\n`" + JSON.stringify(values, null, 2)
      );
      submitFormBackend(formik.values);
      action.resetForm();
    },
  });
  return (
    <>
      <Navbar />
      <div className="w-full h-screen flex justify-center  bg-zinc-800 text-white">
        <div className="grid grid-cols-1 justify-center items-center w-9/12 h-[90%]  border-4  text-center mt-10 p-3 rounded-xl">
          <div className="text-8xl font-bold">Order a copy</div>
          <form
            method="post"
            onSubmit={formik.handleSubmit}
            className="form text-xl text-left"
          >
            <div className="mt-3 p-5 text-3xl">
              <div className="twoLine grid grid-cols-2">
                {" "}
                <div
                  className={`field text-3xl grid grid-cols-1 justify-stretch my-5`}
                >
                  <label className="text- m-1">Name</label>
                  <input
                    onChange={formik.handleChange}
                    type="text"
                    name="name"
                    value={formik.values.name}
                    onBlur={formik.handleBlur}
                    className="border-2 m-1 border-zinc-800 text-zinc-800 p-3 rounded-xl"
                  />
                  {formik.touched.name && formik.errors.name ? (
                    <p
                      className={`text-xl ${
                        formik.errors.name ? "text-rose-500" : "text-zinc-800"
                      } font-semibold m-1`}
                    >
                      {formik.errors.name}
                    </p>
                  ) : null}
                </div>
                <div className="field text-3xl grid grid-cols-1 my-5 ">
                  <label className="text-white m-1">No. Of Copies</label>
                  <input
                    onChange={formik.handleChange}
                    type="text"
                    name="noOfCopies"
                    value={formik.values.noOfCopies}
                    onBlur={formik.handleBlur}
                    className="border-2 m-1 border-zinc-800 text-zinc-800 p-3 rounded-xl"
                  />
                  {formik.touched.noOfCopies && formik.errors.noOfCopies ? (
                    <p
                      className={`text-xl ${
                        formik.errors.noOfCopies
                          ? "text-rose-500"
                          : "text-zinc-800"
                      } font-semibold m-1`}
                    >
                      {formik.errors.noOfCopies}
                    </p>
                  ) : null}
                </div>
                <div className="field text-3xl grid grid-cols-1 my-5">
                  <label className="text-white m-1">Contact No.</label>
                  <input
                    onChange={formik.handleChange}
                    type="tel"
                    name="contactNo"
                    value={formik.values.contactNo}
                    onBlur={formik.handleBlur}
                    className="border-2 m-1 border-zinc-800 text-zinc-800 p-3 rounded-xl"
                  />
                  {formik.touched.contactNo && formik.errors.contactNo ? (
                    <p
                      className={`text-xl ${
                        formik.errors.contactNo
                          ? "text-rose-500"
                          : "text-zinc-800"
                      } font-semibold m-1`}
                    >
                      {formik.errors.contactNo}
                    </p>
                  ) : null}
                </div>
                <div className="field text-3xl grid grid-cols-1 my-5">
                  <label className="text-white m-1">Email</label>
                  <input
                    onChange={formik.handleChange}
                    type="text"
                    name="email"
                    value={formik.values.email}
                    onBlur={formik.handleBlur}
                    className="border-2 m-1 border-zinc-800 text-zinc-800 p-3 rounded-xl"
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <p
                      className={`text-xl ${
                        formik.errors.email ? "text-rose-500" : "text-zinc-800"
                      } font-semibold m-1`}
                    >
                      {formik.errors.email}
                    </p>
                  ) : null}
                </div>
              </div>

              <div className="field text-3xl grid grid-cols-1 m-2 my-5">
                <label className="text-white m-1">Postal Address</label>
                <input
                  onChange={formik.handleChange}
                  type="text"
                  name="postalAddress"
                  value={formik.values.postalAddress}
                  onBlur={formik.handleBlur}
                  className="border-2 m-1 text-zinc-800  border-zinc-800 w-full h-9/12 p-3 rounded-xl"
                />
                {formik.touched.postalAddress && formik.errors.postalAddress ? (
                  <p
                    className={`text-xl ${
                      formik.errors.postalAddress
                        ? "text-rose-500"
                        : "text-zinc-800"
                    } font-semibold m-1`}
                  >
                    {formik.errors.postalAddress}
                  </p>
                ) : null}
              </div>
              <div className="field text-3xl grid grid-cols-1  m-2 my-5">
                <label className="text-white m-1">Message (if any)</label>
                <textarea
                  onChange={formik.handleChange}
                  type="text"
                  name="message"
                  value={formik.values.message}
                  onBlur={formik.handleBlur}
                  className="border-2 m-1 text-zinc-800  border-zinc-800 w-full h-44 p-3 rounded-xl"
                />
              </div>
              <div className="bg-white w-[15%] flex justify-center ml-[42%] text-black text-lg font-bold rounded-xl p-3 m-3 shadow-lg shadow-zinc-800 hover:bg-zinc-900 hover:text-white hover:scale-110 ">
                <button type="submit">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Order;
