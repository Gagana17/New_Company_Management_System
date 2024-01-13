import "./SupplierManager.css";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom"; //use to create dynamic application
import { useEffect, useState } from "react";
import * as React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import SystemHeader from "../components/SystemHeader"; // include header files
import { MDBFooter, MDBContainer } from "mdb-react-ui-kit";
import axios from "axios";

function SupplierManager() {
  const navigate = useNavigate();
  // const [App, setMPosts] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("/App")
  //     .then((res) => {
  //       console.log(res);
  //       setMPosts(res.data);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  //-----------------------------------------------------------------------------------------

  const [ManagerList, setManagerList] = useState([]);

  // ManagerList.findOne({JobTitle:'Supplier Manager'}, (error,data))

  useEffect(() => {
    axios
      .get("/ManagerList")
      .then((res) => {
        console.log(res);
        setManagerList(res.data); //get response data form under data category
      })
      .catch((err) => console.log(err));
  }, []); //for avoide continious rendering

  //-----------------------------------------------------------------------------------------
  return (
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
            height: "100vh",
            backgroundImage: `url("https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=50")`,
            opacity: 0.2,
          }}
        ></div>

        <SystemHeader />

        <br />
        <div className="App" style={{ position: "relative" }}>
          <div className="greeting">
            <h2>App Profile</h2>
          </div>

          <Button
            id="addsupplier"
            className="navigationbtns me-4"
            onClick={() => navigate("CreateSupplierPosts")}
            // variant="outline-primary"
            variant="success"
          >
            Add Supplier
          </Button>
          <Button
            id="supplierListBtn"
            className="navigationbtn"
            onClick={() => navigate("CreateSupplierPosts/SupplierList")}
          >
            Supplier List
          </Button>
        </div>

        <Card id="informationCard33">
          <Card.Body>
            <Row>
              {/* <div id="insideInfo22">
                <Card style={{ height: "100px" }}>
                  <Card.Body>
                    <h5 className="profileContent">Profile Pic</h5>
                  </Card.Body>
                </Card>
              </div> */}
              {/* ....................................................................................................... */}
              <div id="insideInfo11">
                <Card>
                  <Card.Body>
                    <div style={{ margin: "auto auto" }}>
                      {ManagerList ? ( // if posts avaliable then do this
                        <>
                          {/* Implement the search function */}
                          {ManagerList.filter(
                            (post) => post.JobTitle === "Supplier Manager" // for display only Supplier Manager details
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
                                <h4 className="information">
                                  Job Title : {post.JobTitle}
                                </h4>
                                <h5 className="information">
                                  UserName : {post.UserName}
                                </h5>
                                <h5 className="information">
                                  Email : {post.Email}
                                </h5>
                                <h5 className="information">
                                  Full Name : {post.FullName}
                                </h5>
                                <h5 className="information">
                                  NIC : {post.NIC}
                                </h5>
                                <h5 className="information">
                                  Gender : {post.Gender}
                                </h5>
                                <h5 className="information">
                                  Telephone_No : {post.Telephone_No}
                                </h5>
                                <h5 className="information">
                                  Address : {post.Address}
                                </h5>

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
            </Row>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default SupplierManager;
