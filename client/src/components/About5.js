import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

function About5(props) {
  const navigate = useNavigate();
  return (
    <div id="about">
      <div className="about-image">
        <img src={props.image} alt="" />
      </div>
      <div className="about-text">
        <h2>{props.title}</h2>
        <p>
          Ginger is the root of flowering plant. It is used as a spice for food,
          flavouring for beverages or in folk medicine. Ginger originated in
          South China and later spread all over Asia followed by the African
          continent. The spice was introduced to Europe from India in the 1st
          century AD. Today it is a very commonly used spice globally.
        </p>
        <Button
          variant="outline-dark"
          style={{
            width: "80%",
            marginBottom: "2rem",
            border: "none",
            background: "transparent",
            padding: "6px 16px",
            fontSize: "1.1rem",
            color: "black",
            background: "rgb(0, 212, 212)",
            borderRadius: "5px",
            marginRight: "20px",
            backgroundColor: "#84EC00 ",
          }}
          onClick={() => navigate("orders")}
        >
          Order
        </Button>
      </div>
    </div>
  );
}

export default About5;
