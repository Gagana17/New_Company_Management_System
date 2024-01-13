import * as React from "react";
import { useEffect, useState } from "react"; //for get all the data from database and print  //useRef
import axios from "axios";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import { Form } from "react-bootstrap";
import "./SupplierListStyle.css";
import "../components/cssForComponents/headerStyles.css";
import SystemHeader from "../components/SystemHeader";

//create page for show the inputs
function SupplierList() {
  const navigate = useNavigate();
  const [SupplierList, setPosts] = useState([]);
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
      .get("/SupplierList")
      .then((res) => {
        console.log(res);
        setPosts(res.data); //get response data form under data category
      })
      .catch((err) => console.log(err));
  }, []); //for avoide continious rendering

  //create delete posts method for Delete Model
  //for trigger the delete model
  const deleteupdatePosts = (post) => {
    setDeletedPost(post);
    handleShowDelete();
  };
  //after click delete button in the model
  const deletePost = (id) => {
    console.log(id);
    axios
      .delete(`/deleteSupplier/${deletedPost._id}`, deletedPost)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    handleCloseDelete();
    window.location.reload(); // for reload the page after delete
  };

  //for trigger the update model
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
      .put(`/updateSupplier/${updatedPost._id}`, updatedPost)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    handleClose();
    window.location.reload();
  };

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <SystemHeader />

      <div style={{ width: "80%", margin: "auto auto" }}>
        <h2 style={{ textAlign: "center", marginTop: "1rem" }}>
          Supplier List Page
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
              onClick={() => navigate("/SupplierManager/CreateSupplierPosts")}
              // variant="outline-primary"
              variant="success"
            >
              Add Supplier
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
                  placeholder="Name"
                  name="Name"
                  value={updatedPost.Name ? updatedPost.Name : ""}
                  onChange={handleChange}
                />{" "}
                {/*if updatedPost.Name avaliable return that
                                                             if not return nothing */}
                <Form.Control
                  style={{ marginBottom: "1rem" }}
                  name="Item"
                  value={updatedPost.Item ? updatedPost.Item : ""}
                  placeholder="Item"
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
                  name="Age"
                  value={updatedPost.Age ? updatedPost.Age : ""}
                  placeholder="Age"
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
                  name="Address"
                  value={updatedPost.Address ? updatedPost.Address : ""}
                  placeholder="Address"
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
        {SupplierList ? ( // if posts avaliable then do this
          <>
            {/* Implement the search function */}
            {SupplierList.filter((post) => {
              if (searchTerm === "") {
                return post;
              } else if (
                post.Name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                post.Item.toLowerCase().includes(searchTerm.toLowerCase()) ||
                post.Telephone_No.includes(searchTerm) ||
                post.NIC.toLowerCase().includes(searchTerm.toLowerCase()) ||
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
                      {/* {" "} */}
                      {/*@ media min width : 200px */}
                      <h5 className="information">Name : {post.Name}</h5>
                      <h6 className="information">Item : {post.Item}</h6>
                      <h6 className="information">
                        Telephone_No : {post.Telephone_No}
                      </h6>
                      <h6 className="information">Age : {post.Age}</h6>
                      <h6 className="information">NIC : {post.NIC}</h6>
                      <h6 className="information">Address : {post.Address}</h6>
                    </div>
                    <div
                      className="col-xl-6"
                      style={{
                        display: "flex",
                        flexDirection: "column",
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
                        onClick={() => deleteupdatePosts(post)} //deletePost(post._id)}
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

export default SupplierList;
