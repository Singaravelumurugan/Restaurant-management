import React, { useState } from "react";
import "../../styles/Orders.css";

const Orders = () => {
  const [orders, setOrders] = useState([
    { id: 1, name: "Cappuccino ", quantity: 2, price: 398, status: "Preparing" },
    { id: 2, name: "Cold Brew ", quantity: 1, price: 149, status: "Preparing" },
    { id: 3, name: "Espresso ", quantity: 1, price: 99, status: "Preparing" },
  ]);

  const handleStatusChange = (newStatus) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) => ({ ...order, status: newStatus }))
    );
  };

  const handleBillButtonClick = () => {
    const allDelivered = orders.every((order) => order.status === "Delivered");

    console.log("All Delivered:", allDelivered);

    if (allDelivered) {
      console.log("Generating Bill...");
      alert("Bill generated successfully!");
    } else {
      console.log("Change delivery status for all orders to Delivered first.");

      alert("Change delivery status for all orders to Delivered first.");
    }
  };

  return (
    <div className="common-container">
      <h1>Orders</h1>

      <table className="orders-table">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={order.id}>
              <td>{index + 1}</td>
              <td>{order.name}</td>
              <td>{order.quantity}</td>
              <td>&#8377;{order.price}</td>
              <td>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <button onClick={() => handleStatusChange("Delivered")}>Delivered</button> 
      {orders.every((order) => order.status === "Delivered") && (
        <button className="bill-button" onClick={handleBillButtonClick}>Bill</button>
      )}
    </div>
  );
};

export default Orders;
