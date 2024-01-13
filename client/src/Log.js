import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Navbar.css";

function Log({ Login, erroe }) {
  const navigate = useNavigate();

  // set loading
  const [isLoading, setIsLoading] = useState(false);
  // set success
  // const [isSuccess, setIsSuccess] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const respones = await axios.post("http://localhost:3001/login", {
        email: email,
        password: password,
      });
      console.log(respones.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="img1">
      <div className="header"></div>

      <div style={{ width: "99%", margin: "auto auto", textAlign: "center" }}>
        <br></br> <h1 style={{ color: "white" }}>Customer SingIn</h1>
        <Form
          className="forms"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <Form.Group>
            <Form.Control
              name="Email"
              type="Email"
              value={email}
              placeholder="Your email"
              style={{ marginBottom: "1rem" }}
              onChange={(event) => setEmail(event.target.value)}
            />

            <Form.Control
              name="Password"
              type="password"
              value={password}
              placeholder="Password"
              style={{ marginBottom: "1rem" }}
              onChange={(event) => setPassword(event.target.value)}
            />
          </Form.Group>

          <Button
            style={{
              width: "100%",
              marginBottom: "1rem",
              backgroundColor: "rgb(44, 150, 255)",
              color: "black",
            }}
            variant="outline-success"
            onClick={handleSubmit}
          >
            Submit {isLoading && <>( Loading...)</>}
          </Button>

          <br></br>
          <Button
            style={{ width: "100%", backgroundColor: "orange" }}
            variant="outline-dark"
            onClick={() => navigate(-1)}
          >
            BACK
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Log;
