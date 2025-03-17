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

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState("login");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const openAuthModal = (mode) => {
    setAuthMode(mode);
    setModalOpen(true);
  };

  const handleLoginSuccess = (userData) => {
    setUser(userData);
    setModalOpen(false);
  };

  return (
    <>
    <ToastContainer position="top-right" autoClose={3000} />
      <Navbar openAuthModal={openAuthModal} user={user} />
      <NavbarSub />
      <Home />
      <Footer />

      <AuthModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        mode={authMode}
        setMode={setAuthMode}
        onLoginSuccess={handleLoginSuccess}
      />
    </>
  );
}

export default App;
