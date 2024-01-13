import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

function About(props) {
  const navigate = useNavigate();
  return (
    <div id="about">
      <div className="about-image">
        <img src={props.image} alt="" />
      </div>
      <div className="about-text">
        <h2>{props.title}</h2>
        <p>
          Turmeric is a very exotic, golden spice. now become a regular feature
          in many Sri Lankan dishes. Its golden color branches out in any dish
          you use it in, leaving you with a meal that looks fit for royalty.
        </p>
        <Button
          variant="outline-dark"
          style={{
            width: "80%",
            marginBottom: "2rem",
            color: "black",
            border: "none",
            background: "transparent",
            padding: "6px 16px",
            fontSize: "1.1rem",

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

export default About;
