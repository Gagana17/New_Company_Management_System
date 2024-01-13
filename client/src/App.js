//import { Button } from "react-bootstrap";
//import { Link } from "react-router-dom";
//import { useNavigate } from "react-router-dom";
//import "./Navbar.css";
import "./App.css";
import React from "react";
import Header from "./components/Header";
import Feature from "./components/Feature";
import About from "./components/About";
import About2 from "./components/About2";
import About3 from "./components/About3";
import About4 from "./components/About4";
import About5 from "./components/About5";

import Contact from "./components/Contact";
import aboutimage from "./images/feature_1.png";
import aboutimage2 from "./images/feature_2.png";
import aboutimage3 from "./images/feature_3.png";
import aboutimage4 from "./images/feature_4.png";
import aboutimage5 from "./images/feature_5.png";
// import aboutimage6 from "./images/feature_6.png";
function App() {
  //const navigate = useNavigate();
  return (
    <div>
      <Header />
      {/*Call the Header component */}
      <Feature />
      <About image={aboutimage} tittle="abc" button="Make order" />

      <About2 image={aboutimage2} tittle="abc" button="Make order" />

      <About3 image={aboutimage3} tittle="abc" button="Make order" />
      <About4 image={aboutimage4} tittle="abc" button="Make order" />
      <About5 image={aboutimage5} tittle="abc" button="Make order" />

      <Contact />
    </div>
  );
}
/*<nav className="navbar navbar-expand-lg navbar-dark bg-primary conatainer">
      <div className="title">
        Spicy Food Lanka
        <button
          className="navbar-toggler "
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <div className="barss">
              <li className="nav-itema">
                <Link className="nav-link active" to="/">
                  Home{" "}
                </Link>
              </li>
              <li className="nav-itema">
                <Link className="nav-link" to="about">
                  About{" "}
                </Link>
              </li>
              <li className="nav-itema">
                <Link className="nav-link" to="contact">
                  Contact{" "}
                </Link>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </nav>*/

/*<div style={{width:"90%", margin:"auto auto", textAlign:"center"}}>
      <h1> Welcome Customer Management Admin Panel</h1>


      <Button
            variant="outline-dark"
            style={{
              width: "100%",
              marginBottom: "2rem",
              border: "none",
              background: "transparent",
              padding: "6px 16px",
              fontSize: "1.1rem",
              color: "aliceblue",
              background: "rgb(0, 212, 212)",
              borderRadius: "5px",
              marginRight: "20px",
            }}
            onClick={() => navigate("login")}
          >
            SingIn
          </Button>

          <Button
            variant="outline-dark"
            style={{
              width: "100%",
              marginBottom: "2rem",
              border: "none",
              background: "transparent",
              padding: "6px 16px",
              fontSize: "1.1rem",
              color: "aliceblue",
              background: "rgb(0, 212, 212)",
              borderRadius: "5px",
              marginRight: "20px",
            }}
            onClick={() => navigate("create")}
          >
            SingUp
          </Button>

          <Button
            variant="outline-dark"
            style={{
              width: "100%",
              marginBottom: "2rem",
              border: "none",
              background: "transparent",
              padding: "6px 16px",
              fontSize: "1.1rem",
              color: "aliceblue",
              background: "rgb(0, 212, 212)",
              borderRadius: "5px",
              marginRight: "20px",
            }}
            onClick={() => navigate("admin")}
          >
            Admin
          </Button>

          <Button
            variant="outline-dark"
            style={{ width: "100%", marginBottom: "2rem" }}
            onClick={() => navigate("create/posts")}
          >
            View Customer Table
          </Button>

       

       <Button variant="outline-dark"
       style={{width:"100%"}}
       onClick={() => navigate("")}>View Order Table</Button>
       
     
       
    </div>
  );
}*/

export default App;
