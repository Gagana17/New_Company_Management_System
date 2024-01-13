import "./EmployeeManage.css";
import * as React from "react";
import { Button } from "react-bootstrap";
import {useNavigate} from "react-router-dom";


import { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
  const navigate = useNavigate();
  const [Empmanage, setPost] = useState([]);

  useEffect(() => {
      axios
      .get("/Empmanage")
      .then((res) => {
           console.log(res);
           setPost(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return(

    <div
    className="mainDiv"
    style={{
      position: "relative",
      justifyContent: "space-between",
      display: "flex",
      flexDirection: "column",
      height: "100vh",
    }}
  >
    <div>
      <div //background image
        className="background"
        style={{
          position: "absolute",
          top: "0%",
          left: "0%",
          width: "100%",
          height: "200vh",
          backgroundImage: `url("https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=50")`,
          opacity: 0.2,
        }}
      ></div>
      
      <br />
      <div className="App" style={{ position: "relative" }}>
        <div className="greeting">
          <h2><b>Generate Report</b></h2>
       

<Button
        style={{
         
          marginBottom:"1 rem",
          marginLeft:"45rem",
          marginTop:"0rem",
           background:"#ff6d00", 
           border:"0"
        }}
        onClick={window.print}
      >
        Genarate report
      </Button>

        </div>

     
        
         
</div>
<table  class="table" >
    
    <thead>
      <tr className="bg-dark text-white">         
        <th scope="col">#</th>
        <th scope="col">First Name</th>
        <th scope="col">Last Name</th>
        <th scope="col">Employee ID</th>
        <th scope="col">Department</th>
        <th scope="col">Hair Date</th>
        <th scope="col">City </th>
        
       
        
       
      </tr>
      
    </thead>
    
    <tbody>
  
    {Empmanage.map((post,index) => (
      
      
      <tr>
         
          <th scope="row">{index +1}</th>
       

       
          <td><b>{post.firstname}</b></td>
          <td><b>{post.lastname}</b></td>
          <td><b>{post.eid}</b></td>
          <td><b>{post.depart}</b></td>
          <td><b>{post.date}</b></td>
          <td><b>{post.city}</b></td>
        
         
        
          </tr>
          
    
  ))}
    
    </tbody>
    
  </table>

</div>



    </div>
  );

}
export default Dashboard;



