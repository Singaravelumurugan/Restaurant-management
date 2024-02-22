import React from "react";
import Layout from "./../components/Layout/Layout";
import { Link } from "react-router-dom";
import cafe from "../images/cafe.jpeg";
import "../styles/HomeStyles.css";

const Home = () => {
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${cafe})` }}>
        <div className="headerContainer">
          <h1 style={{color:"white"}}>CoffeeShop</h1>
          <p style={{color:"white"}}>Best Coffee In India</p>
          <Link to="/login">
            <button>LOGIN </button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;