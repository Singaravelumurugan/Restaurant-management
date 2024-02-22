import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/Bill.css";

const Bill = () => {
  const [order, setOrder] = useState({
    orderId: 1001,
    items: [
      { productName: "Cappuccino", quantity: 2 },
      { productName: "Cold Brew", quantity: 1 },
      { productName: "Espresso", quantity: 1 },
    ],
    amount: 0,
    discount: 10,
    igst: 5,
    cgst: 5,
    finalPrice: 0,
    billStatus: "Not paid",
  });

  const navigate = useNavigate();

  const handleStatusChange = () => {
    setOrder((prevOrder) => ({
      ...prevOrder,
      billStatus: prevOrder.billStatus === "Not paid" ? "Paid" : "Not paid",
    }));
  };

  useEffect(() => {
    const calculatedAmount = 646;
    const calculatedFinalPrice = calculatedAmount * (1 - order.discount / 100);

    setOrder((prevOrder) => ({
      ...prevOrder,
      amount: calculatedAmount,
      finalPrice: calculatedFinalPrice,
    }));

    if (order.billStatus === "Paid") {
      // Redirect to the products page
      navigate("");
    }
  }, [order.billStatus, navigate, order.discount]);

  return (
    <div className="bill-container">
      <h1>Order Details</h1>
      <table className="order-table">
        <tbody>
          <tr>
            <td>Order ID:</td>
            <td>{order.orderId}</td>
          </tr>
          {order.items.map((item, index) => (
            <tr key={index}>
              <td>{`Product Name:`}</td>
              <td>{item.productName}</td>
            </tr>
          ))}
          {order.items.map((item, index) => (
            <tr key={index}>
              <td>{`Quantity :`}</td>
              <td>{item.quantity}</td>
            </tr>
          ))}
          <tr>
            <td>Amount:</td>
            <td>&#8377;{order.amount}</td>
          </tr>
          <tr>
            <td>Discount %:</td>
            <td>{order.discount}%</td>
          </tr>
          <tr>
            <td>IGST:</td>
            <td>{order.igst}%</td>
          </tr>
          <tr>
            <td>CGST:</td>
            <td>{order.cgst}%</td>
          </tr>
          <tr>
            <td>Final Price:</td>
            <td>&#8377;{order.finalPrice}</td>
          </tr>
          <tr>
            <td>Bill Status:</td>
            <td>
              <button onClick={handleStatusChange}>
                {order.billStatus === "Not paid" ? "Mark as Paid" : "Mark as Not Paid"}
              </button>
            </td>
          </tr>
          {order.billStatus === "Paid" && (
            <tr>
              <td colSpan="2">
                <button onClick={() => navigate("/home")}>
                  Take Orders
                </button>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Bill;
