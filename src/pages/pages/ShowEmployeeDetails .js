import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import "../../styles/ShowEmployeeDetails.css";

const ShowEmployeeDetails = () => {
  const [employeeList, setEmployeeList] = useState([]);

  useEffect(() => {
    const fetchEmployeeDetails = async () => {
      try {
        const response = await axios.get('http://localhost:7002/rest/all');

        if (response.data && response.data.status === true) {
          setEmployeeList(response.data.result);
        } else {
          console.error('Failed to fetch employee details. Status:', response.data.status);
        }
      } catch (error) {
        console.error('Error fetching employee details:', error);
      }
    };

    fetchEmployeeDetails();
  }, []);

  const handleDelete = async (employeeId) => {
    try {
      const response = await axios.delete(`http://localhost:7002/rest/delete/${employeeId}`);
  
      if (response.status === 200) {
        setEmployeeList((prevEmployeeList) =>
          prevEmployeeList.filter((employee) => employee.id !== employeeId)
        );
        alert(`Data deleted with ID: ${employeeId}`);
      } else {
        console.error('Failed to delete employee. Unexpected response:', response);

        alert('Failed to delete employee. Please try again.');
      }
    } catch (error) {
      console.error('Error deleting employee:', error);
      alert('Error deleting employee. Please try again later.');
    }
  };
  
  return (
    <div>
      <h1> Employee Details</h1>
      <table className="employee-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Restaurant ID</th>
            <th>Role ID</th>
            <th>Address</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employeeList.map((employee) => (
            <tr key={employee.id}>
              <td>{`${employee.first_name} ${employee.last_name}`}</td>
              <td>{employee.gender}</td>
              <td>{employee.email}</td>
              <td>{employee.phonenumber}</td>
              <td>{employee.restaurant_id}</td>
              <td>{employee.role_id}</td>
              <td>{employee.address}</td>
              <td>
                <button onClick={() => handleDelete(employee.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <Link to="/restaurant">
        <button className='bomb'>Back</button>
      </Link>
    </div>
  );
};

export default ShowEmployeeDetails;
