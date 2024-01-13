import React, { useState } from "react";
import { Button, Form, Dropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import axios from "axios";

function Admin() {
  const navigate = useNavigate();
  const [selectedSystem, setSelectedSystem] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/managerlogin", {
        email: email,
        password: password,
      });
      console.log(response.data);

      // Check if login was successful
      if (
        response.status === 200 &&
        response.data.message === "Login successful"
      ) {
        const userType = response.data.userType; // Retrieve the userType from the response

        // Navigate to the selected system route based on userType
        navigate(userType);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="img2">
      <div className="header"></div>

      <div style={{ width: "99%", margin: "auto auto", textAlign: "center" }}>
        <br></br> <h1 style={{ color: "black" }}>Admin Pannel </h1>
        <Form className="forms">
          <Form.Group>
            <Form.Control
              name="Name"
              type="text"
              placeholder="Email"
              style={{ marginBottom: "1rem" }}
              onChange={(event) => setEmail(event.target.value)}
            />

            <Form.Control
              name="Password"
              type="password"
              placeholder="Password"
              style={{ marginBottom: "1rem" }}
              onChange={(event) => setPassword(event.target.value)}
            />

            {/* <select

              style={{ marginBottom: "1rem", width: "100%", height: "50px" }}
              onChange={(e) => setSelectedSystem(e.target.value)}
            >
              <option value="">Select Your System</option>
              <option value="/Man">Customer Management System</option>
              <option value="/SupplierManager">
                Supplier Management System
              </option>
              <option value="/AdminManager">Admin Management System</option>
              <option value="/DistributeDash">
                Distribution Management System
              </option>
              <option value="/finance">Financial Management System</option>
              <option value="/ProductManager/ProductList">
                Product Management System
              </option>
              <option value="/storage">Storage Management System</option>
              <option value="/employeemanager">
                Employee Management System
              </option>
            </select> */}
          </Form.Group>
        </Form>
        <Button
          style={{
            width: "35%",
            marginBottom: "1rem",
            backgroundColor: "rgb(44, 150, 255)",
            color: "black",
          }}
          varian="outline-success"
          onClick={handleSubmit}
        >
          SignIn
        </Button>
        <br></br>
        <Button
          style={{ width: "35%", backgroundColor: "orange" }}
          variant="outline-dark"
          onClick={() => navigate(-1)}
        >
          BACK
        </Button>
        <br />
        <br />
        <Button
          style={{ width: "35%", backgroundColor: "orange" }}
          variant="outline-dark"
          onClick={() => navigate("/Man")}
        >
          Customer management
        </Button>
        {/* For demonstration purpose only */}
        <br />
        <br />
        <Button
          style={{ width: "35%", backgroundColor: "orange" }}
          variant="outline-dark"
          onClick={() => navigate("/SupplierManager")}
        >
          Supplier manager
        </Button>
        <br />
        <br />
        <Button
          style={{ width: "35%", backgroundColor: "orange" }}
          variant="outline-dark"
          onClick={() => navigate("/AdminManager")}
        >
          Admin manager
        </Button>
        <br />
        <br />
        <Button
          style={{ width: "35%", backgroundColor: "orange" }}
          variant="outline-dark"
          onClick={() => navigate("/DistributeDash")}
        >
          Distribute manager
        </Button>
        <br />
        <br />
        <Button
          style={{ width: "35%", backgroundColor: "orange" }}
          variant="outline-dark"
          onClick={() => navigate("/finance")}
        >
          Finance manager
        </Button>
        <br />
        <br />
        <Button
          style={{ width: "35%", backgroundColor: "orange" }}
          variant="outline-dark"
          onClick={() => navigate("/ProductManager/ProductList")}
        >
          Product manager
        </Button>
        <br />
        <br />
        <Button
          style={{ width: "35%", backgroundColor: "orange" }}
          variant="outline-dark"
          onClick={() => navigate("/storage")}
        >
          Storage manager
        </Button>
        <br />
        <br />
        <Button
          style={{ width: "35%", backgroundColor: "orange" }}
          variant="outline-dark"
          onClick={() => navigate("/employeemanager")}
        >
          Employee Manager
        </Button>
      </div>
    </div>
  );
}

export default Admin;
