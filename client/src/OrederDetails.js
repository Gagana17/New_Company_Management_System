import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import "./components/cssForComponents/headerStyles.css";
import Header from "./components/SystemHeader";
function OrederDetails() {
  const navigate = useNavigate();
  const [orderdetail, setPost] = useState([]);
  const [searchTerm] = useState("");

  useEffect(() => {
    axios
      .get("/orderdetail")
      .then((res) => {
        console.log(res);
        setPost(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const deleteOrder = (id) => {
    console.log(id);
    axios
      .delete(`/deleteOrder/${id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    window.location.reload();
  };

  return (
    <div className="">
      <div style={{ width: "99%", marginTop: "10px", textAlign: "center" }}>
        <br></br> <h1 style={{ color: "black" }}>Your Order Details</h1>
      </div>

      {orderdetail ? (
        <>
          {orderdetail
            .filter((post) => {
              if (searchTerm === "") {
                return post;
              } else if (
                post.Choises.toLowerCase().includes(searchTerm.toLowerCase()) ||
                post.number.toLowerCase().includes(searchTerm.toLowerCase()) ||
                post.Telephone.includes(searchTerm) ||
                post.Address.toLowerCase().includes(searchTerm.toLowerCase())
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
                  <h4>Product Name : {post.Choises}</h4>
                  <h4>No Of Items : {post.number}</h4>
                  <h4>Telephone No : {post.Telephone}</h4>
                  <h4>Address : {post.Address}</h4>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <Button
                      onClick={() => deleteOrder(post._id)}
                      variant="outline-danger"
                      style={{ width: "30%" }}
                    >
                      DELETE
                    </Button>
                    <br />
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
  );
}

export default OrederDetails;
