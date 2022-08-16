import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";
import SignUp from "./Components/SignUp";
import PrivateComponent from "./Components/PrivateComponent";
import Login from "./Components/Login";
import AddProduct from "./Components/AddProduct";
import ProductList from "./Components/ProductList";
import UpdateProduct from "./Components/UpdateProduct";
function AllRoutes() {
  return (
    <>
      <Nav />
      <Routes>
        <Route element={<PrivateComponent />}>
          <Route path="/" element={<ProductList />} />
          <Route path="/add" element={<AddProduct />} />
          <Route path="/update/:id" element={<UpdateProduct />} />
          <Route path="/logout" element={<h1>logout</h1>} />
          <Route path="/profile" element={<h1>Profile</h1>} />
        </Route>

        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
}
export default AllRoutes;
