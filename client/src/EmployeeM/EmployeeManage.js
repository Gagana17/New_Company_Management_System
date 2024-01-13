import "./EmployeeManage.css";
import * as React from "react";
import { Button } from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { useEffect, useState } from "react";
//import Header from "./Components/Header";
import "../components/cssForComponents/headerStyles.css";
import Header from "../components/SystemHeader";



function EmployeeManage() {
  const navigate = useNavigate();
  const [ManagerList, setManagerList] = useState([]);
 

  useEffect(() => {
    axios
      .get("/ManagerList")
      .then((res) => {
        console.log(res);
        setManagerList(res.data); //get response data form under data category
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
          opacity: 0.4,
        }}
      ></div>
      <Header />
      <br />
      <div className="App" style={{ position: "relative" }}>
        <div className="greeting">
          <h2><b>Employee Management System</b></h2>
        </div>

        <Button
            id="addemployee"
            className="navigationbtns me-4"
            onClick={() => navigate("addemployee")}
            // variant="outline-primary"
            variant="success"
          >
            Add Employee
          </Button>

        
          <Button
            id="managebtn"
            className="navigationbtn"
            onClick={() => navigate("manageemployee")}
          >
            Manage Employee
          </Button>

          <Button
            color="warning"
            id="generateReportBtn"
            className="navigationbtns me-4"
            style={{
              marginLeft:"1.5%"
            }}
            onClick={() => navigate("empdashboard")}
          >
           Generate Report
          </Button>

          <Button
            id="addemployee"
            className="navigationbtns me-4"
            onClick={() => navigate(-1)}
            // variant="outline-primary"
            variant="success"
          >
            Back
          </Button>
<br/>
<br/>
<br/>

          <center>
              <div>
                {/* ....................................................................................................... */}
                <div id="insideInfo1">
                  <Card>
                    <Card.Body>
                      <div style={{ margin: "auto auto" }}>
                        {ManagerList ? ( // if posts avaliable then do this
                          <>
                            {/* Implement the search function */}
                            {ManagerList.filter(
                              (post) => post.JobTitle === "Employee Manager" // for display only Supplier Manager details
                            ).map((post) => {
                              return (
                                <div
                                  key={post._id} //change according to database id
                                  style={{
                                    border: "solid lightgray 1px",
                                    borderRadius: "8px",
                                    marginBottom: "1rem",
                                    padding: "1rem",
                                  }}
                                >
                                  <h5 className="information">
                                    Job Title : {post.JobTitle}
                                  </h5>
                                  <h6 className="information">
                                    UserName : {post.UserName}
                                  </h6>
                                  <h6 className="information">
                                    Email : {post.Email}
                                  </h6>
                                  <h6 className="information">
                                    Full Name : {post.FullName}
                                  </h6>
                                  <h6 className="information">
                                    NIC : {post.NIC}
                                  </h6>
                                  <h6 className="information">
                                    Gender : {post.Gender}
                                  </h6>
                                  <h6 className="information">
                                    Telephone_No : {post.Telephone_No}
                                  </h6>
                                  <h6 className="information">
                                    Address : {post.Address}
                                  </h6>

                                  {/*this post._id is the mongoDb post id*/}
                                </div>
                              );
                            })}
                          </>
                        ) : (
                          // if posts not avaliable don't do anything
                          ""
                        )}
                      </div>
                    </Card.Body>
                  </Card>
                </div>
                {/* ....................................................................................................... */}
              </div>
            </center>
</div>

</div>

    

    </div>
  );

}
export default EmployeeManage;



