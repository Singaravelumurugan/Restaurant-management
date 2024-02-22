import React, {useState} from "react";
import { Link } from "react-router-dom";

function Category(){

  const [role, setRole] = useState("");

  // Handle the role change event
  const handleChange = (e) => {
    const { value } = e.target;
    setRole(value);
  };

  // Handle the role submit event
  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with the role, such as sending to a server or navigating to another page
    console.log(role);
  };

  return (
    <div className="App">
      <h1>Select or Choose the Role</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="role">Role</label>
          <select
            id="role"
            name="role"
            value={role}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="Employee">Employee</option>
            <option value="Admin">Admin</option>
          </select>
        </div>
        <Link to="/restaurant">
        <button type="submit">Submit</button></Link>
      </form>
    </div>
  );
}
export default Category;