import React from "react";

function About6(props) {
  return (
    <div id="about">
      <div className="about-image">
        <img src={props.image} alt="" />
      </div>
      <div className="about-text">
        <h2>{props.title}</h2>
        <p>
          Curry leaves are small in size and long, slender, and oval in shape
          narrowing to a point, averaging 2-4 centimeters in length and 1-2
          centimeters in width. The shiny, dark green leaves grow pinnately
          along a stem, and each branch can hold up to twenty, tightly clustered
          leaves. Curry leaves are extremely aromatic and have a strong flavor
          that has been compared to citrus, asafoetida, anise, and lemongrass.
        </p>
        <button> {props.button} </button>
      </div>
    </div>
  );
}

export default About6;
