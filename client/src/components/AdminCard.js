import Card from "react-bootstrap/Card";

function AdminCard() {
  return (
    <div style={{ margin: "auto auto", width: "60%", marginBottom: "12%" }}>
      <Card style={{ width: "100%", marginTop: "2rem" }}>
        <Card.Body>
          <Card.Text>
            <h4 style={{ textAlign: "center" }}>
              "We responcsible for the great tast with greate spices"
            </h4>
            <div style={{ textAlign: "center" }}>
              <img src="https://images.unsplash.com/photo-1509358271058-acd22cc93898?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=70"></img>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default AdminCard;
