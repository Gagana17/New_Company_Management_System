import { useEffect, useState } from "react";
import axios from "axios";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";

function Posts() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [updatedPost, setUpdatedPost] = useState({});

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [searchTerm, setSerchTerm] = useState("");

  useEffect(() => {
    axios
      .get("/posts")
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      })

      .catch((err) => console.log(err));
  }, []);

  const deletePost = (id) => {
    axios
      .delete(`/delete/${id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    window.location.reload();
  };
  const updatePost = (post) => {
    setUpdatedPost(post);
    handleShow();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedPost((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const saveUpdatedPost = () => {
    axios
      .put(`/update/${updatedPost._id}`, updatedPost)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    handleClose();
    window.location.reload();
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Customer Details Table</h1>

      <br />
      <br />
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
            marginLeft: "25%",
          }}
          onChange={(event) => {
            setSerchTerm(event.target.value);
          }}
        />
      </div>
      <br />
      <br />
      <div style={{ width: "90%", margin: "auto auto" }}>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Update a posts</Modal.Title>
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
                />

                <Form.Control
                  name="Email"
                  value={updatedPost.Email ? updatedPost.Email : ""}
                  placeholder="Email"
                  onChange={handleChange}
                />
                <br></br>
                <Form.Control
                  name="Telephone"
                  value={updatedPost.Telephone ? updatedPost.Telephone : ""}
                  placeholder="Telephone"
                  onChange={handleChange}
                />
                <br></br>
                <Form.Control
                  name="Address"
                  value={updatedPost.Address ? updatedPost.Address : ""}
                  placeholder="Address"
                  onChange={handleChange}
                />
                <br></br>
                <Form.Control
                  name="Password"
                  value={updatedPost.Password ? updatedPost.Password : ""}
                  placeholder="Password"
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
        {posts ? (
          <>
            {posts
              .filter((post) => {
                if (searchTerm === "") {
                  return post;
                } else if (
                  post.Name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  post.Email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  post.Telephone.includes(searchTerm) ||
                  post.Address.toLowerCase().includes(
                    searchTerm.toLowerCase()
                  ) ||
                  post.Password.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return post;
                }
              })
              .map((post) => {
                return (
                  <div
                    key={post._id}
                    style={{
                      border: "solid lightgray 1px",
                      borderRadius: "8px",
                      marginBottom: "1rem",
                      padding: "1rem",
                    }}
                  >
                    <h4>User Name : {post.Name}</h4>
                    <h4>Email : {post.Email}</h4>
                    <h4>Telephone No : {post.Telephone}</h4>
                    <h4>Address : {post.Address}</h4>
                    <h4>Password: {post.Password}</h4>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <Button
                        variant="outline-info"
                        onClick={() => updatePost(post)}
                        style={{ width: "30%", marginRight: "1rem" }}
                      >
                        UPDATE
                      </Button>

                      <Button
                        onClick={() => deletePost(post._id)}
                        variant="outline-danger"
                        style={{ width: "30%" }}
                      >
                        DELETE
                      </Button>

                      <Button
                        style={{ width: "30%", marginLeft: "1rem" }}
                        variant="outline-dark"
                        onClick={() => navigate(-1)}
                      >
                        BACK
                      </Button>
                    </div>
                  </div>
                );
              })}
          </>
        ) : (
          ""
        )}
      </div>
      <Button
        style={{
          marginLeft: "90%",
        }}
        onClick={window.print}
      >
        Genarate report
      </Button>

      <Button
        style={{
          width: "10%",
          backgroundColor: "orange",
          marginLeft: "90%",
          marginTop: "5px",
        }}
        onClick={() => navigate(-1)}
      >
        BACK
      </Button>
    </div>
  );
}

export default Posts;
