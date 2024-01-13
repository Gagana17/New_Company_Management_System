import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from "react"; //deleted the (, useEffect )
import axios from "axios";

import "../components/cssForComponents/headerStyles.css";
import Header from "../components/SystemHeader";
import { useEffect } from "react";

function AddVehicle() {
  const [validated, setValidated] = useState(false);
  const navigate = useNavigate();
  const [post1, setPost] = useState({
    Vehicle_id: "",
    Vcatagory: "",
    Vregistered_No: "",
    Capacity: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target; //handleChange function is use to get input value

    setPost((prev) => {
      return {
        ...prev,
        [name]: value, //save the values and change the next value
      };
    });
  };

  const handleSubmit = async () => {
    const checkEmptyFields = (post1) => {
      for (let prop in post1) {
        if (post1[prop] === "") {
          return true;
        }
      }
      return false;
    };

    const validateCapacity = (Capacity) => {
      return parseInt(Capacity) < 2000;
    };

    if (checkEmptyFields(post1) || !validateCapacity(post1.Capacity)) {
      setValidated(true);
    } else {
      setValidated(true);
      await axios
        .post("/createvehicle", post1)
        .then((res) => {
          console.log(res);
          navigate("/DistributeManager/createvehicle/VehicleList");
        })
        .catch((err) => console.log(err));
    }
  };

  useEffect(() => {}, []);

  return (
    <div>
      <Header />

      <br />
      <div style={{ width: "40%", margin: "auto auto", textAlign: "center" }}>
        <h2 id="headerS">Add Vehicle</h2>
        <Form className="Sform" noValidate validated={validated}>
          <Form.Group>
            <Form.Control
              name="Vehicle_id"
              value={post1.Vehicle_id} //according to CreatePost state
              placeholder="Enter  Vehicle id"
              style={{ marginBottom: "1rem", marginTop: "1rem" }}
              onChange={handleChange}
            />

            <Form.Control.Feedback type="invalid">
              Please provide Vehicle Id.
            </Form.Control.Feedback>
            <Form.Control
              name="Vcatagory"
              value={post1.Vcatagory} //according to CreatePost state
              placeholder="Enter  Vehicle catagory"
              style={{ marginBottom: "1rem" }}
              onChange={handleChange}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide Vehicle catagory.
            </Form.Control.Feedback>

            <Form.Control
              name="Vregistered_No"
              value={post1.Vregistered_No} //according to CreatePost state
              placeholder="Enter Distributer  Vehicle registered_No"
              style={{ marginBottom: "1rem" }}
              onChange={handleChange}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide Vehicle Registered_No.
            </Form.Control.Feedback>

            <Form.Control
              name="Capacity"
              value={post1.Capacity} //according to CreatePost state
              placeholder="Enter Vehicle Capacity"
              style={{ marginBottom: "1rem" }}
              onChange={handleChange}
              required
            />
            <Form.Control.Feedback type="invalid">
              {post1.Capacity === ""
                ? "Please provide Vehicle Capacity."
                : "Capacity must be above 2000kg."}
            </Form.Control.Feedback>
          </Form.Group>

          <Button
            style={{
              width: "100%",
              marginBottom: "1rem",
              backgroundColor: "#01baef",
            }}
            onClick={() => handleSubmit()}
          >
            Submit Details
          </Button>
        </Form>
        <Button
          style={{ width: "100%" }}
          variant="outline-dark"
          onClick={() => navigate(-1)}
        >
          BACK
        </Button>{" "}
        {/* For go to backward*/}
      </div>
    </div> //to navigate backward
  );
}

export default AddVehicle;
