import React, { useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import "../../styles/AddEmployee.css";


const AddEmployee = () => {
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    gender: "",
    email: "",
    phonenumber: "",
    address: "",
    role_id: "",
    restaurant_id: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:7002/rest/add', form);
      
      if (response.data && response.data.status === "TRUE") {
        alert("Data added successfully!");
      } else {
        alert("Failed to add data. Record may already exist.");
      }

      setForm({
        first_name: "",
        last_name: "",
        gender: "",
        email: "",
        phonenumber: "",
        address: "",
        role_id   : "",
        restaurant_id: ""
      });
    } catch (error) {
      console.error("Error adding data:", error);
      alert("Error adding data. Please try again.");
    }
  };



  return (
    <>  
    <div className="emp">
    
      <h1>Add Employee Details</h1>
      <form onSubmit={handleSubmit}>

        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input type="text"  id="firstName" name="firstName" value={form.first_name}
            onChange={(e) => setForm({ ...form, first_name: e.target.value })} required />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={form.last_name}  onChange={(e) => setForm({ ...form, last_name: e.target.value })}  required />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender</label>
          <select  id="gender"  name="gender"  value={form.gender}
            onChange={(e) => setForm({ ...form, gender: e.target.value })}
            required
          >
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phonenumber">Phone Number</label>
          <input
            type="tel"  id="phone" name="phonenumber"  value={form.phone}
            onChange={(e) => setForm({ ...form, phonenumber: e.target.value })} required />
        </div>
        <div className="form-group">
          <label htmlFor="restaurant_id">Restaurant ID</label>
          <input
            type="tel"  id="restaurant_id" name="restaurant_id"  value={form.restaurant_id}
            onChange={(e) => setForm({ ...form, restaurant_id: e.target.value })} required />
        </div>
        <div className="form-group">
          <label htmlFor="role_id">Role ID</label>
          <input
            type="tel"  id="role_id" name="role_id"  value={form.role_id}
            onChange={(e) => setForm({ ...form, role_id: e.target.value })} required />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <textarea
            id="address"
            name="address"
            value={form.address}
            onChange={(e) => setForm({ ...form, address: e.target.value })}
            required
          />
        </div> 
        <div  className="comp"> 
        <Link to="/restaurant">  
        <button className="return">&lt;= Back</button> </Link>
        <button className="sub" type="submit">Submit</button>
       
        </div>
      </form>
      </div>
    </>
  );
}

export default AddEmployee;
