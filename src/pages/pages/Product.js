

function Products() {
  
  return (
    <div className="App">
      <h1>Products</h1>
      <div className="form-group">
        <label htmlFor="category">Select a category</label>
        <select
          id="category"
          name="category"
        >
          <option value="">All</option>
          <option value="Tea">Tea</option>
          <option value="Coffee">Coffee</option>
          <option value="Cool Drinks">Cool Drinks</option>
          <option value="Snacks">Snacks</option>
        </select>
      </div>
  
    </div>
  );
}

export default Products;