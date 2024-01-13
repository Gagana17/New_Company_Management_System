import { Button, Form, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "./CreateProduct.css";
import Header from "../components/SystemHeader";

function CreateProduct() {
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    name: "",
    id: "",
    date: "",
    description: "",
    price: "",
    image: null,
  });
  const [showError, setShowError] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProduct((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      setProduct((prev) => {
        return {
          ...prev,
          image: event.target.result,
        };
      });
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Check if any required fields are empty
    if (
      product.name === "" ||
      product.id === "" ||
      product.date === "" ||
      product.price === ""
    ) {
      setShowError(true);
      return;
    }

    // Convert image data to base64 string
    const imageBase64 = product.image.split(",")[1];

    const formData = {
      name: product.name,
      id: product.id,
      date: product.date,
      description: product.description,
      price: product.price,
      image: imageBase64,
    };

    axios
      .post("/api/products", formData)
      .then((res) => {
        console.log(res.data);
        navigate("/ProductManager/ProductList");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Header />
      <br />
      <div className="addProductForm">
        <h2>Add Product</h2>
        {showError && (
          <Alert variant="danger">Please fill in all required fields.</Alert>
        )}
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={product.name}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Product ID</Form.Label>
            <Form.Control
              type="text"
              name="id"
              value={product.id}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="date"
              name="date"
              value={product.date}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="description"
              value={product.description}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="text"
              name="price"
              value={product.price}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Product Image</Form.Label>
            <Form.Control type="file" onChange={handleImageChange} />
          </Form.Group>
          <Button type="submit">Add Product</Button>
        </Form>
      </div>
    </div>
  );
}

export default CreateProduct;
