import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../../styles/Home.css";

function Products() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);
  const [quantity, setQuantity] = useState({});

  useEffect(() => {
    const getProducts = async () => {
      try {
        const url = category ? `http://localhost:7002/products/get/${category}` : 'http://localhost:7002/products';

        const response = await axios.get(url);
        setProducts(response.data.result);
      } catch (error) {
        console.error(error);
      }
    };

    getProducts();
  }, [category]);

  const handleChange = (e) => {
    const { value } = e.target;

    const categoryIds = {
      "Tea": 101,
      "Coffee": 102,
      "Snacks": 103,
      "Cool Drinks": 104,
    };

    const categoryId = categoryIds[value];

    setCategory(categoryId);
  };

  const handleQuantityChange = (productId, newQuantity) => {
    setQuantity((prevQuantity) => ({ ...prevQuantity, [productId]: newQuantity }));
  };

  const handleOrderButtonClick = () => {
    const selectedItemsDetails = products
      .filter((product) => selectedItems.includes(product.id))
      .map((product) => ({
        id: product.id,
        name: product.product_name,
        price: product.price,
        quantity: quantity[product.id] || 1, 
      }));

    console.log("Selected items for order:", selectedItemsDetails);
  };

  const toggleItemSelection = (productId) => {
    setSelectedItems((prevSelectedItems) =>
      prevSelectedItems.includes(productId)
        ? prevSelectedItems.filter((id) => id !== productId)
        : [...prevSelectedItems, productId]
    );
  };

  const renderProducts = () => {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Category</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.product_name}</td>
              <td>{product.description}</td>
              <td>&#8377;{product.price}</td>
              <td>{product.category_id}</td>
              <td>
                <button onClick={() => handleQuantityChange(product.id, (quantity[product.id] || 1) - 1)}>-</button>
                <input
                  type="number"
                  value={quantity[product.id] || 1}
                  onChange={(e) => handleQuantityChange(product.id, e.target.value)}
                  min="1"
                />
                <button onClick={() => handleQuantityChange(product.id, (quantity[product.id] || 1) + 1)}>+</button>
              </td>
              <td>
                <input
                  type="checkbox"
                  checked={selectedItems.includes(product.id)}
                  onChange={() => toggleItemSelection(product.id)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  

  return (
    <div className="">
      <h1>Products</h1>
      <div className="group">
        <label  htmlFor="category">Select a category</label>
        <select id="category" name="category" value={category} onChange={handleChange}>
          <option value="">All</option>
          <option value="Tea">Tea</option>
          <option value="Coffee">Coffee</option>
          <option value="Cool Drinks">Cool Drinks</option>
          <option value="Snacks">Snacks</option>
        </select>
      </div>
      <p>Selected Category: {category === "" ? "All" : category}</p> <br/>
      {renderProducts()}
        <Link to="/orders"> 
      <button className="order" onClick={handleOrderButtonClick}>Order</button>  </Link><br/><br/><br/>
    </div>
  );
}

export default Products;
