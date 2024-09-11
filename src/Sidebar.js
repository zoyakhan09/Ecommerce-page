import React from "react";
import "./Sidebar.css";

function Sidebar({ filters, onFilterChange }) {
  const handleChange = (e) => {
    onFilterChange({ [e.target.name]: e.target.value });
  };

  return (
    <div className="sidebar">
      <h3>Filters</h3>

      <div>
        <label>Category</label>
        <select name="category" value={filters.category} onChange={handleChange}>
          <option value="">All</option>
          <option value="Dresses">Dresses</option>
          <option value="Shirts">Shirts</option>
          <option value="Pants">Pants</option>
          <option value="Skirts">Skirts</option>
        </select>
      </div>

      <div>
        <label>Color</label>
        <select name="color" value={filters.color} onChange={handleChange}>
          <option value="">All</option>
          <option value="Red">Red</option>
          <option value="Blue">Blue</option>
          <option value="Black">Black</option>
          <option value="White">White</option>
          <option value="Green">Green</option>
        </select>
      </div>

      <div>
        <label>Size</label>
        <select name="size" value={filters.size} onChange={handleChange}>
          <option value="">All</option>
          <option value="S">Small</option>
          <option value="M">Medium</option>
          <option value="L">Large</option>
        </select>
      </div>

      <div>
        <label>Sort By Price</label>
        <select name="sort" value={filters.sort} onChange={handleChange}>
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </select>
      </div>
    </div>
  );
}

export default Sidebar;
