import React from "react";
import "../../styles/Orderslist.css";

const Orderslist = () => {
  const orders1 = [
    { id: 1, name: "Cappuccino", quantity: 2, price: 398, status: "Delivered" },
    { id: 2, name: "Cold Brew", quantity: 1, price: 149, status: "Delivered" },
    { id: 3, name: "Espresso", quantity: 1, price: 99, status: "Delivered" },
  ];

  const orders2 = [
    { id: 4, name: "Chamomile Herbal Tea", quantity: 3, price: 199, status: "Delivered" },
    { id: 5, name: "Darjeeling Tea", quantity: 2, price: 299, status: "Delivered" },
    { id: 6, name: "Tea", quantity: 1, price: 20, status: "Delivered" },
  ];

  const renderOrdersTable = (orders, date) => {
    const total = orders.reduce((acc, order) => acc + order.price, 0);

    return (
      <>
        <h5>Date: "{date}"</h5><br/>
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
        </table> <br/>
        <div>Total Price: &#8377;{total}</div>
        <br />
      </>
    );
  };

  return (
    <div className="orders-container">
      <div>
        <h3>Today Orders</h3> <br/>
        {renderOrdersTable(orders1, "2024-02-09")}
      </div>
      <div>
        <h3>Yesterday Orders</h3> <br/>
        {renderOrdersTable(orders2, "2024-02-08")}
      </div>
    </div>
  );
};

export default Orderslist;
