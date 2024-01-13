import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

function About2(props) {
  const navigate = useNavigate();
  return (
    <div id="about">
      <div className="about-image">
        <img src={props.image} alt="" />
      </div>
      <div className="about-text">
        <h2>{props.title}</h2>
        <p>
          Chilies are excellent source of Vitamin, A, B, C and E with minerals
          like molybdenum, manganese, folate, potassium, thiamin, and copper.
          Chilies stimulate the appetite, help to clear the lungs, stimulate
          digestive system, act as a powerful antioxidant and reduce the risk of
          heart attacks
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
            backgroundColor: "#84EC00",
          }}
          onClick={() => navigate("orders")}
        >
          Order
        </Button>
      </div>
    </div>
  );
}

export default About2;
