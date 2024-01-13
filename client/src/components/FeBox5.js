import React from "react";

function FeBox5(props) {
  return (
    <div className="a-box">
      <div className="a-b-img">
        <img src={props.image} />
      </div>
      <div className="s-b-text">
        <h2>{props.title}</h2>
        <p>Black Pepper</p>
      </div>
    </div>
  );
}

export default FeBox5;
