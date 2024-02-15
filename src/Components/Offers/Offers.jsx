import React from "react";

import exclusive_image from "../../Assets/exclusive_image.png";

const Offers = () => {
  const scrolly = () => {
    const popularDiv = document.querySelector(".popular");
    popularDiv.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="offers">
      <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button onClick={scrolly}>Check Now</button>
      </div>
      <div className="offers-right"></div>
      <img className="offerImg" src={exclusive_image} alt="exclusiveImage" />
    </div>
  );
};

export default Offers;
