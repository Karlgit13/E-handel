import React, { useState } from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  const [toggleDiv, setToggleDiv] = useState(false);

  const handleDiv = () => {
    setToggleDiv(!toggleDiv);
  };

  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div
          onClick={handleDiv}
          className={`descriptionbox-nav-box ${toggleDiv ? "" : "fade"}`}
        >
          Description
        </div>
        <div
          onClick={() => setToggleDiv(false)}
          className={`descriptionbox-nav-box ${!toggleDiv ? "" : "fade"}`}
        >
          Reviews (0)
        </div>
      </div>
      {toggleDiv ? (
        <div className="descriptionbox-description">
          <p>Description...</p>
          <p>More description...</p>
        </div>
      ) : (
        <div className="descriptionbox-description">
          <p>Reviews...</p>
          <p>More reviews...</p>
        </div>
      )}
    </div>
  );
};

export default DescriptionBox;
