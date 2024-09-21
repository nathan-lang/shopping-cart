import "./App.css";
import cart from "../assets/shopping-cart.png";
import { Link } from "react-router-dom";
import React, { useState, useContext } from "react";
import { ShopContext } from "./App.jsx";

function Navbar() {
  // Note: Don't forget a slash in front of the link to go to because it'll append path names more than once which you don't want!
  const { cartItems } = useContext(ShopContext);
  return (
    <div className="nav-bar">
      <Link className="home-link" to="/">
        Home
      </Link>
      <Link className="shop-link" to="/Shop">
        Shop
      </Link>
      <div className="cart-section">
        <img className="cart-logo" src={cart} />
        {cartItems}
      </div>
    </div>
  );
}

export default Navbar;
