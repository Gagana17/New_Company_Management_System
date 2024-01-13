import React from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

function Header() {
  const navigate = useNavigate();
  return (
    <div id="main">
      <Navbar />
      <div className="name">
        <h1>
          <span>Welcome to Lanka Flavour</span>
        </h1>
        <br />
        <h6
          style={{
            color: "white",
          }}
        >
          Lanka flavor(pvt)Ltd. was formed in year 2023, by Dilshara Perera as a
          spice manufacturing compnay that markets the "Our Currie" brand.
        </h6>
        <br />

        <p
          className="details"
          style={{
            color: "yellow",
          }}
        >
          Singn into our system for getting your own flavor
        </p>
        <Button
          variant="outline-dark"
          style={{
            width: "100%",
            marginBottom: "2rem",
            border: "none",
            background: "transparent",
            padding: "6px 16px",
            fontSize: "1.1rem",
            color: "aliceblue",
            background: "rgb(0, 212, 212)",
            borderRadius: "5px",
            marginRight: "20px",
            backgroundColor: "#00b7ff",
          }}
          onClick={() => navigate("login")}
        >
          SignIn
        </Button>
        <Button
          variant="outline-dark"
          style={{
            width: "100%",
            marginBottom: "2rem",
            border: "none",
            background: "transparent",
            padding: "6px 16px",
            fontSize: "1.1rem",
            color: "aliceblue",
            background: "rgb(0, 212, 212)",
            borderRadius: "5px",
            marginRight: "20px",
            backgroundColor: "orange",
          }}
          onClick={() => navigate("create")}
        >
          SignUp
        </Button>
      </div>
    </div>
  );
}

export default Header;
