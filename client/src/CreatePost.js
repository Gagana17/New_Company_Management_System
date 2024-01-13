import React from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "./Navbar.css";
import { useEffect } from "react";

function CreatePost() {
  const [validated, setValidated] = useState(false);
  const navigate = useNavigate();
  const [post, setPost] = useState({
    Name: "",
    Email: "",
    Telephone: "",
    Address: "",
    Password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setPost((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = async () => {
    const checkEmptyFields = (post) => {
      for (let prop in post) {
        if (post[prop] === "") {
          return true;
        }
      }
      return false;
    };

    if (checkEmptyFields(post) === true) {
      setValidated(true);
    } else {
      setValidated(true);
      // AXIOS
      await axios
        .post("/create", post)
        .then((res) => {
          console.log(res);
          navigate("/");
        })
        .catch((err) => console.log(err));
    }
  };

  useEffect(() => {}, []);

  /* const handleClick = (event) => {
    event.preventDefault();

    axios
      .post("/create", post)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    navigate("/");
  };*/

  return (
    <div className="img">
      <div className="header"></div>
      <div style={{ width: "99%", margin: "auto auto", textAlign: "center" }}>
        <br></br> <h1 style={{ color: "white" }}>Customer Singup</h1>
        <Form className="forms" noValidate validated={validated}>
          <Form.Group>
            <Form.Control
              name="Name"
              type="text"
              value={post.Name} //create state
              placeholder="User Name"
              style={{ marginBottom: "1rem" }}
              onChange={handleChange}
              required
            />
            <Form.Control.Feedback type="invalid">
              <p>Please provide the Name.</p>
            </Form.Control.Feedback>
            {/* {errors.name && <p>{errors.name}</p>} */}

            <Form.Control
              name="Email"
              type="email"
              value={post.Email}
              placeholder="Email"
              style={{ marginBottom: "1rem" }}
              onChange={handleChange}
              required
            />
            <Form.Control.Feedback type="invalid">
              <p>Please provide the Email.</p>
            </Form.Control.Feedback>

            <Form.Control
              name="Telephone"
              type="number"
              value={post.Telephone}
              placeholder="Telephone no"
              style={{ marginBottom: "1rem" }}
              onChange={handleChange}
              required
            />
            <Form.Control.Feedback type="invalid">
              <p>Please provide a Telephone_No.</p>
            </Form.Control.Feedback>

            <Form.Control
              name="Address"
              type="text"
              value={post.Address}
              placeholder="Address"
              style={{ marginBottom: "1rem" }}
              onChange={handleChange}
              required
            />
            <Form.Control.Feedback type="invalid">
              <p>Please provide a Telephone_No.</p>
            </Form.Control.Feedback>

            <Form.Control
              name="Password"
              type="password"
              value={post.Password}
              placeholder="password"
              style={{ marginBottom: "1rem" }}
              onChange={handleChange}
              required
            />
            <Form.Control.Feedback type="invalid">
              <p>Please provide a Password.</p>
            </Form.Control.Feedback>
          </Form.Group>

          <Button
            style={{
              width: "100%",
              marginBottom: "1rem",
              backgroundColor: "rgb(44, 150, 255)",
              color: "black",
            }}
            varian="outline-success"
            //onClick={handleClick}
            onClick={() => handleSubmit()}
          >
            Submit
          </Button>

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

export default CreatePost;
