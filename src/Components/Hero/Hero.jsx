import React from "react";
import "./Hero.css";
import hand_icon from "../../Assets/hand_icon.png";
import arrow_icon from "../../Assets/arrow.png";
import hero_image from "../../Assets/hero_image.png";

const Hero = () => {

  const scrollThingy = () => {
    const newCollectionsDiv = document.querySelector(".new-collections");
    newCollectionsDiv.scrollIntoView({behavior: "smooth"})
  }

  return (
    <div className="hero">
      <div className="hero-left">
        <div>
          <div className="hand-hand-icon">
            <img className="handImg" src={hand_icon} alt="handIcon" />
          </div>
          <p>new</p>
          <p>collections</p>
          <p>for everyone</p>
        </div>
        <button onClick={scrollThingy} className="hero-latest-btn">
          <div>Latest</div>
          <img src={arrow_icon} alt="arrowIcon" />
        </button>
      </div>
      <div className="hero-right">
        <img className="heroImg" src={hero_image} alt="heroImage" />
      </div>
    </div>
  );
};

export default Hero;
