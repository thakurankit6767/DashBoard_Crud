import React, { useState } from "react";
import {useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const addProduct = async () => {
    if (!name || !price || !category || !company) {
      setError(true);
      return false;
    }

    console.log(name, price, category, company);
    const userId = JSON.parse(localStorage.getItem("user"))._id;

    let result = await fetch("http://localhost:5000/add-product", {
      method: "post",
      body: JSON.stringify({ name, price, category, company, userId }),
      headers: {
        "Content-Type": "application/json",
        authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    });
    result = await result.json();
    console.warn(result);
    navigate("/");
  };

  return (
    <div className="product">
      <h1>AddProduct</h1>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
        className="inputBox"
        placeholder="Enter Product Name"
      />
      {error && !name && (
        <span className="invalid-input">Enter Valid Name</span>
      )}
      <input
        type="text"
        onChange={(e) => setPrice(e.target.value)}
        value={price}
        className="inputBox"
        placeholder="Enter Product Price"
      />
      {error && !price && (
        <span className="invalid-input">Enter Valid Price</span>
      )}
      <input
        type="text"
        onChange={(e) => setCategory(e.target.value)}
        value={category}
        className="inputBox"
        placeholder="Enter Product Category"
      />
      {error && !category && (
        <span className="invalid-input">Enter Valid Category</span>
      )}
      <input
        type="text"
        onChange={(e) => setCompany(e.target.value)}
        value={company}
        className="inputBox"
        placeholder="Enter Product company"
      />
      {error && !company && (
        <span className="invalid-input">Enter Valid Company</span>
      )}
      <button className="appButton" onClick={addProduct}>
        Add Product
      </button>
    </div>
  );
};

export default AddProduct;
