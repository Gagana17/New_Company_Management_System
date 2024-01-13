import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
function Contact() {
  const navigate = useNavigate();
  return (
    <div id="contact">
      <h3>send mail</h3>
      <div className="contact-input">
        <input type="email" placeholder="example@gmail.com" />
        <a href="#">contact</a>
      </div>
      <br />
      <Button
        variant="outline-dark"
        style={{
          width: "10%",
          marginBottom: "2rem",
          border: "none",
          background: "transparent",
          backgroundColor: "#00b7ff",
          padding: "6px 16px",
          fontSize: "1.1rem",
          color: "aliceblue",
          background: "rgb(0, 212, 212)",
          borderRadius: "5px",
          marginRight: "20px",
        }}
        onClick={() => navigate("admin")}
      >
        Admin
      </Button>
    </div>
  );
}

export default Contact;
