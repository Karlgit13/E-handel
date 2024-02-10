import React, { useContext, useState } from "react";
import "./Navbar.css";
import logo from "../../Assets/logo.png";
import cart_icon from "../../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import barsSolid from "../../Assets/bars-solid.svg";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  // eslint-disable-next-line
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getTotalCartItems } = useContext(ShopContext);

  return (
    <div className="navbar">
      <div className="nav-logo">
        <a href="/">
          <img className="navImg" src={logo} alt="logo" />
        </a>
        <a style={{ textDecoration: "none" }} href="/">
          <p className="nav-title">E-Commerce</p>
        </a>
      </div>
      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/">
            Shop
          </Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("mens");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/mens">
            Men
          </Link>
          {menu === "mens" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("women");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/womens">
            Women
          </Link>{" "}
          {menu === "women" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/kids">
            Kids
          </Link>{" "}
          {menu === "kids" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <img src={cart_icon} alt="cart icon" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
      <div className="burger-menu">
        <img className="bars-solid" src={barsSolid} alt="barsSolid" />
      </div>
    </div>
  );
};

export default Navbar;
