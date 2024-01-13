import "../SupplierManager/SupplierManager.css";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom"; //use to create dynamic application
import * as React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import { useEffect, useState } from "react";

import { MDBFooter, MDBContainer } from "mdb-react-ui-kit";
import "../components/cssForComponents/headerStyles.css";
import Header from "../components/SystemHeader";
import axios from "axios";

function DistributeManager() {
  const navigate = useNavigate();

  // function navigateToList() {
  //   navigate("create/SupplierList");
  //   window.print();
  // }

  const [ManagerList, setManagerList] = useState([]);

  useEffect(() => {
    axios
      .get("/ManagerList")
      .then((res) => {
        console.log(res);
        setManagerList(res.data); //get response data form under data category
      })
      .catch((err) => console.log(err));
  }, []); //for avoide continious rendering

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
        <Header />

        <br />
        <div className="App" style={{ position: "relative" }}>
          <div className="greeting">
            <h2>Distribution Management System</h2>
          </div>

          <Button
            id="addistributer"
            className="navigationbtns me-4"
            onClick={() => navigate("/DistributeManager/createdistributer")}
            // variant="outline-primary"
            variant="success"
          >
            Add Distributer
          </Button>

          <Button
            id="addistributer"
            className="navigationbtns me-4"
            onClick={() => navigate("/DistributeManager/createvehicle")}
            // variant="outline-primary"
            variant="success"
          >
            Add Vehicles
          </Button>

          <Button
            id="DistributeListBtn"
            className="navigationbtn"
            onClick={() =>
              navigate("/DistributeManager/createdistributer/DistributeList")
            }
          >
            Distributers List
          </Button>

          <Button
            id="vehiclelistBtn"
            className="navigationbtn"
            onClick={() =>
              navigate("/DistributeManager/createvehicle/VehicleList")
            }
            style={{
              marginLeft: "1.5%",
            }}
          >
            Vehicles List
          </Button>
        </div>

        <div id="informationCard">
          <Card id="orderheader">
            {" "}
            <h2>Order details of lanka flavour</h2>{" "}
            <Card.Body>
              <h5 className="profileContent"> </h5>
              <Row>
                <div>
                  <Button
                    id="viewlist"
                    className="navigationbtns me-4"
                    onClick={() => navigate("/DistributeManager/DisOrder")}
                    // variant="outline-primary"
                    variant="success"
                  >
                    View List
                  </Button>
                </div>
              </Row>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card id="informationCard33">
            <Card.Body>
              <Row>
                {}
                <div id="insideInfo11">
                  <Card>
                    <Card.Body>
                      <div style={{ margin: "auto auto" }}>
                        {ManagerList ? ( // if posts avaliable then do this
                          <>
                            {ManagerList.filter(
                              (post) =>
                                post.JobTitle === "Distribute Management System" // for display only Supplier Manager details
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
              </Row>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div>
        <MDBFooter
          className="text-center footerCard"
          color="white"
          bgColor="dark"
        >
          <MDBContainer className="p-4">
            <section className="mb-4">
              <p></p>
            </section>
          </MDBContainer>
        </MDBFooter>
      </div>
    </div>
  );
}

export default DistributeManager;
