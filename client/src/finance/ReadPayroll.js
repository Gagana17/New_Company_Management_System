import { useState } from "react";
import "./CreatePayroll.css";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; //use to create dynamic application
import { Button } from "reactstrap";
import Header from "../components/SystemHeader";
import axios from "axios";

function ReadPayroll() {
  // Initial payroll data
  const [payrollData, setPayrollData] = useState([]);
  const [editingData, setEditingData] = useState({});

  const [filterTerm, setFilterTerm] = useState("");

  const handleFilter = (e) => {
    setFilterTerm(e.target.value);
  };

  const filteredData = payrollData.filter((data) =>
    data.employeeId.includes(filterTerm)
  );

  const navigate = useNavigate();
  const generateData = async () => {
    try {
      const response = await axios.get("/api/Rpayroll");
      setPayrollData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      // Delete the data from the database
      const response = await axios.delete(`/api/Rpayroll/delete/${id}`);
      console.log(response.data); // check the response data from the server

      // Filter out the deleted data from the payrollData state
      const updatedPayrollData = payrollData.filter((data) => data._id !== id);
      setPayrollData(updatedPayrollData);
    } catch (error) {
      console.log(error);
    }
  };
  const handleEdit = (data) => {
    setEditingData({
      ...data,
    });
  };

  const handleUpdate = async () => {
    try {
      const { _id, employeeId, employeeName, employeeSalary, month } =
        editingData;

      const response = await axios.patch(`/api/Rpayroll/update/${_id}`, {
        employeeId,
        employeeName,
        employeeSalary,
        month,
      });

      console.log(response.data);

      // Update the payrollData state with the edited data
      const updatedPayrollData = payrollData.map((data) =>
        data._id === _id
          ? { ...data, employeeId, employeeName, employeeSalary, month }
          : data
      );

      setPayrollData(updatedPayrollData);
      setEditingData({});
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancel = () => {
    setEditingData({});
  };
  const handlePrint = () => {
    window.print();
  };
  return (
    <div className="mainDiv">
      <div className="background" />
      <Header />
      <br />
      <div className="App">
        <div className="greeting">
          <h2
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              color: "#333",
              fontFamily: "Arial, sans-serif",
            }}
          >
            Payroll Statement
          </h2>
        </div>
      </div>
      <div style={{ marginTop: "100px", textAlign: "center" }}>
        <div>
          <button
            onClick={generateData}
            style={{
              padding: "8px 16px",
              fontSize: "14px",
              backgroundColor: "#4caf50",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
              transition: "background-color 0.3s",
            }}
          >
            Generate
          </button>
        </div>
        <br />
        <br />

        <div>
          <input
            type="text"
            placeholder="Search by Employee ID"
            value={filterTerm}
            onChange={handleFilter}
            style={{
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              marginRight: "10px",
              fontSize: "16px",
              outline: "none",
              boxShadow: "none",
            }}
          />
          <table style={{ width: "80%", margin: "0 auto" }}>
            <thead>
              <tr>
                <th>Employee ID</th>
                <th>Employee Name</th>
                <th>Employee Salary</th>
                <th>Month</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((data) => (
                <tr key={data._id}>
                  <td>
                    {editingData._id === data._id ? (
                      <input
                        type="text"
                        value={editingData.employeeId}
                        onChange={(e) =>
                          setEditingData({
                            ...editingData,
                            employeeId: e.target.value,
                          })
                        }
                      />
                    ) : (
                      data.employeeId
                    )}
                  </td>
                  <td>
                    {editingData._id === data._id ? (
                      <input
                        type="text"
                        value={editingData.employeeName}
                        onChange={(e) =>
                          setEditingData({
                            ...editingData,
                            employeeName: e.target.value,
                          })
                        }
                      />
                    ) : (
                      data.employeeName
                    )}
                  </td>
                  <td>
                    {editingData._id === data._id ? (
                      <input
                        type="text"
                        value={editingData.employeeSalary}
                        onChange={(e) =>
                          setEditingData({
                            ...editingData,
                            employeeSalary: e.target.value,
                          })
                        }
                      />
                    ) : (
                      data.employeeSalary
                    )}
                  </td>
                  <td>
                    {editingData._id === data._id ? (
                      <input
                        type="text"
                        value={editingData.month}
                        onChange={(e) =>
                          setEditingData({
                            ...editingData,
                            month: e.target.value,
                          })
                        }
                      />
                    ) : (
                      data.month
                    )}
                  </td>
                  <td>
                    {editingData._id === data._id ? (
                      <>
                        <button onClick={handleUpdate}>Save</button>
                        <button onClick={handleCancel}>Cancel</button>
                      </>
                    ) : (
                      <>
                        <button
                          onClick={() => handleEdit(data)}
                          style={{ backgroundColor: "#D4AF37", color: "#fff" }}
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(data._id)}
                          style={{ backgroundColor: "#990000", color: "#fff" }}
                        >
                          Delete
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>{" "}
          <div>
            <button onClick={handlePrint}>Print Record</button>
          </div>{" "}
          <br />
          <Button color="primary" onClick={() => navigate(-1)}>
            <FaArrowLeft />
            Back
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ReadPayroll;
