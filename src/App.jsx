import React from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import NavbarSub from "./components/Navbar/NavbarSub";
import AuthModal from "./components/Login/Login";
import AddProductForm from "./components/addProduct/addProduct";
import { Routes, Route } from "react-router-dom";
import { UserDataProvider } from "./components/Context/authContext";

function App() {
  return (
    <UserDataProvider>
      <ToastContainer position="top-right" autoClose={3000} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addProduct" element={<AddProductForm />} />
      </Routes>
    </UserDataProvider>
  );
}

export default App;
