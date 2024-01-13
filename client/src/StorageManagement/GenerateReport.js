import React, { Component } from "react";
import Header from "../components/SystemHeader";
import "./GenerateReport.css";

export default class GenerateReports extends Component {
  render() {
    return (
      <div>
        <Header />

        <div className="generate-reports-container">
          <h1 className="generate-reports-title">Generate Reports</h1>
          <p className="generate-reports-description">
            Select the type of report you want to generate:
          </p>
          <div className="generate-reports-options">
            <div className="generate-reports-option">
              <h2 className="generate-reports-option-title">
                Inventory Overview
              </h2>
              <p className="generate-reports-option-description">
                Generate an overview report of the current inventory status.
              </p>
              <a
                href="/generate-inventory-overview"
                className="generate-reports-option-button"
              >
                Generate
              </a>
            </div>

            <div className="generate-reports-option">
              <h2 className="generate-reports-option-title">Low Stock Items</h2>
              <p className="generate-reports-option-description">
                Generate a report of items with low stock levels.
              </p>
              <a
                href="/generate-low-stock-items"
                className="generate-reports-option-button"
              >
                Generate
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
