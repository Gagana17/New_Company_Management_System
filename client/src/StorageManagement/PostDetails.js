import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Header from "../components/SystemHeader";
import "./Home.css";

const PostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    axios.get(`/post/${id}`).then((res) => {
      if (res.data.success) {
        setPost(res.data.post);
      }
    });
  }, [id]);

  return (
    <div>
      <Header />
      <div className="container">
        <div className="card mt-5">
          <div className="card-header">
            <h2>Item Details</h2>
          </div>
          <div className="card-body">
            <h4 className="card-title">{post.ItemName}</h4>
            <hr />

            <div className="row">
              <div className="col-md-6">
                <dl className="row">
                  <dt className="col-sm-4">Item No:</dt>
                  <dd className="col-sm-8">{post.ItemNo}</dd>

                  <dt className="col-sm-4">Description:</dt>
                  <dd className="col-sm-8">{post.Description}</dd>

                  <dt className="col-sm-4">Quantity:</dt>
                  <dd className="col-sm-8">{post.Quantity}</dd>
                </dl>
              </div>
              <div className="col-md-6">
                {/* Add additional details or components here */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
