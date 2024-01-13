import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

function About4(props) {
  const navigate = useNavigate();
  return (
    <div id="about">
      <div className="about-image">
        <img src={props.image} alt="" />
      </div>
      <div className="about-text">
        <h2>{props.title}</h2>
        <p>
          One of the most consumed spices in the world, Pepper, the fruit of the
          plant Piper nigrum is native to the Indian state, Kerala. Even though
          Sri Lanka caters to merely 2.5% of the global demand for pepper,
          Ceylon Pepper is rich in Piperine, which gives Ceylon Pepper its
          distinct pungency and a premium price in the global market driven by
          its plenitude of the alkaloid.
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

export default About4;
