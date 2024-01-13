import React from "react";

function FeBox1(props) {
  return (
    <div className="a-box">
      <div className="a-b-img">
        <img src={props.image} />
      </div>
      <div className="s-b-text">
        <h2>{props.title}</h2>
        <p>Chilli Powder</p>
        <p>250g</p>
        <p>Rs 550.00</p>
      </div>
    </div>
  );
}

export default FeBox1;
