import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "../components/SystemHeader";
import axios from "axios";
import "./ProductList.css";

function ViewProduct() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get("/api/viewProducts")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const deleteProduct = (productId) => {
    axios
      .delete(`/api/deleteProduct/${productId}`)
      .then((res) => {
        // Remove the deleted product from the list of products
        setProducts(products.filter((product) => product._id !== productId));
      })
      .catch((err) => console.log(err));
    window.location.reload();
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="product-list-page">
      <div //background image
        className="background"
        style={{
          position: "absolute",
          top: "0%",
          left: "0%",
          width: "100%",
          height: "230vh",

          backgroundImage: `url("https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=50")`,
          opacity: 0.5,
        }}
      ></div>
      <Header />

      <Container>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="product-list-title">Product List</h2>
          <Link to="/ProductManager/CreateProduct">
            <Button variant="primary">Add Product</Button>
          </Link>
        </div>

        <Row className="mb-3">
          <Col>
            <Form.Control
              type="text"
              placeholder="Search Products"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </Col>
        </Row>

        <Button
          id="generateReportBtn"
          className="navigationbtns"
          onClick={window.print}
        >
          Generate Report
        </Button>

        <Row>
          {filteredProducts.map((product) => (
            <Col key={product._id} md={4}>
              <Card className="product-card">
                <Card.Img
                  variant="top"
                  src={`data:image/png;base64,${product.image}`}
                />

                <Card.Body>
                  <Card.Title as="h3" className="product-name">
                    {product.name}
                  </Card.Title>

                  <Card.Text as="div" className="product-description">
                    {product.description}
                  </Card.Text>

                  <Card.Text as="h4" className="product-price">
                    ${product.price}
                  </Card.Text>

                  <Link to={`/ProductManager/UpdateProduct/${product._id}`}>
                    <Button variant="primary" className="view-product-button">
                      View Product
                    </Button>
                  </Link>

                  <Button
                    variant="danger"
                    className="delete-product-button"
                    onClick={() => deleteProduct(product._id)}
                  >
                    Delete
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default ViewProduct;
