import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import "../../styles/Restaurant.css";


const RestaurantDetails = () => {
  const [restaurantDetails, setRestaurantDetails] = useState([]);
  const [rolesDetails, setRolesDetails] = useState([]);

  useEffect(() => {
    const fetchRestaurantDetails = async () => {
      try {
        const response = await axios.get('http://localhost:7002/restaurant');
        setRestaurantDetails(response.data.result); 
      } catch (error) {
        console.error('Error fetching restaurant details:', error);
      }
    };
    const fetchRolesDetails = async () => {
      try {
        const rolesResponse = await axios.get('http://localhost:7002/roles');
        setRolesDetails(rolesResponse.data.result);
      } catch (error) {
        console.error('Error fetching roles details:', error);
      }
    };

    fetchRolesDetails();
    fetchRestaurantDetails();
  }, []);

  return (
    <div className="container">
  <div className="left">
    <div className="restaurant">
      {Array.isArray(restaurantDetails) && restaurantDetails.map((restaurant) => (
        <div key={restaurant.id}> <br/> <br/>
          <h1>{restaurant.name}</h1> <br/>
          <p><strong>Phone Number:</strong> {restaurant.phonenumber}</p> <br/>
          <p><strong>Alt Phone Number:</strong> {restaurant.alternative_phonenumber}</p> <br/>
          <p><strong>Address:</strong> {restaurant.address}</p> <br/>
          <p><strong>Email:</strong> {restaurant.email}</p> <br/>
          <p><strong>GST Number:</strong> {restaurant.gst_number}</p>
          <br/>
          <Link to="/add"> 
            <button className='add'>Add employee+</button></Link> <br/><br/>
            <Link to="/home"> <button className='back'> <b>&lt;=  </b>Back</button></Link>  <br/><br/>
          
        </div>
      ))}
    </div>
  </div>
  <div className="right">
    <div className="roles-details"> <br/> <br/>
      <h2>Role Details</h2>  <br/>
      {Array.isArray(rolesDetails) && rolesDetails.map((role) => (
        <div key={role.id}> <br/>
          <p><strong>Role Name:</strong> {role.name}</p><br/>
         <p> <strong>Role ID:</strong> {role.id}</p><br/>
      

        </div>
      ))}
       <Link to="/showemployeedetails">
         <button>Show Details</button> </Link> <br/><br/>
    </div>
  </div>
</div>

  );
}

export default RestaurantDetails;
