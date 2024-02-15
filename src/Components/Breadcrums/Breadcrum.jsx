import React from "react";
import arrow_icon from "../../Assets/arrow.png";
import { Link } from "react-router-dom";

const Breadcrum = (props) => {
  const { product } = props;

  const getCategoryPath = (category) => {
    switch (category) {
      case "men":
        return "/mens";
      case "women":
        return "/womens";
      case "kid":
        return "/kids";
      default:
        return "/";
    }
  };

  return (
    <div className="breadcrum">
      <Link to={"/"}>Home</Link> <img src={arrow_icon} alt="arrowIcon" />{" "}
      <Link to={"/"}>Shop</Link> <img src={arrow_icon} alt="arrowIcon" />{" "}
      <Link to={getCategoryPath(product.category)}>{product.category}</Link>{" "}
      <img src={arrow_icon} alt="" />{" "}
      <span className="okkspan">{product.name}</span>
    </div>
  );
};

export default Breadcrum;
