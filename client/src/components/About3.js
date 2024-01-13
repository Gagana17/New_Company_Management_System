import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

function About3(props) {
  const navigate = useNavigate();
  return (
    <div id="about">
      <div className="about-image">
        <img src={props.image} alt="" />
      </div>
      <div className="about-text">
        <h2>{props.title}</h2>
        <p>
          Cinnamon refers to Cinnamomum Verum or ‘true cinnamon,’which is a
          plant endemic to Sri Lanka. Most other cinnamon (from other countries)
          is from related species of plants and is called ‘cassia’.
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

export default About3;
