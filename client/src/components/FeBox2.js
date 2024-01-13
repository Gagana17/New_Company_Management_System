import React from "react";

function FeBox2(props) {
  return (
    <div className="a-box">
      <div className="a-b-img">
        <img src={props.image} />
      </div>
      <div className="s-b-text">
        <h2>{props.title}</h2>
        <p>Cinnamon Barks</p>
        <p>25g</p>
        <p>Rs 195.00</p>
      </div>
    </div>
  );
}

export default FeBox2;
