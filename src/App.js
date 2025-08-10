import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import UserDashboard from "./pages/UserDashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/dashboard"
          element={
            <UserDashboard
              user={{ name: "Fabiha Parveen", email: "fabiha21@example.com", address: "xyz-city", }}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
