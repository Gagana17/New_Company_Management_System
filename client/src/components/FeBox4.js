import React from "react";

function FeBox4(props) {
  return (
    <div className="a-box">
      <div className="a-b-img">
        <img src={props.image} />
      </div>
      <div className="s-b-text">
        <h2>{props.title}</h2>
        <p>Ginger</p>
        <p>1Kg</p>
        <p>Rs 525.00</p>
      </div>
    </div>
  );
}

export default FeBox4;
