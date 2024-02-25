import axios from "axios";
import React, { useState } from "react";

function AddProducts() {
  const [formData, setFormData] = useState({
    productName: "",
    productImage: null,
    unitPrice: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, productImage: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URI}/api/products/add`,
        formData
      );
      console.log(response.data); // Log the response from the server
      // Optionally, reset the form after successful submission
      setFormData({
        productName: "",
        productImage: null,
        unitPrice: "",
      });
    } catch (error) {
      console.error("Error:", error);
      // Handle error state or show an error message to the user
    }
  };

  return (
    <div>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="productName">Product Name:</label>
          <input
            type="text"
            id="productName"
            name="productName"
            value={formData.productName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="productImage">Product Image:</label>
          <input
            type="file"
            id="productImage"
            name="productImage"
            accept="image/*"
            onChange={handleImageChange}
            required
          />
        </div>
        <div>
          <label htmlFor="unitPrice">Unit Price:</label>
          <input
            type="number"
            id="unitPrice"
            name="unitPrice"
            value={formData.unitPrice}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddProducts;
