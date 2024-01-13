import { useState } from "react";
import "./CreatePayroll.css";
import { useNavigate } from "react-router-dom";
import Header from "../components/SystemHeader";
import axios from "axios";
import { FaArrowLeft } from "react-icons/fa";
import { Button } from "reactstrap";
function ReadExpenses() {
  const navigate = useNavigate();

  // Initial expenses data
  const [expensesData, setExpensesData] = useState([]);
  const [editingData, setEditingData] = useState({});
  const generateData = async () => {
    try {
      const response = await axios.get("/api/Rexpenses");
      setExpensesData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      // Delete the data from the database
      const response = await axios.delete(`/api/Rexpenses/delete/${id}`);
      console.log(response.data); // check the response data from the server

      // Filter out the deleted data from the expensesData state
      const updatedExpensesData = expensesData.filter(
        (data) => data._id !== id
      );
      setExpensesData(updatedExpensesData);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (data) => {
    setEditingData(data);
  };

  const handleUpdate = async () => {
    try {
      const { _id, expenseCategory, expenseAmount, expensePercentage, month } =
        editingData;

      const response = await axios.patch(`/api/Rexpenses/update/${_id}`, {
        expenseCategory,
        expenseAmount,
        expensePercentage,
        month,
      });

      console.log(response.data); // check the response data from the server

      // Update the expensesData state with the edited data
      const updatedExpensesData = expensesData.map((data) =>
        data._id === _id
          ? {
              ...data,
              expenseCategory,
              expenseAmount,
              expensePercentage,
              month,
            }
          : data
      );

      setExpensesData(updatedExpensesData);
      setEditingData({}); // Clear the editingData state to exit editing mode
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
          <h2>Expense Statement</h2>
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
          <table style={{ width: "80%", margin: "0 auto" }}>
            <thead>
              <tr>
                <th>Expense Category</th>
                <th>Expense Amount</th>
                <th>Expense Percentage</th>
                <th>Month</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {expensesData.map((data) => (
                <tr key={data._id}>
                  <td>
                    {editingData._id === data._id ? (
                      <input
                        type="text"
                        value={editingData.expenseCategory}
                        onChange={(e) =>
                          setEditingData({
                            ...editingData,
                            expenseCategory: e.target.value,
                          })
                        }
                      />
                    ) : (
                      data.expenseCategory
                    )}
                  </td>
                  <td>
                    {editingData._id === data._id ? (
                      <input
                        type="number"
                        value={editingData.expenseAmount}
                        onChange={(e) =>
                          setEditingData({
                            ...editingData,
                            expenseAmount: e.target.value,
                          })
                        }
                      />
                    ) : (
                      data.expenseAmount
                    )}
                  </td>
                  <td>
                    {editingData._id === data._id ? (
                      <input
                        type="number"
                        value={editingData.expensePercentage}
                        onChange={(e) =>
                          setEditingData({
                            ...editingData,
                            expensePercentage: e.target.value,
                          })
                        }
                      />
                    ) : (
                      data.expensePercentage
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

export default ReadExpenses;
