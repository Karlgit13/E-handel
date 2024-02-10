import React from "react";
import "./Breadcrum.css";
import arrow_icon from "../../Assets/arrow.png";

const Breadcrum = (props) => {
  const { product } = props;

  return (
    <div className="breadcrum">
      HOME <img src={arrow_icon} alt="arrowIcon" /> SHOP{" "}
      <img src={arrow_icon} alt="arrowIcon" /> {product.category}{" "}
      <img src={arrow_icon} alt="" />{" "}
      <span className="okkspan">{product.name}</span>
    </div>
  );
};

export default Breadcrum;
