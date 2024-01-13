import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/SystemHeader";
import axios from "axios";
import { FaArrowLeft } from "react-icons/fa";
import { Button } from "reactstrap";

function ReadSales() {
  const navigate = useNavigate();

  // Initial sales data
  const [salesData, setSalesData] = useState([]);
  const [editingData, setEditingData] = useState({});

  const generateData = async () => {
    try {
      const response = await axios.get("/api/sales");
      setSalesData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (_id) => {
    try {
      // Delete the data from the database
      await axios.delete(`/api/sales/delete/${_id}`);
      console.log("Deleted successfully");

      // Filter out the deleted data from the salesData state
      const updatedSalesData = salesData.filter((data) => data._id !== _id);
      setSalesData(updatedSalesData);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (data) => {
    setEditingData(data);
  };

  const handleUpdate = async () => {
    try {
      const { _id, product, quantity, amount } = editingData;

      const response = await axios.patch(`/api/sales/update/${_id}`, {
        product,
        quantity,
        amount,
      });

      console.log(response.data);

      // Update the salesData state with the edited data
      const updatedSalesData = salesData.map((data) =>
        data._id === _id ? { ...data, product, quantity, amount } : data
      );

      setSalesData(updatedSalesData);
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
          <h2>Sales Report</h2>
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
                <th>Product</th>
                <th>Quantity</th>
                <th>Amount($)</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {salesData.map((data) => (
                <tr key={data._id}>
                  <td>
                    {Object.keys(editingData).length > 0 &&
                    editingData._id === data._id ? (
                      <input
                        type="text"
                        value={editingData.product}
                        onChange={(e) =>
                          setEditingData({
                            ...editingData,
                            product: e.target.value,
                          })
                        }
                      />
                    ) : (
                      data.product
                    )}
                  </td>
                  <td>
                    {Object.keys(editingData).length > 0 &&
                    editingData._id === data._id ? (
                      <input
                        type="number"
                        value={editingData.quantity}
                        onChange={(e) =>
                          setEditingData({
                            ...editingData,
                            quantity: e.target.value,
                          })
                        }
                      />
                    ) : (
                      data.quantity
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
                      <div>
                        <button onClick={handleUpdate}>Update</button>
                        <button onClick={handleCancel}>Cancel</button>
                      </div>
                    ) : (
                      <div>
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
                      </div>
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

export default ReadSales;
