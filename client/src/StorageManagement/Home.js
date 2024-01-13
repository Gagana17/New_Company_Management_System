/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-useless-constructor */
/* eslint-disable no-unused-vars */

import React, { Component } from "react";
import axios from "axios";
import Header from "../components/SystemHeader";
import "./Home.css";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    this.retrievePosts();
  }

  retrievePosts() {
    axios.get("/itemsList").then((res) => {
      if (res.data.success) {
        this.setState({
          posts: res.data.existingPosts,
        });

        console.log(this.state.posts);
      }
    });
  }

  onDelete = (id) => {
    axios.delete(`/post/delete/${id}`).then((res) => {
      alert("Deleted Successfully");
      this.retrievePosts();
    });
  };

  filterData(posts, searchKey) {
    const result = posts.filter((post) =>
      post.ItemName.toLowerCase().includes(searchKey.toLowerCase())
    );

    return result;
  }

  handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;

    axios.get("/itemsList").then((res) => {
      if (res.data.success) {
        const filteredPosts = this.filterData(
          res.data.existingPosts,
          searchKey
        );
        this.setState({ posts: filteredPosts });
      }
    });
  };

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-lg-9 mt-2 mb-2">
              <h4>Search Items</h4>
            </div>
          </div>
          <div className="col-lg-9 mt-2 mb-2">
            <input
              className="form-control"
              type="search"
              placeholder="Search"
              name="searchQuery"
              onChange={this.handleSearchArea}
            ></input>
          </div>
          <h1 className="text-center my-4">Inventory List</h1>
          <table className="table table-striped">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Item No</th>
                <th scope="col">Item Name</th>
                <th scope="col">Description</th>
                <th scope="col">Quantity</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.posts.map((posts, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{posts.ItemNo}</td>
                  <td>
                    <a
                      href={`/post/${posts._id}`}
                      style={{ textDecoration: "none" }}
                    >
                      {posts.ItemName}
                    </a>
                  </td>

                  <td>{posts.Description}</td>
                  <td>{posts.Quantity}</td>
                  <td>
                    <a
                      className="btn btn-warning mr-2"
                      href={`/edit/${posts._id}`}
                    >
                      <i className="fas fa-edit"></i>&nbsp;Edit
                    </a>
                    <span className="mx-1">|</span>
                    <a
                      className="btn btn-danger"
                      href="#"
                      onClick={() => this.onDelete(posts._id)}
                    >
                      <i className="far fa-trash-alt"></i>&nbsp;Delete
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <button className="btn btn-success">
            <a href="/add" style={{ textDecoration: "none", color: "white" }}>
              Add Item
            </a>
          </button>
        </div>
      </div>
    );
  }
}
