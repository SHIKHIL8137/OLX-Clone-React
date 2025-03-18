import React, { useState, useEffect } from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import NavbarSub from "./components/Navbar/NavbarSub";
import AuthModal from "./components/Login/Login";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import AddProductForm from "./components/addProduct/addProduct";
import {Routes,Route, useNavigate} from 'react-router-dom'

function App() {
  

  return (
    <>
    <ToastContainer position="top-right" autoClose={3000} />
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/addProduct" element ={<AddProductForm/>}/>
    </Routes>
    </>
  );
}

export default App;
