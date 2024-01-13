import React from "react";
import "./cssForComponents/headerStyles.css";
import { CgProfile } from "react-icons/cg";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "../images/logo.png"; // client/src/Components/Images/logo.png

function SystemHeader() {
  return (
    <div>
      <Card id="headerCard" className="p-4 pt-2">
        <Row>
          <Col className="" xl={2}>
            <img
              src={logo}
              style={{ height: "80px", width: "80px", borderRadius: "20px" }}
              alt=""
            ></img>
          </Col>
          <Col xl={8} className="text-center">
            <h1 style={{ marginTop: "3%" }}>Lanka Flavour</h1>
          </Col>
          <Col xl={2}>
            {/* <CgProfile
              id="ProfIcon"
              size={"50px"}
              // style={{
              //   marginTop: "auto",
              //   marginBottom: "auto",
              //   marginLeft: "auto",
              // }}
            /> */}
          </Col>
        </Row>
      </Card>
    </div>
  );
}

export default SystemHeader;
