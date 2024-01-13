import { useState, useEffect } from "react";
import "./ReadExpenses";
import { useNavigate } from "react-router-dom";
import Header from "../components/SystemHeader";
import axios from "axios";
import { FaArrowLeft } from "react-icons/fa";
import { Button } from "reactstrap";
function ReadIncome() {
  const navigate = useNavigate();

  // Initial income data
  const [incomeData, setIncomeData] = useState([]);
  const [editingData, setEditingData] = useState({});

  const generateData = async () => {
    try {
      const response = await axios.get("/api/Rincome");
      setIncomeData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (_id) => {
    try {
      // Delete the data from the database
      await axios.delete(`/api/Rincome/delete/${_id}`);
      console.log("Deleted successfully");

      // Filter out the deleted data from the incomeData state
      const updatedIncomeData = incomeData.filter((data) => data._id !== _id);
      setIncomeData(updatedIncomeData);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (data) => {
    setEditingData(data);
  };

  const handleUpdate = async () => {
    try {
      const { _id, category, amount, percentage } = editingData;

      const response = await axios.patch(`/api/Rincome/update/${_id}`, {
        category,
        amount,
        percentage,
      });

      console.log(response.data);

      // Update the incomeData state with the edited data
      const updatedIncomeData = incomeData.map((data) =>
        data._id === _id ? { ...data, category, amount, percentage } : data
      );

      setIncomeData(updatedIncomeData);
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
          <h2>Income Statement</h2>
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
                <th>Income Category</th>
                <th>Income Amount</th>
                <th>Percentage</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {incomeData.map((data) => (
                <tr key={data._id}>
                  <td>
                    {Object.keys(editingData).length > 0 &&
                    editingData._id === data._id ? (
                      <input
                        type="text"
                        value={editingData.category}
                        onChange={(e) =>
                          setEditingData({
                            ...editingData,
                            category: e.target.value,
                          })
                        }
                      />
                    ) : (
                      data.category
                    )}
                  </td>
                  <td>
                    {Object.keys(editingData).length > 0 &&
                    editingData._id === data._id ? (
                      <input
                        type="number"
                        value={editingData.amount}
                        onChange={(e) =>
                          setEditingData({
                            ...editingData,
                            amount: e.target.value,
                          })
                        }
                      />
                    ) : (
                      data.amount
                    )}
                  </td>
                  <td>
                    {Object.keys(editingData).length > 0 &&
                    editingData._id === data._id ? (
                      <input
                        type="number"
                        value={editingData.percentage}
                        onChange={(e) =>
                          setEditingData({
                            ...editingData,
                            percentage: e.target.value,
                          })
                        }
                      />
                    ) : (
                      data.percentage
                    )}
                  </td>
                  <td>
                    {Object.keys(editingData).length > 0 &&
                    editingData._id === data._id ? (
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

export default ReadIncome;
