import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from "react"; //deleted the (, useEffect )
import axios from "axios";
import "../components/cssForComponents/headerStyles.css";
import Header from "../components/SystemHeader";
import { useEffect } from "react";

function CreateSupplierPosts() {
  const [validated, setValidated] = useState(false);

  const navigate = useNavigate();
  const [post, setPost] = useState({
    Name: "",
    Item: "",
    Telephone_No: "",
    Age: "",
    NIC: "",
    Address: "",
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
        .post("/CreateSupplierPosts", post)
        .then((res) => {
          console.log(res);
          navigate("/SupplierManager/CreateSupplierPosts/SupplierList");
        })
        .catch((err) => console.log(err));
    }
  };

  // useEffect(() => {}, []);

  // useEffect(() => {
  //     console.log(post);
  // }, [post]); //add automatically when this post value is changed

  // const handleClick = (event) => {
  //   // if (handleSubmit.setValidated(false)) {
  //   //   event.preventDefault();
  //   //give last part of url insted of the whole URL and send the other part to package.json
  //   //send data to database using post method
  //   // } //after create a post move to the SupplierList page
  // };

  return (
    <div>
      <Header />
      <br />
      <div style={{ width: "40%", margin: "auto auto", textAlign: "center" }}>
        <h2 id="headerS">Add Supplier</h2>
        <Form className="Sform" noValidate validated={validated}>
          <Form.Group>
            <Form.Control
              name="Name"
              value={post.Name} //according to CreatePost state
              placeholder="Name"
              style={{ marginTop: "1rem" }}
              onChange={handleChange}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide the Name.
            </Form.Control.Feedback>
            {/* {errors.name && <p>{errors.name}</p>} */}
            <Form.Control
              name="Item"
              value={post.Item} //according to CreatePost state
              placeholder="Item"
              style={{ marginTop: "1rem" }}
              onChange={handleChange}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide Item or Items.
            </Form.Control.Feedback>
            <Form.Control
              name="Telephone_No"
              value={post.Telephone_No} //according to CreatePost state
              placeholder="Telephone_No"
              style={{ marginTop: "1rem" }}
              onChange={handleChange}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a Telephone_No.
            </Form.Control.Feedback>

            <Form.Control
              name="Age"
              value={post.Age} //according to CreatePost state
              placeholder="Age"
              style={{ marginTop: "1rem" }}
              onChange={handleChange}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a Age.
            </Form.Control.Feedback>
            <Form.Control
              name="NIC"
              value={post.NIC} //according to CreatePost state
              placeholder="NIC"
              style={{ marginTop: "1rem" }}
              onChange={handleChange}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a NIC.
            </Form.Control.Feedback>

            <Form.Control
              name="Address"
              value={post.Address}
              placeholder="Address"
              style={{ marginTop: "1rem" }}
              onChange={handleChange}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a Address.
            </Form.Control.Feedback>
          </Form.Group>

          <Button
            style={{ width: "100%", marginBottom: "1rem", marginTop: "1rem" }}
            variant="outline-success"
            // type="submit"
            onClick={() => handleSubmit()}
          >
            CREATE POST
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
    </div>
  );
}

export default CreateSupplierPosts;
