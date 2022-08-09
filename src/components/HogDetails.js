import React from "react";

function HogDetails({ hog }) {
  const { specialty, greased, weight, "highest medal achieved": medal } = hog;

  return (
    <div className="Details">
      <h3>{specialty}</h3>
      <strong>{greased ? "Greased" : "Nongreased"}</strong>
      <p>Highest Medal Achieved: {medal}</p>
      <p>Weight: {weight}</p>
    </div>
  );
}

export default HogDetails;
