import { useState } from "react";
import "./CreateSales.css";
import { useNavigate } from "react-router-dom";
import Header from "../components/SystemHeader";
import axios from "axios";
import { FaArrowLeft } from "react-icons/fa";

import {
  Badge,
  Card,
  CardHeader,
  CardFooter,
  Table,
  Container,
  Row,
  Input,
  Button,
} from "reactstrap";
function CreateSales() {
  const navigate = useNavigate();

  // Initial sales data
  const [salesData, setSalesData] = useState([
    {
      id: 1,
      month: "",
      product: "",
      quantity: "",
      amount: "",
    },
  ]);

  // Error state and message
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Function to add new row
  const addNewRow = () => {
    setSalesData((prevState) => [
      ...prevState,
      {
        id: prevState.length + 1,
        month: prevState[0].month, // Set the month value for the new row
        product: "",
        quantity: "",
        amount: "",
      },
    ]);
  };

  // Function to delete last row
  const handleDeleteRow = () => {
    setSalesData((prevState) => prevState.slice(0, -1));
  };

  // Function to update sales data
  const updateSalesData = (index, field, value) => {
    setSalesData((prevState) => {
      const newData = [...prevState];
      newData[index][field] = value;
      return newData;
    });
  };

  const saveData = () => {
    // Check if month is missing
    const hasMissingMonth = salesData[0].month.trim() === "";

    // Check if any fields are empty
    const hasEmptyFields = salesData.some(
      (data) =>
        data.product.trim() === "" || data.quantity === "" || data.amount === ""
    );

    if (hasMissingMonth) {
      setHasError(true);
      setErrorMessage("Please choose a month.");
    } else if (hasEmptyFields) {
      setHasError(true);
      setErrorMessage("Please fill in all fields.");
    } else {
      axios
        .post("/sales", salesData)
        .then((res) => {
          console.log(res.data);
          setHasError(false);
          setErrorMessage("");
        })
        .catch((err) => {
          console.log(err);
          setHasError(true);
          setErrorMessage("Error saving sales data");
        });
    }
  };
  return (
    <div className="mainDiv">
      <div className="background" />
      <Header />
      <br />
      <div className="App">
        <div className="greeting">
          <h2>Sales Report</h2>
        </div>
      </div>
      <div style={{ marginTop: "10px" }}>
        <Container className="exp-container mt--7">
          {/* Date picker */}
          <select
            value={salesData[0].month}
            onChange={(e) => updateSalesData(0, "month", e.target.value)}
          >
            <option value="">Select a month</option>
            <option value="January">January</option>
            <option value="February">February</option>
            <option value="March">March</option>
            <option value="April">April</option>
            <option value="May">May</option>
            <option value="June">June</option>
            <option value="July">July</option>
            <option value="August">August</option>
            <option value="September">September</option>
            <option value="October">October</option>
            <option value="November">November</option>
            <option value="December">December</option>
          </select>

          {/* Table */}
          <Row>
            <div className="col">
              <Card className="shadow">
                <CardHeader className="border-0">
                  <div className="d-flex justify-content-between">
                    <h3 className="mb-0">Sales table</h3>
                  </div>
                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Product</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Amount($)</th> {/* New column */}
                    </tr>
                  </thead>
                  <tbody>
                    {salesData.map((data, index) => (
                      <tr key={index}>
                        <td>
                          <Input
                            type="text"
                            value={data.product}
                            onChange={(e) =>
                              updateSalesData(index, "product", e.target.value)
                            }
                          />
                        </td>
                        <td>
                          {" "}
                          {/* New column */}
                          <Input
                            type="number"
                            value={data.quantity}
                            onChange={(e) =>
                              updateSalesData(index, "quantity", e.target.value)
                            }
                          />
                        </td>
                        <td>
                          <Input
                            type="number"
                            value={data.amount}
                            onChange={(e) =>
                              updateSalesData(index, "amount", e.target.value)
                            }
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
                <CardFooter className="py-4">
                  <div className="add-row-container">
                    <Button color="primary" onClick={() => addNewRow()}>
                      +
                    </Button>
                    <Button color="danger" onClick={handleDeleteRow}>
                      -
                    </Button>
                  </div>
                  <Button color="primary" onClick={() => saveData()}>
                    Save
                  </Button>{" "}
                  <Button color="primary" onClick={() => navigate(-1)}>
                    <FaArrowLeft />
                    Back
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </Row>
          {/* Error message */}
          {hasError && (
            <Row className="justify-content-center mt-3">
              <Badge color="danger">{errorMessage}</Badge>
            </Row>
          )}
        </Container>
      </div>
    </div>
  );
}
export default CreateSales;
