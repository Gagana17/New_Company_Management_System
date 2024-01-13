import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from "react"; //deleted the (, useEffect )
import axios from "axios";
import "../components/cssForComponents/headerStyles.css";
import Header from "../components/SystemHeader";
import { useEffect } from "react";

function AddDistributer() {
  const [validated, setValidated] = useState(false);
  const navigate = useNavigate();
  const [Dis, setPost] = useState({
    Distributer_id: "",
    Distributer_name: "",
    Registered_No: "",
    Area: "",
    Contact_No: "",
    dAddress: "",
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
    const checkEmptyFields = (Dis) => {
      for (let prop in Dis) {
        if (Dis[prop] === "") {
          return true;
        }
      }
      return false;
    };

    const validateContactNo = (Contact_No) => {
      return Contact_No.length === 10 && /^\d+$/.test(Contact_No);
    };

    if (checkEmptyFields(Dis) || !validateContactNo(Dis.Contact_No)) {
      setValidated(true);
    } else {
      setValidated(true);
      await axios
        .post("/createdistributer", Dis)
        .then((res) => {
          console.log(res);
          navigate("/DistributeManager/createdistributer/DistributeList");
        })
        .catch((err) => console.log(err));
    }
  };

  useEffect(() => {}, []);

  // useEffect(() => {
  //     console.log(post);
  // }, [post]); //add automatically when this post value is changed

  return (
    <div>
      <Header />

      <br />
      <div style={{ width: "40%", margin: "auto auto", textAlign: "center" }}>
        <h2 id="headerS">Add Distributers</h2>
        <Form className="Sform" noValidate validated={validated}>
          <Form.Group>
            <Form.Control
              name="Distributer_id"
              value={Dis.Distributer_id} //according to CreatePost state
              placeholder="Enter Distributer Id"
              style={{ marginBottom: "1rem", marginTop: "1rem" }}
              onChange={handleChange}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a Id.
            </Form.Control.Feedback>

            <Form.Control
              name="Distributer_name"
              value={Dis.Distributer_name} //according to CreatePost state
              placeholder="Enter Distributer Name"
              style={{ marginBottom: "1rem" }}
              onChange={handleChange}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a Name.
            </Form.Control.Feedback>

            <Form.Control
              name="Registered_No"
              value={Dis.Registered_No} //according to CreatePost state
              placeholder="Enter Distributer Registered_No"
              style={{ marginBottom: "1rem" }}
              onChange={handleChange}
              required
            />

            <Form.Control.Feedback type="invalid">
              Please provide a Registered_No.
            </Form.Control.Feedback>

            <Form.Control
              name="Area"
              value={Dis.Area} //according to CreatePost state
              placeholder="Enter Distribution Area"
              style={{ marginBottom: "1rem" }}
              onChange={handleChange}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a Area.
            </Form.Control.Feedback>
            <Form.Control
              name="Contact_No"
              value={Dis.Contact_No}
              placeholder="Enter Distributer Contact_Number"
              style={{ marginBottom: "1rem" }}
              onChange={handleChange}
              required
            />
            {Dis.Contact_No.length > 10 && (
              <Form.Control.Feedback type="invalid">
                Contact number should not exceed 10 digits.
              </Form.Control.Feedback>
            )}
            <Form.Control.Feedback type="invalid">
              Please provide a Contact NO.
            </Form.Control.Feedback>

            <Form.Control
              name="dAddress"
              value={Dis.dAddress}
              placeholder="Enter Distributer Address"
              style={{ marginBottom: "1rem" }}
              onChange={handleChange}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a Distributer Address.
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

export default AddDistributer;
