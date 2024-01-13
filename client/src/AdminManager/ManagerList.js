import * as React from "react";
import { useEffect, useState } from "react"; //for get all the data from database and print  //useRef
import axios from "axios";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import { Form } from "react-bootstrap";
import "./ManagerListStyle.css";
import "../components/cssForComponents/headerStyles.css";
import Header from "../components/SystemHeader";

//create page for show the inputs
function ManagerList() {
  const navigate = useNavigate();
  const [ManagerList, setPosts] = useState([]);
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
      .get("/ManagerList")
      .then((res) => {
        console.log(res);
        setPosts(res.data); //get response data form under data category
      })
      .catch((err) => console.log(err));
  }, []); //for avoide continious rendering

  const deleteupdatePosts = (post) => {
    setDeletedPost(post);
    handleShowDelete();
  };
  //after click delete button
  const deletePost = (id) => {
    console.log(id);
    axios
      .delete(`/deleteManager/${deletedPost._id}`, deletedPost)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    handleCloseDelete();
    window.location.reload(); // for reload the page after delete
  };

  const updatePosts = (post) => {
    setUpdatedPost(post);
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
      .put(`/updateManager/${updatedPost._id}`, updatedPost)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    handleClose();
    window.location.reload();
  };

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="SList">
      <Header />

      <div style={{ width: "80%", margin: "auto auto" }}>
        <h2 style={{ textAlign: "center", marginTop: "1rem" }}>
          Manager List Page
        </h2>
        <div className="btnsAndSearch">
          <div id="buttonHolder" style={{ marginBottom: "1rem" }}>
            <Button
              id="generateReportBtn"
              className="navigationbtns"
              onClick={window.print}
            >
              Generate Report
            </Button>
            <Button
              id="addsupplier"
              className="navigationbtns"
              onClick={() => navigate("/AdminManager/AddManagers")}
              // variant="outline-primary"
              variant="success"
            >
              Add Manager
            </Button>
            <Button
              id="backBtn"
              style={{ width: "146px" }}
              variant="outline-dark"
              onClick={() => navigate(-1)}
            >
              BACK
            </Button>
          </div>

          <div className="">
            <input
              className="Search"
              type="text"
              placeholder="Search..."
              onChange={(event) => {
                setSearchTerm(event.target.value);
              }}
            />
          </div>
        </div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Update a post</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group>
                <Form.Control
                  style={{ marginBottom: "1rem" }}
                  placeholder="Job Title"
                  name="JobTitle"
                  value={updatedPost.JobTitle ? updatedPost.JobTitle : ""}
                  onChange={handleChange}
                />{" "}
                {/*if updatedPost.JobTitle avaliable return that
                                                             if not return nothing */}
                <Form.Control
                  style={{ marginBottom: "1rem" }}
                  placeholder="User Name"
                  name="UserName"
                  value={updatedPost.UserName ? updatedPost.UserName : ""}
                  onChange={handleChange}
                />
                <Form.Control
                  style={{ marginBottom: "1rem" }}
                  name="Email"
                  value={updatedPost.Email ? updatedPost.Email : ""}
                  placeholder="Email"
                  onChange={handleChange}
                />
                <Form.Control
                  style={{ marginBottom: "1rem" }}
                  name="FullName"
                  value={updatedPost.FullName ? updatedPost.FullName : ""}
                  placeholder="Full Name"
                  onChange={handleChange}
                />
                <Form.Control
                  style={{ marginBottom: "1rem" }}
                  name="NIC"
                  value={updatedPost.NIC ? updatedPost.NIC : ""}
                  placeholder="NIC"
                  onChange={handleChange}
                />
                <Form.Control
                  style={{ marginBottom: "1rem" }}
                  name="Gender"
                  value={updatedPost.Gender ? updatedPost.Gender : ""}
                  placeholder="Gender"
                  onChange={handleChange}
                />
                <Form.Control
                  style={{ marginBottom: "1rem" }}
                  name="Telephone_No"
                  value={
                    updatedPost.Telephone_No ? updatedPost.Telephone_No : ""
                  }
                  placeholder="Telephone_No"
                  onChange={handleChange}
                />
                <Form.Control
                  style={{ marginBottom: "1rem" }}
                  name="Address"
                  value={updatedPost.Address ? updatedPost.Address : ""}
                  placeholder="Address"
                  onChange={handleChange}
                />
                <Form.Control
                  style={{ marginBottom: "1rem" }}
                  name="Password"
                  value={updatedPost.Password ? updatedPost.Password : ""}
                  placeholder="Password"
                  onChange={handleChange}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer className="col">
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
              <h4 style={{ textAlign: "center" }}>Do you want to delete</h4>
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
        {ManagerList ? ( // if posts avaliable then do this
          <>
            {/* Implement the search function */}
            {ManagerList.filter((post) => {
              if (searchTerm === "") {
                return post;
              } else if (
                post.JobTitle.toLowerCase().includes(
                  searchTerm.toLowerCase()
                ) ||
                post.UserName.toLowerCase().includes(
                  searchTerm.toLowerCase()
                ) ||
                post.Email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                post.FullName.toLowerCase().includes(
                  searchTerm.toLowerCase()
                ) ||
                post.NIC.toLowerCase().includes(searchTerm.toLowerCase()) ||
                post.Gender.toLowerCase().includes(searchTerm.toLowerCase()) ||
                post.Telephone_No.includes(searchTerm) ||
                post.Address.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return post;
              }
            }).map((post) => {
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
                  <div className="row">
                    <div className="col-xl-6">
                      <h5 className="information">
                        Job Title : {post.JobTitle}
                      </h5>
                      <h6 className="information">
                        UserName : {post.UserName}
                      </h6>
                      <h6 className="information">Email : {post.Email}</h6>
                      <h6 className="information">
                        Full Name : {post.FullName}
                      </h6>
                      <h6 className="information">NIC : {post.NIC}</h6>
                      <h6 className="information">Gender : {post.Gender}</h6>
                      <h6 className="information">
                        Telephone_No : {post.Telephone_No}
                      </h6>
                      <h6 className="information">Address : {post.Address}</h6>
                      <h6 className="information">
                        Password : {post.Password}
                      </h6>
                    </div>
                    <div
                      className="btnDiv col-xl-6"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        //justifyContent: "space-between",
                      }}
                    >
                      <Button
                        onClick={() => updatePosts(post)}
                        variant="outline-info"
                        style={{
                          marginRight: "1rem",
                          marginBottom: "1rem",
                          marginTop: "auto",
                          width: "146px",
                          marginLeft: "auto",
                        }}
                      >
                        UPDATE
                      </Button>

                      <Button
                        onClick={() => deleteupdatePosts(post)}
                        variant="outline-danger"
                        style={{
                          marginRight: "1rem",
                          marginBottom: "auto",
                          width: "146px",
                          marginLeft: "auto",
                        }}
                      >
                        DELETE
                      </Button>
                    </div>{" "}
                  </div>
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

export default ManagerList;
