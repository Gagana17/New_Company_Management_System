import "./Finance.css";
import backgroundImg from "./Images/i5.jpg";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom"; //use to create dynamic application
import * as React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Header from "../components/SystemHeader";
import { FaArrowLeft } from "react-icons/fa";
function Finance() {
  const navigate = useNavigate();

  function handlePayrollReportsClick() {
    navigate("/finance/CreatePayroll");
  }
  function handleExpensesReportsClick() {
    navigate("/finance/CreateExpenses");
  }
  function handleSalesReportsClick() {
    navigate("/finance/CreateSales");
  }
  function handleIncomeReportsClick() {
    navigate("/finance/Createincome");
  }
  function handleCreatePayrollReportsClick() {
    navigate("/finance/ReadPayroll");
  }
  function handleCreateExpensesReportsClick() {
    navigate("/finance/ReadExpenses");
  }
  function handleCreateIncomeReportsClick() {
    navigate("/finance/Readincome");
  }
  function handleCreateSalesReportsClick() {
    navigate("/finance/ReadSales");
  }

  return (
    <div
      className="fin-mainDiv"
      style={{
        position: "relative",
        justifyContent: "space-between",
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <div>
        <div
          className="fin-background"
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            backgroundImage: `url(${backgroundImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.6,
            zIndex: "-1",
          }}
        ></div>
        <Header />
        <br />
        <div className="fin-App" style={{ position: "relative" }}>
          {" "}
          <Button
            variant="outline-primary"
            style={{ color: "blue", marginRight: "1px", fontWeight: "bold" }}
            onClick={() => navigate(-1)}
          >
            <FaArrowLeft style={{ marginRight: "5px" }} />
            Back
          </Button>
          <div className="fin-greeting">
            <h2
              style={{
                fontSize: "32px",
                fontWeight: "bold",
                color: "#554CD8",
                fontFamily: "Arial, sans-serif",
                textTransform: "uppercase",
                borderBottom: "2px solid #336699",
                paddingBottom: "10px",
                marginBottom: "20px",
              }}
            >
              Financial Management Section
            </h2>
          </div>
        </div>
        <Card id="fin-informationCard">
          <Card.Body>
            <Row>
              <div id="fin-insideInfo">
                <Card>
                  <Card.Body>
                    <h5
                      className="fin-profileContent"
                      style={{
                        fontWeight: "bold",
                        marginBottom: "10px",
                        color: "#336699",
                        fontSize: "18px",
                        textTransform: "uppercase",
                        borderBottom: "1px solid #336699",
                        paddingBottom: "5px",
                      }}
                    >
                      Create Records
                    </h5>

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Button
                        variant="primary"
                        style={{ width: "48%", marginBottom: "10px" }}
                        onClick={handlePayrollReportsClick}
                      >
                        Payroll Reports
                      </Button>
                      <Button
                        variant="primary"
                        style={{ width: "48%", marginBottom: "10px" }}
                        onClick={handleExpensesReportsClick}
                      >
                        Expenses Reports
                      </Button>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Button
                        variant="primary"
                        style={{ width: "48%", marginBottom: "10px" }}
                        onClick={handleSalesReportsClick}
                      >
                        Sales Reports
                      </Button>
                      <Button
                        variant="primary"
                        style={{ width: "48%", marginBottom: "10px" }}
                        onClick={handleIncomeReportsClick}
                      >
                        Income Reports
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </div>
              <div id="fin-insideInfo">
                <Card>
                  <Card.Body>
                    <h5
                      className="fin-profileContent"
                      style={{
                        fontWeight: "bold",
                        marginBottom: "10px",
                        color: "#336699",
                        fontSize: "18px",
                        textTransform: "uppercase",
                        borderBottom: "1px solid #336699",
                        paddingBottom: "5px",
                      }}
                    >
                      Read Records
                    </h5>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Button
                        variant="primary"
                        style={{ width: "48%", marginBottom: "10px" }}
                        onClick={handleCreatePayrollReportsClick}
                      >
                        Payroll Reports
                      </Button>
                      <Button
                        variant="primary"
                        style={{ width: "48%", marginBottom: "10px" }}
                        onClick={handleCreateExpensesReportsClick}
                      >
                        Expenses Reports
                      </Button>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Button
                        variant="primary"
                        style={{ width: "48%", marginBottom: "10px" }}
                        onClick={handleCreateIncomeReportsClick}
                      >
                        Income Reports
                      </Button>
                      <Button
                        variant="primary"
                        style={{ width: "48%", marginBottom: "10px" }}
                        onClick={handleCreateSalesReportsClick}
                      >
                        Sales Reports
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </Row>
          </Card.Body>
        </Card>{" "}
      </div>
    </div>
  );
}

export default Finance;
