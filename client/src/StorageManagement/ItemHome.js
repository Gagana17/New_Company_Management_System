import React, { Component } from "react";
import Header from "../components/SystemHeader";
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />

        <div className="home-container">
          <h1 className="home-title">Inventory Management</h1>
          <p className="home-description">
            Welcome to the Inventory Management Home Page!
          </p>
          <div className="home-card-container">
            <div className="home-card">
              <div className="home-card-header">View Items</div>
              <div className="home-card-body">
                <p className="home-card-text">
                  Click the button below to view the list of inventory items.
                </p>
                <a
                  href="/view-items"
                  className="home-button home-button-primary"
                >
                  View Stock
                </a>
              </div>
            </div>
            <div className="home-card">
              <div className="home-card-header">Generate Report</div>
              <div className="home-card-body">
                <p className="home-card-text">
                  Click the button below to generate a report of inventory
                  items.
                </p>
                <a
                  href="/generate-report"
                  className="home-button home-button-primary"
                >
                  Generate Report
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
