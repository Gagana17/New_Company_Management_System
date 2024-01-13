import React, { Component } from "react";
import axios from "axios";
import Header from "../components/SystemHeader";
import "./Home.css";

export default class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ItemNo: "",
      ItemName: "",
      Description: "",
      Quantity: "",
      validationError: "",
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { ItemNo, ItemName, Description, Quantity } = this.state;

    if (!ItemNo || !ItemName || !Description || !Quantity) {
      this.setState({ validationError: "Please fill all fields" });
      return;
    }

    const data = {
      ItemNo: ItemNo,
      ItemName: ItemName,
      Description: Description,
      Quantity: Quantity,
      ConfirmDate: new Date(),
    };

    axios.post("/post/save", data).then((res) => {
      if (res.data.success) {
        this.setState({
          ItemNo: "",
          ItemName: "",
          Description: "",
          Quantity: "",
          validationError: "",
        });
        alert("Item added successfully!");
      }
    });
  };

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="card mt-4">
                <div className="card-body">
                  <h2 className="card-title text-center mb-4">Add New Item</h2>
                  <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                      <label htmlFor="itemNo">Item No:</label>
                      <input
                        type="text"
                        className="form-control"
                        id="itemNo"
                        name="ItemNo"
                        placeholder="Enter item number"
                        value={this.state.ItemNo}
                        onChange={this.handleInputChange}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="itemName">Item Name:</label>
                      <input
                        type="text"
                        className="form-control"
                        id="itemName"
                        name="ItemName"
                        placeholder="Enter item name"
                        value={this.state.ItemName}
                        onChange={this.handleInputChange}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="description">Description:</label>
                      <textarea
                        className="form-control"
                        id="description"
                        name="Description"
                        placeholder="Enter description"
                        value={this.state.Description}
                        onChange={this.handleInputChange}
                      ></textarea>
                    </div>

                    <div className="form-group">
                      <label htmlFor="quantity">Quantity:</label>
                      <input
                        type="text"
                        className="form-control"
                        id="quantity"
                        name="Quantity"
                        placeholder="Enter quantity"
                        value={this.state.Quantity}
                        onChange={this.handleInputChange}
                      />
                    </div>

                    {this.state.validationError && (
                      <div className="text-danger mb-3">
                        {this.state.validationError}
                      </div>
                    )}

                    <div className="text-center">
                      <button className="btn btn-primary" type="submit">
                        <i className="far fa-check-circle mr-2"></i> Add Item
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
