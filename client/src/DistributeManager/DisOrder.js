import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function DisOrederDetails() {
  const navigate = useNavigate();
  const [orderdetail, setOrderDetail] = useState([]);
  const [searchTerm] = useState("");

  useEffect(() => {
    axios
      .get("/orderdetail")
      .then((res) => {
        console.log(res);
        setOrderDetail(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const deleteOrder = (id) => {
    if (
      window.confirm(
        "Are you sure you want to conform the order to distribute?"
      )
    ) {
      console.log(id);
      axios
        .delete(`/deleteOrder/${id}`)
        .then((res) => {
          console.log(res);
          // Remove the deleted order from the local state
          setOrderDetail((prevOrderDetail) =>
            prevOrderDetail.filter((order) => order._id !== id)
          );
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="">
      <div style={{ width: "99%", marginTop: "10px", textAlign: "center" }}>
        <br />
        <h1 style={{ color: "black" }}>Your Order Details</h1>
      </div>

      <Table striped bordered>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>No Of Items</th>
            <th>Telephone No</th>
            <th>Address</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
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
                <tr key={post._id}>
                  <td>{post.Choises}</td>
                  <td>{post.number}</td>
                  <td>{post.Telephone}</td>
                  <td>{post.Address}</td>
                  <td>
                    <Button
                      onClick={() => deleteOrder(post._id)}
                      variant="outline-danger"
                      style={{ marginRight: "0.5rem" }}
                    >
                      Confirm
                    </Button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>

      <Button variant="outline-dark" onClick={() => navigate(-1)}>
        BACK
      </Button>
    </div>
  );
}

export default DisOrederDetails;
