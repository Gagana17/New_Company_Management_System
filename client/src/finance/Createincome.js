import { useState } from "react";
import "./Createincome.css";
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

function Createincome() {
  const navigate = useNavigate();

  // Initial income data
  const [incomeData, setIncomeData] = useState([
    {
      id: 1,
      category: "Revenue",
      amount: 0,
      percentage: 0,
    },
  ]);

  // Error state and message
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Add a new row to income table
  const addNewRow = () => {
    setIncomeData((prevState) => [
      ...prevState,
      {
        id: prevState.length + 1,
        category: "Revenue",
        amount: 0,
        percentage: 0,
      },
    ]);
  };

  // Remove the last row from income table
  const handleDeleteRow = () => {
    setIncomeData((prevState) => prevState.slice(0, -1));
  };

  const saveIncomeStatementData = () => {
    // Check if any fields are empty
    const hasEmptyFields = incomeData.some(
      (data) =>
        data.category.trim() === "" ||
        data.amount === "" ||
        data.percentage === ""
    );

    if (hasEmptyFields) {
      setHasError(true);
      setErrorMessage("Please fill in all fields.");
    } else {
      axios
        .post("/income", incomeData)
        .then((res) => {
          console.log(res.data);
          setHasError(false);
          setErrorMessage("");
        })
        .catch((err) => {
          console.log(err);
          setHasError(true);
          setErrorMessage("Error saving income statement data");
        });
    }
  };

  // Update income data
  const updateIncomeData = (index, field, value) => {
    setIncomeData((prevState) => {
      const newData = [...prevState];
      newData[index][field] = value;
      return newData;
    });
  };

  return (
    <div className="mainDiv">
      <div className="background" />
      <Header />
      <br />
      <div className="App">
        <div className="greeting">
          <h2>Income Statement</h2>
        </div>
      </div>
      <div style={{ marginTop: "10px" }}>
        <Container className="inc-container mt--7">
          {/* Month picker */}
          <Row>
            <div className="col">
              <Input type="select" defaultValue="Month">
                <option disabled>Month</option>
                <option>January</option>
                <option>February</option>
                <option>March</option>
                <option>April</option>
                <option>May</option>
                <option>June</option>
                <option>July</option>
                <option>August</option>
                <option>September</option>
                <option>October</option>
                <option>November</option>
                <option>December</option>
              </Input>
            </div>
          </Row>
          {/* Table */}
          <Row>
            <div className="col">
              <Card className="shadow">
                <CardHeader className="border-0">
                  <div className="d-flex justify-content-between">
                    <h3 className="mb-0">Revenue table</h3>
                  </div>
                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Revenue Category</th>
                      <th scope="col">Revenue Amount($)</th>
                      <th scope="col">Percentage(%)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {incomeData.map((data, index) => (
                      <tr key={index}>
                        <td>
                          <Input
                            type="text"
                            value={data.category}
                            onChange={(e) =>
                              updateIncomeData(
                                index,
                                "category",
                                e.target.value
                              )
                            }
                          />
                        </td>
                        <td>
                          <Input
                            type="number"
                            value={data.amount}
                            onChange={(e) =>
                              updateIncomeData(index, "amount", e.target.value)
                            }
                          />
                        </td>
                        <td>
                          <Input
                            type="number"
                            value={data.percentage}
                            onChange={(e) =>
                              updateIncomeData(
                                index,
                                "percentage",
                                e.target.value
                              )
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

                  <Button
                    color="primary"
                    onClick={() => saveIncomeStatementData()}
                  >
                    Save
                  </Button>
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

export default Createincome;
