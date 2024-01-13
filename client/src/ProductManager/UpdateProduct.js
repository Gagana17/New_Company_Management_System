import { Button, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./UpdateProduct.css";
import Header from "../components/SystemHeader";

function UpdateProduct() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState({
    name: "",
    id: "",
    date: "",
    description: "",
    price: "",
    image: null,
  });

  useEffect(() => {
    axios
      .get(`/api/products/${id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

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

  const handleSubmit = async (event) => {
    event.preventDefault();

    const imageBase64 = product.image ? product.image.split(",")[1] : null;

    const formData = {
      name: product.name,
      id: product.id,
      date: product.date,
      description: product.description,
      price: product.price,
      image: imageBase64,
    };

    try {
      await axios.put(`/api/updateproduct/${id}`, formData);
      navigate("/ProductManager/ProductList");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Header />
      <br />
      <div className="updateProductForm">
        <h2>Update Product</h2>
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
          <Button type="submit">Update Product</Button>
        </Form>
      </div>
    </div>
  );
}

export default UpdateProduct;
