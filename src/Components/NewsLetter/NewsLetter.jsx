import React from "react";


const NewsLetter = () => {
  return (
    <div className="newsletter">
      <h1>Get exclusive offers on your email!</h1>
      <p>subscribe to our newsletter and stay updated</p>
      <div className="input-div">
        <input type="email" placeholder="Your email id" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default NewsLetter;
