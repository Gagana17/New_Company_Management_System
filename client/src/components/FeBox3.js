import React from "react";

function FeBox3(props) {
  return (
    <div className="a-box">
      <div className="a-b-img">
        <img src={props.image} />
      </div>
      <div className="s-b-text">
        <h2>{props.title}</h2>
        <p>Black Pepper</p>
        <p>250g</p>
        <p>Rs 750.00</p>
      </div>
    </div>
  );
}

export default FeBox3;
