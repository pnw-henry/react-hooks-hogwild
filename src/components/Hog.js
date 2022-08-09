import React, { useState } from "react";
import HogDetails from "./HogDetails";

function HogItem({ hog }) {
  const [showDetails, setShowDetails] = useState(false);

  function handleDetailsClick() {
    setShowDetails((showDetails) => !showDetails);
  }
  return (
    <div className="ui eight wide column">
      <div className="hog">
        <img src={hog.image} alt={hog.name}></img>
        <h1 className="header">{hog.name}</h1>
      </div>
      <div className="hog-details">
        {showDetails ? <HogDetails hog={hog} /> : null}
        <button onClick={handleDetailsClick} className="hog button">
          {showDetails ? "Less Details" : "More Details"}
        </button>
      </div>
    </div>
  );
}

export default HogItem;
