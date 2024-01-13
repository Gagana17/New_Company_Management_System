import React, { Component } from "react";
import axios from "axios";
import "./InventoryOverview.css";
import Header from "../components/SystemHeader";
import "./Home.css";

export default class InventoryOverview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inventoryData: [],
    };
  }

  componentDidMount() {
    this.fetchInventoryData();
  }

  fetchInventoryData() {
    axios.get("/itemsList").then((res) => {
      if (res.data.success) {
        this.setState({
          inventoryData: res.data.existingPosts,
        });
      }
    });
  }

  handleDownload = () => {
    // Generate a data URL for the entire page content
    const html = document.documentElement.outerHTML;
    const dataUrl = "data:text/html;charset=UTF-8," + encodeURIComponent(html);

    // Create a temporary anchor element and trigger a download
    const link = document.createElement("a");
    link.href = dataUrl;
    link.download = "inventory_overview.html";
    link.click();
  };

  render() {
    const { inventoryData } = this.state;

    return (
      <div>
        <Header />
        <div className="inventory-overview-container">
          <h1 className="inventory-overview-title">
            Inventory Overview Report
          </h1>

          <div className="inventory-table-container">
            <table className="inventory-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Item No</th>
                  <th>Item Name</th>
                  <th>Description</th>
                  <th>Quantity</th>
                </tr>
              </thead>
              <tbody>
                {inventoryData.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.ItemNo}</td>
                    <td>{item.ItemName}</td>
                    <td>{item.Description}</td>
                    <td>{item.Quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="download-button-container">
            <button className="download-button" onClick={this.handleDownload}>
              Download Report
            </button>
          </div>
        </div>
      </div>
    );
  }
}
