import { useState } from "react";
import "./CreatePayroll.css";
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

function CreatePayroll() {
  const navigate = useNavigate();

  // Initial payroll data
  const [payrollData, setPayrollData] = useState([
    {
      id: 1,
      month: "January",
      employeeId: "001",
      employeeName: "ovinda",
      employeeSalary: "25000",
    },
  ]);

  // Error state and message
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const addNewRow = () => {
    setPayrollData((prevState) => [
      ...prevState,
      {
        id: prevState.length + 1,
        employeeId: "",
        employeeName: "",
        employeeSalary: "",
        month: payrollData[0].month, // Add month field to new row
      },
    ]);
  };

  const handleDeleteRow = () => {
    setPayrollData((prevState) => prevState.slice(0, -1));
  };

  const updatePayrollData = (index, field = "employeeName", value) => {
    setPayrollData((prevState) => {
      const newData = [...prevState];
      newData[index][field] = value;

      // Check if month field is empty and update error state and message
      if (field === "month" && value.trim() === "") {
        setHasError(true);
        setErrorMessage("Please select a month.");
      } else {
        setHasError(false);
        setErrorMessage("");
      }

      return newData;
    });
  };

  const saveData = () => {
    // Check if any fields are empty
    const hasEmptyFields = payrollData.some(
      (data) =>
        data.employeeId.trim() === "" ||
        data.employeeName.trim() === "" ||
        data.month.trim() === "" ||
        data.employeeSalary.trim() === ""
    );

    if (hasEmptyFields) {
      setHasError(true);
      setErrorMessage("Please fill in all fields.");
    } else if (!payrollData[0].month) {
      setHasError(true);
      setErrorMessage("Please select a month.");
    } else {
      axios
        .post("/payroll", payrollData)
        .then((res) => {
          console.log(res.data);
          setHasError(false);
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
      <br />{" "}
      <div className="App">
        <div className="greeting">
          <h2>Payroll Statement</h2>
        </div>
      </div>
      <div style={{ marginTop: "10px" }}>
        <Container className="exp-container mt--7">
          {/* Date picker */}
          <select
            value={payrollData[0].month}
            onChange={(e) => updatePayrollData(0, "month", e.target.value)}
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
          <Table className="align-items-center" responsive>
            <thead className="thead-light">
              <tr>
                <th scope="col">Employee ID</th>
                <th scope="col">Employee Name</th>
                <th scope="col">Salary</th>
              </tr>
            </thead>
            <tbody>
              {payrollData.map((data, index) => (
                <tr key={data.id}>
                  <td>
                    <Input
                      type="text"
                      value={data.employeeId}
                      onChange={(e) =>
                        updatePayrollData(index, "employeeId", e.target.value)
                      }
                    />
                  </td>
                  <td>
                    <Input
                      type="text"
                      value={data.employeeName}
                      onChange={(e) =>
                        updatePayrollData(index, "employeeName", e.target.value)
                      }
                    />
                  </td>
                  <td>
                    <Input
                      type="text"
                      value={data.employeeSalary}
                      onChange={(e) =>
                        updatePayrollData(
                          index,
                          "employeeSalary",
                          e.target.value
                        )
                      }
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          {/* Add and Delete buttons */}
          <div className="payroll-buttons">
            <Button
              color="success"
              size="sm"
              className="mr-2"
              onClick={addNewRow}
            >
              +
            </Button>
            {payrollData.length > 1 && (
              <Button color="danger" size="sm" onClick={handleDeleteRow}>
                -
              </Button>
            )}
          </div>

          {/* Save button */}
          <Row className="justify-content-center mt-3">
            <Button color="primary" onClick={saveData}>
              Save
            </Button>
            <Row className="justify-content-center mt-3">
              <Button color="primary" onClick={() => navigate(-1)}>
                <FaArrowLeft />
                Back
              </Button>
            </Row>
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
export default CreatePayroll;
