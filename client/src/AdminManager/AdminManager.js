import "./AdminManager.css";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom"; //use to create dynamic application
import * as React from "react";
import Header from "../components/SystemHeader";
import { MDBFooter, MDBContainer } from "mdb-react-ui-kit";
import AdminCard from "../components/AdminCard";
// import axios from "axios";

function AdminManager() {
  const navigate = useNavigate();

  return (
    <div
      className="mainDiv"
      style={{
        position: "relative",
        justifyContent: "space-between",
        display: "flex",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <div>
        <div //background image
          className="background"
          style={{
            position: "absolute",
            top: "0%",
            left: "0%",
            width: "100%",
            height: "100vh",
            backgroundImage: `url("https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=50")`,
            opacity: 0.2,
          }}
        ></div>

        <Header />

        <br />
        <div className="App" style={{ position: "relative" }}>
          <div className="greeting">
            <h2> Welcome to the admin pannel </h2>
          </div>

          <Button
            id="addsupplier"
            className="navigationbtns me-4"
            onClick={() => navigate("AddManagers")}
            // variant="outline-primary"
            variant="success"
          >
            Add Manager
          </Button>

          <Button
            id="supplierListBtn"
            className="navigationbtn"
            onClick={() => navigate("AddManagers/ManagerList")}
          >
            Manager List
          </Button>
        </div>
      </div>
      <div>
        <AdminCard />
      </div>
    </div>
  );
}

export default AdminManager;
