
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";


function Order() {
  const navigate = useNavigate();
  const [post, setPost] = useState({
    Choises: "",
    number:"",
    Telephone: "",
    Address:"",

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

  const  handleClick = (event) => {
    event.preventDefault();
   
     axios
     .post("/orders", post)
     .then((res) => console.log(res))
     .catch((err) => console.log(err));

       navigate("orderdetail");

   };



  return (
    <div className="imgOrder">
      <div style={{ width: "99%", marginTop: "70px", textAlign: "center" }}>
        <br></br> <h1 style={{ color: "black" }}>Make Order For Flavours </h1>
        <Form className="forms">
          <Form.Group>
            <select  name="Choises" onChange={handleChange} value= {post.Choises}
              style={{ marginBottom: "1rem", width: "100%", height: "50px" }}
            >

              <option value="">Select Your Choises</option>
              <option>Turmeric Powder</option>
              <option>Chilli Powder</option>
              <option>Cinnamon Barks</option>
              <option>Black Pepper</option>
              <option>Ginger</option>
            </select>

            <Form.Control
              name="number"
              value= {post.number}
              placeholder="No of items"
              onChange={handleChange}
              style={{ marginBottom: "1rem" }}
            />

            <Form.Control
              name="Telephone"
              value= {post.Telephone}
              placeholder="Telephone no"
              onChange={handleChange}
              style={{ marginBottom: "1rem" }}
            />

            <Form.Control
              name="Address"
              value= {post.Address}
              type="text"
              placeholder="Address"
              onChange={handleChange}
              style={{ marginBottom: "1rem" }}
            />
          </Form.Group>

          <Button
            style={{
              width: "100%",
              marginBottom: "1rem",
              backgroundColor: "rgb(44, 150, 255)",
              color: "black",
            }}
            varian="outline-success"
            onClick={handleClick}
          >
            Order Now
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

export default Order;
