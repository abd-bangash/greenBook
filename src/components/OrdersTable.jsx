import React from "react";

function OrdersTable({ ordersData, handleClick }) {
  return (
    <div className="w-screen text-xl  flex justify-center items-center p-5">
      <table className="w-screen  text-2xl p-5 divide-y">
        <thead className="tableHeader border-2 text-4xl ">
          <tr className="headings ">
            <th className="column border-x-2 p-4">Name</th>
            <th className="column border-x-2 p-4">Qty</th>
            <th className="column border-x-2 p-4">Date</th>
            <th className="column border-x-2 p-4">Time</th>
            <th className="column border-x-2 p-4">Address</th>
            <th className="column border-x-2 p-4">Contact No</th>
            <th className="column border-x-2 p-4">Email</th>
            <th className="column border-x-2 p-4">Message</th>
            <th className="column border-x-2 p-4">Actions</th>
          </tr>
        </thead>
        <tbody className="tableBody">
          {ordersData.map((order) => (
            <tr className="tableBodyRows " key={order._id}>
              <td className="row text-wrap border-2 p-2">{order.name}</td>
              <td className="row text-center border-2 p-2">
                {order.noOfCopies}
              </td>
              <td className="row text-center border-2 p-2">{order.date}</td>
              <td className="row text-center border-2 p-2">{order.time}</td>
              <td className="row text-wrap border-2 p-2 pl-3">
                {order.postalAddress}
              </td>
              <td className="row text-center border-2 p-2">
                {order.contactNo}
              </td>
              <td className="row text-center border-2 p-2">{order.email}</td>
              <td className="row text-center border-2 p-2">{order.message}</td>
              <td className="row text-center border-2 p-2">
                <button
                  className="dltButton bg-rose-700 border-2 border-zinc-800 rounded-xl p-2 m-1 hover:scale-105 hover:bg-rose-500"
                  onClick={() => {
                    handleClick(order._id);
                  }}
                >
                  Del
                </button>
                <button
                  className="dltButton bg-emerald-700 border-2 border-zinc-800 rounded-xl p-2 hover:scale-105 hover:bg-emerald-500"
                  onClick={() => {
                    handleClick(order._id);
                  }}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrdersTable;
