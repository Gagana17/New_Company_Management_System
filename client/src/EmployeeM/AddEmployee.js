import "./AddEmployee.css";
import { Button, Form, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";


function AddEmployee() {
    const navigate = useNavigate();
    const [post, setPost] = useState({
      firstname: "",
      lastname: "",
      eid: "",
      depart: "",
      date: "",
      city: "",
      email: "",
      contact: "",
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
     .post("/addemployee", post)
     .then((res) => console.log(res))
     .catch((err) => console.log(err));

       navigate("Empmanage");

   };



    return (
    
        <div //background image
      className="background"
      style={{
        position: "absolute",
        top: "0%",
        left: "0%",
        width: "100%",
        height: "130vh",
        backgroundImage: `url("https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=50")`,
        opacity: 0.8,
      }}
    >
            <div style={{ textAlign: "center", width: "90%", margin: "auto auto",}}>
      <h1><b>ADD EMPLOYEE</b></h1>
      <div className="container1">

        <Form>
        <Row className="mb-3">
          
        <Form.Group as={Col} controlId="formGridEmail">  
          <Form.Label style={{fontSize: '1rem', color: 'white'}}><b>First Name*</b></Form.Label>
          <Form.Control 
          name="firstname" 
          value= {post.firstname}
          placeholder="First Name" 
          style={{marginBottom: "1rem"}} 
          onChange={handleChange}   />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label style={{fontSize: '1rem', color: 'white'}}><b>Last Name*</b></Form.Label>
          <Form.Control
           
            name="lastname" 
            value= {post.lastname}
            style={{marginBottom: "1rem"}} 
            onChange={handleChange} 
            placeholder="Last Name" />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label style={{fontSize: '1rem', color: 'white'}}><b>Employee ID*</b></Form.Label>
          <Form.Control 
          name="eid" 
          value= {post.eid}
          placeholder="EID" 
          style={{marginBottom: "1rem"}} 
          onChange={handleChange} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label style={{fontSize: '1rem', color: 'white'}}><b>Department*</b></Form.Label>
          <Form.Control 
           name="depart" 
           value= {post.depart}
           placeholder="Department" 
           style={{marginBottom: "1rem"}} 
           onChange={handleChange} />
        </Form.Group>
      </Row>


     <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label style={{fontSize: '1rem', color: 'white'}}><b>Hair Date</b></Form.Label>
          <Form.Control
                   name="date" 
                   value= {post.date}
                   placeholder="Hair date" 
                   style={{marginBottom: "1rem"}} 
                   onChange={handleChange} 
           />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label style={{fontSize: '1rem', color: 'white'}}><b>City</b></Form.Label>
          <Form.Control 
          
          name="city" 
          value= {post.city}
          placeholder="City" 
          style={{marginBottom: "1rem"}} 
          onChange={handleChange} 
           />
        </Form.Group>
      </Row>

      <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label style={{fontSize: '1rem', color: 'white'}}><b>Email Address*</b></Form.Label>
          <Form.Control 
                      name="email" 
                      value= {post.email}
                      placeholder="Email Address" 
                      style={{marginBottom: "1rem"}} 
                      onChange={handleChange} 
           />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label style={{fontSize: '1rem', color: 'white'}}><b>Contact No*</b></Form.Label>
          <Form.Control  
                    name="contact" 
                    value= {post.contact}
                    placeholder="Contact No" 
                    style={{marginBottom: "1rem"}} 
                    onChange={handleChange}  />
        </Form.Group>

      

<Button
           style={{width:"30%", marginBottom:"1rem", marginTop:80, marginLeft:60}}
           onClick={handleClick}>ADD EMPLOYEE</Button>

          <Button
        style={{width:"30%", marginBottom:"1rem",marginTop:80, marginLeft:30}}
        onClick={() => navigate(-1)}>BACK</Button> 
    </Form>
  
       

      </div>
      
      
    </div>

    </div>
      
      
    );
  }
  
  export default AddEmployee;