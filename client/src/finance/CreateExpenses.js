import { useState } from "react";
import "./CreateExpenses.css";
import { FaArrowLeft } from "react-icons/fa";
import Header from "../components/SystemHeader";
import "../components/cssForComponents/headerStyles.css";
import axios from "axios";
import { useNavigate } from "react-router-dom"; //use to create dynamic application

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

function CreateExpenses() {
  // Initial expenses data
  const [expensesData, setExpensesData] = useState([
    {
      month: "January",
      id: 1,
      date: "",
      expenseCategory: "Office Supplies",
      expenseAmount: 500,
      expensePercentage: 50,
    },
  ]);
  const navigate = useNavigate();
  const addExpenseRow = () => {
    setExpensesData((prevState) => [
      ...prevState,
      {
        id: prevState.length + 1,
        date: "",
        month: prevState[0].month,
        expenseCategory: "office supplies",
        expenseAmount: 50,
        expensePercentage: 50,
      },
    ]);
  };

  const removeExpenseRow = () => {
    if (expensesData.length > 1) {
      setExpensesData((prevState) => prevState.slice(0, -1));
    }
  };

  const updateExpensesData = (index, field, value) => {
    setExpensesData((prevState) => {
      const newData = [...prevState];
      newData[index][field] = value;
      return newData;
    });
  };

  const getTotalExpenseAmount = () => {
    return expensesData.reduce((acc, curr) => acc + curr.expenseAmount, 0);
  };

  // Error state and message
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const saveData = () => {
    // Check if month is missing
    const hasMissingMonth = expensesData[0].month.trim() === "";

    // Check if any fields are empty
    const hasEmptyFields = expensesData.some(
      (data) =>
        data.expenseCategory.trim() === "" ||
        data.expenseAmount === 0 ||
        data.expensePercentage === 0 ||
        data.expenseAmount === "" ||
        data.expensePercentage === ""
    );

    if (hasMissingMonth) {
      setHasError(true);
      setErrorMessage("Please choose a month.");
    } else if (hasEmptyFields) {
      setHasError(true);
      setErrorMessage("Please fill in all fields.");
    } else {
      axios
        .post("/expenses", expensesData)
        .then((res) => {
          console.log(res.data);
          setHasError(false);
          setErrorMessage("");
        })
        .catch((err) => {
          setHasError(true);
          setErrorMessage(err.response.data.message);
        });
    }
  };

  return (
    <div className="mainDiv">
      <div className="background" />
      <Header />
      <br />
      <div className="App">
        <div className="exp-greeting">
          <h2>Expenses Management</h2>
        </div>
      </div>
      <div style={{ marginTop: "10px" }}>
        <Container className="exp-container mt--7">
          {/* Month picker */}
          <Row>
            <div className="exp-col">
              <Input
                type="select"
                value={expensesData[0].month}
                onChange={(e) => updateExpensesData(0, "month", e.target.value)}
              >
                <option value="">Select Month</option>
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
              </Input>
            </div>
          </Row>
          {/* Table */}
          <Row>
            <div className="col">
              <Card className="exp-shadow">
                <CardHeader className="exp-border-0">
                  <div className="d-flex justify-content-between">
                    <h3 className="exp-mb-0">Expenses table</h3>
                  </div>
                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Expense Category</th>
                      <th scope="col">Expense Amount($)</th>
                      <th scope="col">Expense Percentage(%)</th>
                    </tr>
                  </thead>

                  <tbody>
                    {expensesData.map((data, index) => (
                      <tr key={index}>
                        <td>
                          <Input
                            type="text"
                            value={data.expenseCategory}
                            onChange={(e) =>
                              updateExpensesData(
                                index,
                                "expenseCategory",
                                e.target.value
                              )
                            }
                          />
                        </td>
                        <td>
                          <Input
                            type="number"
                            value={data.expenseAmount}
                            onChange={(e) =>
                              updateExpensesData(
                                index,
                                "expenseAmount",
                                e.target.value
                              )
                            }
                          />
                        </td>
                        <td>
                          <Input
                            type="number"
                            value={data.expensePercentage}
                            onChange={(e) =>
                              updateExpensesData(
                                index,
                                "expensePercentage",
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
                    <Button color="primary" onClick={() => addExpenseRow()}>
                      +
                    </Button>
                    <Button color="danger" onClick={removeExpenseRow}>
                      -
                    </Button>
                  </div>

                  <Button color="primary" onClick={() => saveData()}>
                    Save
                  </Button>
                  <Button color="primary" onClick={() => navigate(-1)}>
                    <FaArrowLeft />
                    Back
                  </Button>
                  {/* Error message */}
                  {hasError && (
                    <Row className="justify-content-center mt-3">
                      <Badge color="danger">{errorMessage}</Badge>
                    </Row>
                  )}
                </CardFooter>
              </Card>
            </div>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default CreateExpenses;
