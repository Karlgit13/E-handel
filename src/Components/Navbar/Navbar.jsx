import React, { useContext, useState } from "react";

import logo from "../../Assets/logo.png";
import cart_icon from "../../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import barsSolid from "../../Assets/bars-solid.svg";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getTotalCartItems } = useContext(ShopContext);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <Link to="/">
          <img className="navImg" src={logo} alt="logo" />
        </Link>
        <Link to="/">
          <p className="nav-title">E-Commerce</p>
        </Link>
      </div>
      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link to="/">Shop</Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("mens");
          }}
        >
          <Link to="/mens">Men</Link>
          {menu === "mens" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("women");
          }}
        >
          <Link to="/womens">Women</Link> {menu === "women" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}
        >
          <Link to="/kids">Kids</Link> {menu === "kids" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login">
        <button className="login-button">Login</button>
        </Link>
        <Link to="/cart">
          <img src={cart_icon} alt="cart icon" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
      <div className="burger-menu" onClick={toggleMenu}>
        <img className="bars-solid" src={barsSolid} alt="barsSolid" />
        {isMenuOpen && (
          <div className="dropdown-menu">
            <Link to="/" onClick={() => setIsMenuOpen(false)}>
              Shop
            </Link>
            <Link to="/mens" onClick={() => setIsMenuOpen(false)}>
              Men
            </Link>
            <Link to="/womens" onClick={() => setIsMenuOpen(false)}>
              Women
            </Link>
            <Link to="/kids" onClick={() => setIsMenuOpen(false)}>
              Kids
            </Link>
            <Link to="/login" onClick={() => setIsMenuOpen(false)}>
              Login
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
