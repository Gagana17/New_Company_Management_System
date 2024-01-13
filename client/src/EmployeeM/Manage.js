import "./AddEmployee.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import { Button, Form, Col, Row } from "react-bootstrap";




function Manage() {

  const navigate = useNavigate();
    const [Empmanage, setPost] = useState([]);
    const [updatedPost, setUpdatedPost] =  useState({});

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        axios
        .get("/Empmanage")
        .then((res) => {
             console.log(res);
             setPost(res.data);
        })
        .catch((err) => console.log(err));
    }, []);

    const deleteEmployeePost = (id) => {
      console.log(id);
      axios
    .delete(`/deleteemployee/${id}`)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

    window.location.reload();
    };
    

    const updateEmployeePost = (post)=> {
      setUpdatedPost(post);
      handleShow();
   };

   const handleChange = (e) => {
    const {name, value} = e.target;
    
        setUpdatedPost((prev) => {
            return {
                ...prev,
                [name]: value,
            };
        });
    };

    const saveUpdatedEmployeePost = () => {
      axios.put(`/updateemployee/${updatedPost._id}` , updatedPost)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  
      handleClose();
      window.location.reload();
  };
   

  const [searchTerm, setSerchTerm] = useState("");

  return (

    
    
    <div //background image
      className="background"
      style={{
        position: "absolute",
        top: "0%",
        left: "0%",
        width: "100%",
        height: "300vh",
        backgroundImage: `url("https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=50")`,
        opacity: 0.7,
      }}
    >
  

    
    <div style={{ textAlign: "center", width: "90%", margin: "auto auto"}}>
      <h1><b>MANAGE EMPLOYEE</b></h1>

      <div className="search">
        
        <input  
          className="SearchTerm"
          type="text"
          placeholder="Search..."
          id="input_text"
          style={{
            width: "50%",
            boxSizing: "border-box",
            border: "2px solid #ccc",
            borderRadius: "10px",
            fontSize: "16px",
            backgroundColor: "",
            backgroundPosition: "10px 10px",
            backgroundRepeat: "no-repeat",
            padding: "12px 20px 12px 40px",
            marginLeft: "1%",
          }}
          onChange={(event) => {
            setSerchTerm(event.target.value);
          }}
        />
      
</div>
    

<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Employees</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
        <Row className="mb-3">
          
        <Form.Group as={Col} controlId="formGridEmail">  
          <Form.Label style={{fontSize: '1rem', color: 'white'}}><b>First Name*</b></Form.Label>
          <Form.Control 
          name="firstname" 
          value={updatedPost.firstname ? updatedPost.firstname : ""}
          onChange={handleChange}
          placeholder="First Name" 
          style={{marginBottom: "1rem"}} 
          
            />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label style={{fontSize: '1rem', color: 'white'}}><b>Last Name*</b></Form.Label>
          <Form.Control
           
            name="lastname" 
            value={updatedPost.lastname ? updatedPost.lastname : ""}
            onChange={handleChange}
            style={{marginBottom: "1rem"}} 
            placeholder="Last Name" />
            
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label style={{fontSize: '1rem', color: 'white'}}><b>Employee ID*</b></Form.Label>
          <Form.Control 
          name="eid" 
          value={updatedPost.eid ? updatedPost.eid : ""}
          onChange={handleChange}
          placeholder="EID" 
          style={{marginBottom: "1rem"}} 
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label style={{fontSize: '1rem', color: 'white'}}><b>Department*</b></Form.Label>
          <Form.Control 
           name="depart" 
           value={updatedPost.depart ? updatedPost.depart : ""}
          onChange={handleChange}
           placeholder="Department" 
           style={{marginBottom: "1rem"}} 
            />
        </Form.Group>
      </Row>


     <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label style={{fontSize: '1rem', color: 'white'}}><b>Hair Date</b></Form.Label>
          <Form.Control
                   name="date" 
                   value={updatedPost.date ? updatedPost.date : ""}
                   onChange={handleChange}
                   placeholder="Hair date" 
                   style={{marginBottom: "1rem"}} 
                   
           />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label style={{fontSize: '1rem', color: 'white'}}><b>City</b></Form.Label>
          <Form.Control 
          
          name="city" 
          value={updatedPost.city ? updatedPost.city : ""}
          onChange={handleChange}
          placeholder="City" 
          style={{marginBottom: "1rem"}} 
         
           />
        </Form.Group>
      </Row>

      <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label style={{fontSize: '1rem', color: 'white'}}><b>Email Address*</b></Form.Label>
          <Form.Control 
                      name="email" 
                      value={updatedPost.email ? updatedPost.email : ""}
                      onChange={handleChange}
                      placeholder="Email Address" 
                      style={{marginBottom: "1rem"}} 
                      
           />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label style={{fontSize: '1rem', color: 'white'}}><b>Contact No*</b></Form.Label>
          <Form.Control  
                    name="contact" 
                    value={updatedPost.contact ? updatedPost.contact : ""}
                    onChange={handleChange}
                    placeholder="Contact No" 
                    style={{marginBottom: "1rem"}} 
                     />
        </Form.Group>



    </Form>
  
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={saveUpdatedEmployeePost}>
         
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

    

      {Empmanage ? (
        <>
       {Empmanage
       .filter((post) => {
        if (searchTerm === "") {
          return post;
        } else if (
          post.firstname.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.depart.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.eid.includes(searchTerm) 
         
          
        ) {
          return post;
        }
      })
       
       
       
       .map(post => {
        return (
          
          <div
          key={post._id}
          style={{
            border: "solid lightgray 1px",
            borderRadius: "10px",
            width:"60%",
            margin: "auto",
            marginLeft: "17rem",
            background: "#150505ef",
            marginBottom: "1rem" ,
            Padding: "1rem",
            marginTop:"2rem",
            }}
           
            >

         <h5
         style={{
          color: "aqua"
         }}><b>Employee Details</b></h5>  
        <h6
        style={{
          color:"white"
        }}><b>First Name : </b>{post.firstname}<br/>
        <b>Last Name : </b>{post.lastname}<br/>
        <b>Employee ID : </b>{post.eid}<br/>
        <b>Department : </b>{post.depart}<br/>
        <b>Hair Date : </b>{post.date}<br/>
        <b>City : </b>{post.city}<br/>
        <b>Email Address : </b>{post.email}<br/>
        <b>Contact No : </b>{post.contact}</h6><br/>
            <div 
                     style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",

                     }}>

                    
            <Button 
            onClick={() => updateEmployeePost(post)}
            style={{width:"20%", marginLeft:"20rem"}}>Update</Button>


            <Button 
            onClick={() =>deleteEmployeePost(post._id)}
            className="btn btn-danger" 
            style={{width:"20%",
            marginLeft:"2rem",
            marginRight:"35rem"}}
            >Delete</Button>
            </div>
            </div>
        );
      })}
      </>
      ) : (
        " "

      )}
      </div>


 
 
      <Button style={
        {width:"20%", marginBottom:"1 rem", marginLeft:"36rem",marginTop:"1rem", background:"#ff6d00", border:"0"}}
        
        onClick={() => navigate("/employeemanager")}><b>Back To Dashboard</b></Button>



        </div>

        



    
  );
}

export default Manage;
