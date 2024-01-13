import * as React from "react";
import { useEffect, useState } from "react"; //for get all the data from database and print  //useRef
import axios from "axios";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import { Form, Row } from "react-bootstrap";
import "../SupplierManager/SupplierListStyle.css";
import "../components/cssForComponents/headerStyles.css";
import Header from "../components/SystemHeader";

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
></div>;

//create page for show the inputs
function VehicleList() {
  const navigate = useNavigate();
  const [VehicleList, setPosts] = useState([]);
  const [updatedPost, setUpdatedPost] = useState({});

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    axios
      .get("/VehicleList")
      .then((res) => {
        console.log(res);
        setPosts(res.data); //get respose from data under data category
      })
      .catch((err) => console.log(err));
  }, []); //for avoide continious rendering

  //after click delete button
  const deletePost = (id) => {
    //console.log(id);
    axios
      .delete(`/deleteVehicle/${id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    window.location.reload(); // for reload the page after delete
  };

  const updatePosts = (post1) => {
    setUpdatedPost(post1);
    handleShow();
  };

  const handleChange = (e) => {
    //we use e for event word or we can use event word
    const { name, value } = e.target;
    setUpdatedPost((prev) => {
      //set updated post to previous input
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const saveUpdatedPost = () => {
    axios
      .put(`/updateVehicle/${updatedPost._id}`, updatedPost)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    handleClose();
    window.location.reload();
  };

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <Header />

      <div style={{ width: "80%", margin: "auto auto" }}>
        <h2 style={{ textAlign: "center", marginTop: "1rem" }}>
          Vehicle List Page
        </h2>
        <div className="row btnsAndSearch">
          <div className="col-xl-3">
            <Button
              id="generateReportBtn"
              className="navigationbtns"
              onClick={window.print}
            >
              Generate Report
            </Button>
          </div>
          <div className="col-xl-6">
            <input
              className="Search"
              type="text"
              placeholder="Search..."
              onChange={(event) => {
                setSearchTerm(event.target.value);
              }}
            />
          </div>

          <div className="col-xl-3">
            <Button
              id="backBtn"
              style={{ width: "146px", marginBottom: "1rem" }}
              variant="outline-dark"
              onClick={() => navigate(-1)}
            >
              BACK
            </Button>
          </div>
        </div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Update Vehicle Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group>
                <Form.Control
                  style={{ marginBottom: "1rem" }}
                  placeholder="Enter  Vehicle_id"
                  name="Vehicle_id"
                  value={updatedPost.Vehicle_id ? updatedPost.Vehicle_id : ""}
                  onChange={handleChange}
                />{" "}
                {/*if updatedPost.Name avaliable return that
                                                             if not return nothing */}
                <Form.Control
                  style={{ marginBottom: "1rem" }}
                  name="Vcatagory"
                  value={updatedPost.Vcatagory ? updatedPost.Vcatagory : ""}
                  placeholder="Change Vehicle catagory"
                  onChange={handleChange}
                />
                <Form.Control
                  style={{ marginBottom: "1rem" }}
                  name="Vregistered_No"
                  value={
                    updatedPost.Vregistered_No ? updatedPost.Vregistered_No : ""
                  }
                  placeholder="Change Distributer Vehicle Registered_No"
                  onChange={handleChange}
                />
                <Form.Control
                  style={{ marginBottom: "1rem" }}
                  name="Capacity"
                  value={updatedPost.Capacity ? updatedPost.Capacity : ""}
                  placeholder="Change Capacity"
                  onChange={handleChange}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={saveUpdatedPost}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
        {VehicleList ? ( // if posts avaliable then do this
          <>
            {/* Implement the search function */}
            {VehicleList.filter((post1) => {
              if (searchTerm === "") {
                return post1;
              } else if (
                post1.Vehicle_id.toLowerCase().includes(
                  searchTerm.toLowerCase()
                ) ||
                post1.Vregistered_No.toLowerCase().includes(
                  searchTerm.toLowerCase()
                ) ||
                post1.Capacity.includes(searchTerm.toLowerCase())
              ) {
                return post1;
              }
            }).map((post1) => {
              return (
                <div
                  key={post1._id} //change according to database id
                  style={{
                    border: "solid lightgray 1px",
                    borderRadius: "8px",
                    marginBottom: "1rem",
                    padding: "1rem",
                    className: Row,
                  }}
                >
                  <h5 className="information">
                    {" "}
                    Vehicle ID : {post1.Vehicle_id}
                  </h5>
                  <h6 className="information">
                    {" "}
                    Vehicle Category: {post1.Vcatagory}
                  </h6>
                  <h6 className="information">
                    {" "}
                    Vehicle Registered No : {post1.Vregistered_No}
                  </h6>
                  <h6 className="information">
                    {" "}
                    Vehicle Capacity : {post1.Capacity}
                  </h6>
                  <div
                    className="btnDiv"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      //justifyContent: "space-between",
                    }}
                  >
                    <Button
                      onClick={() => updatePosts(post1)}
                      variant="outline-info"
                      style={{
                        width: "16%",
                        marginRight: "1rem",
                        marginBottom: "1rem",
                      }}
                    >
                      UPDATE
                    </Button>

                    <Button
                      onClick={() => deletePost(post1._id)}
                      variant="outline-danger"
                      style={{
                        width: "16%",
                        marginRight: "1rem",
                        marginBottom: "1rem",
                      }}
                    >
                      DELETE
                    </Button>
                  </div>{" "}
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
    </div>
  );
}

export default VehicleList;
