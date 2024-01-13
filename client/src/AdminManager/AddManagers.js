import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react"; //deleted the (, useEffect )
import axios from "axios";
import "../components/cssForComponents/headerStyles.css";
import SystemHeader from "../components/SystemHeader";

function AddManagers() {
  const [validated, setValidated] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const [selectedName, setSelectedName] = useState("");
  const [telephoneNoValid, setTelephoneNoValid] = useState(true);
  const [emailValid, setEmailValid] = useState(true);
  const [addressValid, setAddressValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);

  const navigate = useNavigate();
  const [post, setPost] = useState({
    JobTitle: "",
    Email: "",
    FullName: "",
    NIC: "",
    Gender: "",
    Telephone_No: "",
    Address: "",
    Password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "JobTitle") {
      setSelectedValue(value);
      setSelectedName(event.target.options[event.target.selectedIndex].text);
    }

    if (name === "Telephone_No") {
      const isValid = /^\d{10}$/.test(value);
      setTelephoneNoValid(isValid);
    }

    if (name === "Address") {
      setAddressValid(value !== "");
    }

    if (name === "Password") {
      setPasswordValid(value !== "");
    }

    if (name === "Email") {
      const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      setEmailValid(isValidEmail);
    }

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

    if (checkEmptyFields(post) || !telephoneNoValid) {
      setValidated(true);
    } else {
      setValidated(true);
      // AXIOS
      await axios
        .post("/AddManagers", {
          ...post,
          UserType: selectedValue, // Replace 'selectedValue' with the actual variable holding the selected value
          JobTitle: selectedName, // Replace 'selectedName' with the actual variable holding the selected name
        })
        .then((res) => {
          console.log(res);
          navigate("/AdminManager/AddManagers/ManagerList");
        })
        .catch((err) => console.log(err));
    }
  };

  useEffect(() => {}, []);

  return (
    <div>
      <SystemHeader />

      <br />
      <div style={{ width: "40%", margin: "auto auto", textAlign: "center" }}>
        <h2 id="headerS">Add Manager</h2>
        <Form className="Sform" noValidate validated={validated}>
          <Form.Group>
            <Form.Group>
              <select
                className="select_bar"
                as="select"
                name="JobTitle"
                value={post.JobTitle}
                style={{
                  marginBottom: "1rem",
                  marginTop: "1rem",
                }}
                onChange={handleChange}
                required
              >
                <option value="">Select The Job Title</option>
                <option value="/Man">Customer Manager</option>
                <option value="/SupplierManager">Supplier Manager</option>
                <option value="/AdminManager">Admin Manager</option>
                <option value="/DistributeDash">Distribution Manager</option>
                <option value="/finance">Financial Manager</option>
                <option value="/ProductManager/ProductList">
                  Product Manager
                </option>
                <option value="/storage">Storage Manager</option>
                <option value="/employeemanager">Employee Manager</option>
              </select>
              {/* </Form.Control> */}
              <Form.Control.Feedback type="invalid">
                Please provide Job Title
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Control
              name="UserName"
              value={post.UserName} //according to CreatePost state
              placeholder="User Name"
              style={{ marginBottom: "1rem", marginTop: "1rem" }}
              onChange={handleChange}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide User Name
            </Form.Control.Feedback>
            <Form.Control
              name="Email"
              value={post.Email} //according to CreatePost state
              placeholder="Email"
              style={{ marginBottom: "1rem" }}
              onChange={handleChange}
              required
              isInvalid={!emailValid}
            />
            <Form.Control.Feedback type="invalid">
              Please provide Email
            </Form.Control.Feedback>

            <Form.Control
              name="FullName"
              value={post.FullName} //according to CreatePost state
              placeholder="Full Name"
              style={{ marginBottom: "1rem" }}
              onChange={handleChange}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide Full Name
            </Form.Control.Feedback>

            <Form.Control
              name="NIC"
              value={post.NIC} //according to CreatePost state
              placeholder="NIC"
              style={{ marginBottom: "1rem" }}
              onChange={handleChange}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide NIC
            </Form.Control.Feedback>
            <div>
              <Form.Label>Gender</Form.Label>
              <div>
                <Form.Check
                  type="radio"
                  label="Male"
                  name="Gender"
                  value="Male"
                  checked={post.Gender === "Male"}
                  onChange={handleChange}
                  required
                />
                <Form.Check
                  type="radio"
                  label="Female"
                  name="Gender"
                  value="Female"
                  checked={post.Gender === "Female"}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <Form.Control.Feedback type="invalid">
              Please select Gender
            </Form.Control.Feedback>

            <Form.Control
              name="Telephone_No"
              value={post.Telephone_No}
              placeholder="Telephone_No"
              style={{ marginBottom: "1rem" }}
              onChange={handleChange}
              required
              isInvalid={!telephoneNoValid}
            />
            <Form.Control.Feedback type="invalid">
              {telephoneNoValid
                ? "Please provide a 10-digit Telephone_No"
                : "Telephone_No must have exactly 10 digits"}
            </Form.Control.Feedback>

            <Form.Control
              name="Address"
              value={post.Address}
              placeholder="Address"
              style={{ marginBottom: "1rem" }}
              onChange={handleChange}
              required
              isInvalid={!addressValid}
            />
            <Form.Control.Feedback type="invalid">
              Please provide Address
            </Form.Control.Feedback>
            <Form.Control
              name="Password"
              value={post.Password}
              placeholder="Password"
              style={{ marginBottom: "1rem" }}
              onChange={handleChange}
              required
              isInvalid={!passwordValid}
            />
            <Form.Control.Feedback type="invalid">
              Please provide Password
            </Form.Control.Feedback>
          </Form.Group>

          <Button
            style={{ width: "100%", marginBottom: "1rem" }}
            variant="outline-success"
            onClick={() => handleSubmit()}
          >
            ADD
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

export default AddManagers;
