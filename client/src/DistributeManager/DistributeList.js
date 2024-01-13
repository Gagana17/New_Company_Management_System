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

// {/* <div //background image
//   className="background"
//   style={{
//     position: "absolute",
//     top: "0%",
//     left: "0%",
//     width: "100%",
//     height: "100vh",
//     backgroundImage: `url("https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=50")`,
//     opacity: 0.2,
//   }}
// ></div>; */}

//create page for show the inputs
function DistributeList() {
  const navigate = useNavigate();
  const [DistributeList, setPosts] = useState([]);
  const [updatedPost, setUpdatedPost] = useState({});
  const [deletedPost, setDeletedPost] = useState({});

  const [show, setShow] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  //for update
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //for delete
  const handleCloseDelete = () => setShowDelete(false);
  const handleShowDelete = () => setShowDelete(true);

  useEffect(() => {
    axios
      .get("/DistributeList")
      .then((res) => {
        console.log(res);
        setPosts(res.data); //get respose from data under data category
      })
      .catch((err) => console.log(err));
  }, []); //for avoide continious rendering

  const deleteupdatePosts = (Dis) => {
    setDeletedPost(Dis);
    handleShowDelete();
  };

  //after click delete button
  const deletePost = (id) => {
    console.log(id);
    axios
      .delete(`/deleteDistributer/${deletedPost._id}`, deletedPost)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    handleCloseDelete();
    window.location.reload(); // for reload the page after delete
  };

  const updatePosts = (Dis) => {
    setUpdatedPost(Dis);
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
      .put(`/updateDistribute/${updatedPost._id}`, updatedPost)
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
          Distributer List Page
        </h2>
        <div className="row btnsAndSearch">
          <div className="col-xl-3">
            <Button
              id="generateReportBtn"
              className="navigationbtns"
              // onClick={window.print}
              onClick={() =>
                navigate("/DistributeManager/DistributeList/disreport")
              }
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
            <Modal.Title>Update Distribute Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group>
                <Form.Control
                  style={{ marginBottom: "1rem" }}
                  placeholder="Enter Distributer Id"
                  name="Distributer_id"
                  value={
                    updatedPost.Distributer_id ? updatedPost.Distributer_id : ""
                  }
                  onChange={handleChange}
                />{" "}
                {/*if updatedPost.Name avaliable return that
                                                             if not return nothing */}
                <Form.Control
                  style={{ marginBottom: "1rem" }}
                  name="Distributer_name"
                  value={
                    updatedPost.Distributer_name
                      ? updatedPost.Distributer_name
                      : ""
                  }
                  placeholder="Change Distributer Name"
                  onChange={handleChange}
                />
                <Form.Control
                  style={{ marginBottom: "1rem" }}
                  name="Registered_No"
                  value={
                    updatedPost.Registered_No ? updatedPost.Registered_No : ""
                  }
                  placeholder="Change Distributer Registered_No"
                  onChange={handleChange}
                />
                <Form.Control
                  style={{ marginBottom: "1rem" }}
                  name="Area"
                  value={updatedPost.Area ? updatedPost.Area : ""}
                  placeholder="Change Area"
                  onChange={handleChange}
                />
                <Form.Control
                  style={{ marginBottom: "1rem" }}
                  name="Contact_No"
                  value={updatedPost.Contact_No ? updatedPost.Contact_No : ""}
                  placeholder="Change Contact_No"
                  onChange={handleChange}
                />
                <Form.Control
                  style={{ marginBottom: "1rem" }}
                  name="dAddress"
                  value={updatedPost.dAddress ? updatedPost.dAddress : ""}
                  placeholder="Change Address"
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
        <div>
          <Modal show={showDelete} onHide={deletePost}>
            <Modal.Header closeButton>
              {/* <Modal.Title>Delete a Post</Modal.Title> */}
            </Modal.Header>
            <Modal.Body>
              <h4 style={{ textAlign: "center" }}>Please Confirem delete</h4>
            </Modal.Body>
            <Modal.Footer className="col">
              <Button variant="secondary" onClick={handleCloseDelete}>
                Cancle
              </Button>
              <Button variant="danger" onClick={deletePost}>
                Delete
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
        {DistributeList ? ( // if posts avaliable then do this
          <>
            {/* Implement the search function */}
            {DistributeList.filter((Dis) => {
              if (searchTerm === "") {
                return Dis;
              } else if (
                Dis.Distributer_id.toLowerCase().includes(
                  searchTerm.toLowerCase()
                ) ||
                Dis.Registered_No.toLowerCase().includes(
                  searchTerm.toLowerCase()
                ) ||
                Dis.dAddress.includes(searchTerm.toLowerCase())
              ) {
                return Dis;
              }
            }).map((Dis) => {
              return (
                <div
                  key={Dis._id} //change according to database id
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
                    Distributer ID : {Dis.Distributer_id}
                  </h5>
                  <h6 className="information">
                    {" "}
                    Distributer Name: {Dis.Distributer_name}
                  </h6>
                  <h6 className="information">
                    Distributer Registered No : {Dis.Registered_No}
                  </h6>
                  <h6 className="information">
                    {" "}
                    Distribution Area : {Dis.Area}
                  </h6>
                  <h6 className="information">
                    Contact Number : {Dis.Contact_No}
                  </h6>
                  <h6 className="information">Address : {Dis.dAddress}</h6>
                  <div
                    className="btnDiv"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      //justifyContent: "space-between",
                    }}
                  >
                    <Button
                      onClick={() => updatePosts(Dis)}
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
                      onClick={() => deleteupdatePosts(Dis)} //deletePost(post._id)}
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

export default DistributeList;
