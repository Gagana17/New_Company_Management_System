/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/SystemHeader";
import "./Home.css";

const EditPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [state, setState] = useState({
    ItemNo: "",
    ItemName: "",
    Description: "",
    Quantity: "",
    validationError: "",
  });

  useEffect(() => {
    axios.get(`/post/${id}`).then((res) => {
      if (res.data.success) {
        const post = res.data.post;
        setState({
          ...state,
          ItemNo: post.ItemNo,
          ItemName: post.ItemName,
          Description: post.Description,
          Quantity: post.Quantity,
        });
      }
    });
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { ItemNo, ItemName, Description, Quantity } = state;

    if (!ItemNo || !ItemName || !Description || !Quantity) {
      setState({ ...state, validationError: "Please fill all fields" });
      return;
    }

    const data = {
      ItemNo: ItemNo,
      ItemName: ItemName,
      Description: Description,
      Quantity: Quantity,
    };

    axios.put(`/post/update/${id}`, data).then((res) => {
      if (res.data.success) {
        alert("Item updated successfully!");
        navigate(`/post/${id}`);
      }
    });
  };

  return (
    <div>
      <Header />
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-md-6 mt-4">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title text-center">Edit Item</h2>
                <div className="frame">
                  <form className="needs-validation" noValidate>
                    <div className="form-group">
                      <label htmlFor="itemNo">Item No:</label>
                      <input
                        type="text"
                        className="form-control"
                        id="itemNo"
                        name="ItemNo"
                        placeholder="Enter item number"
                        value={state.ItemNo}
                        onChange={handleInputChange}
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
                        value={state.ItemName}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="description">Description:</label>
                      <textarea
                        className="form-control"
                        id="description"
                        name="Description"
                        placeholder="Enter description"
                        value={state.Description}
                        onChange={handleInputChange}
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
                        value={state.Quantity}
                        onChange={handleInputChange}
                      />
                    </div>
                    {state.validationError && (
                      <div className="text-danger mb-3">
                        {state.validationError}
                      </div>
                    )}

                    <div className="text-center">
                      <button
                        className="btn btn-primary"
                        type="submit"
                        onClick={onSubmit}
                      >
                        Update Item
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditPost;
