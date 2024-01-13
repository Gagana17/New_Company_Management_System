// import * as React from "react";
// import { useEffect, useState } from "react"; //for get all the data from database and print  //useRef
// import axios from "axios";
// import Button from "react-bootstrap/Button";
// import { useNavigate } from "react-router-dom";
// import Modal from "react-bootstrap/Modal";
// import { Form, Row } from "react-bootstrap";
// import "../SupplierManager/SupplierListStyle.css";
// import "../components/cssForComponents/headerStyles.css";
// import Header from "../components/SystemHeader";

// function DistributereporList() {
//   const navigate = useNavigate();
//   const [DistributeList, setPosts] = useState([]);

//   const [show, setShow] = useState(false);
//   const [showDelete, setShowDelete] = useState(false);

//   useEffect(() => {
//     axios
//       .get("/DistributeList")
//       .then((res) => {
//         console.log(res);
//         setPosts(res.data); //get respose from data under data category
//       })
//       .catch((err) => console.log(err));
//   }, []); //for avoide continious rendering

//   const [searchTerm, setSearchTerm] = useState("");

//   return (
//     <div>
//       <Header />

//       <div style={{ width: "80%", margin: "auto auto" }}>
//         <h2 style={{ textAlign: "center", marginTop: "1rem" }}>
//           Distributer List Page
//         </h2>
//         <div className="row btnsAndSearch">
//           <div className="col-xl-3">
//             <Button
//               id="generateReportBtn"
//               className="navigationbtns"
//               onClick={window.print}
//             >
//               Generate Report
//             </Button>
//           </div>
//           <div className="col-xl-6">
//             <input
//               className="Search"
//               type="text"
//               placeholder="Search..."
//               onChange={(event) => {
//                 setSearchTerm(event.target.value);
//               }}
//             />
//           </div>

//           <div className="col-xl-3">
//             <Button
//               id="backBtn"
//               style={{ width: "146px", marginBottom: "1rem" }}
//               variant="outline-dark"
//               onClick={() => navigate(-1)}
//             >
//               BACK
//             </Button>
//           </div>
//         </div>

//         {DistributeList ? ( // if posts avaliable then do this
//           <>
//             {DistributeList.filter((Dis) => {
//               if (searchTerm === "") {
//                 return Dis;
//               } else if (
//                 Dis.Distributer_id.toLowerCase().includes(
//                   searchTerm.toLowerCase()
//                 ) ||
//                 Dis.Registered_No.toLowerCase().includes(
//                   searchTerm.toLowerCase()
//                 ) ||
//                 Dis.dAddress.includes(searchTerm.toLowerCase())
//               ) {
//                 return Dis;
//               }
//             }).map((Dis) => {
//               return (
//                 <div
//                   key={Dis._id} //change according to database id
//                   style={{
//                     border: "solid lightgray 1px",
//                     borderRadius: "8px",
//                     marginBottom: "1rem",
//                     padding: "1rem",
//                     className: Row,
//                   }}
//                 >
//                   <h5 className="information">
//                     {" "}
//                     Distributer ID : {Dis.Distributer_id}
//                   </h5>
//                   <h6 className="information">
//                     {" "}
//                     Distributer Name: {Dis.Distributer_name}
//                   </h6>
//                   <h6 className="information">
//                     Distributer Registered No : {Dis.Registered_No}
//                   </h6>
//                   <h6 className="information">
//                     {" "}
//                     Distribution Area : {Dis.Area}
//                   </h6>
//                   <h6 className="information">
//                     Contact Number : {Dis.Contact_No}
//                   </h6>
//                   <h6 className="information">Address : {Dis.dAddress}</h6>
//                   <div
//                     className="btnDiv"
//                     style={{
//                       display: "flex",
//                       flexDirection: "column",
//                       //justifyContent: "space-between",
//                     }}
//                   ></div>{" "}
//                   {/*this post._id is the mongoDb post id*/}
//                 </div>
//               );
//             })}
//           </>
//         ) : (
//           // if posts not avaliable don't do anything
//           ""
//         )}
//       </div>
//     </div>
//   );
// }

// // export default DistributereporList;
// import * as React from "react";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import { Table, Button, Modal, Form, Row } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
// import "../SupplierManager/SupplierListStyle.css";
// import "../components/cssForComponents/headerStyles.css";
// import Header from "../components/SystemHeader";

// function DistributereporList() {
//   const navigate = useNavigate();
//   const [distributeList, setDistributeList] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");

//   useEffect(() => {
//     axios
//       .get("/DistributeList")
//       .then((res) => {
//         console.log(res);
//         setDistributeList(res.data);
//       })
//       .catch((err) => console.log(err));
//   }, []);

//   return (
//     <div>
//       <Header />

//       <div style={{ width: "80%", margin: "auto auto" }}>
//         <h2 style={{ textAlign: "center", marginTop: "1rem" }}>
//           Distributer List Page
//         </h2>
//         <div className="row btnsAndSearch">
//           <div className="col-xl-3">
//             <Button
//               id="generateReportBtn"
//               className="navigationbtns"
//               onClick={window.print}
//             >
//               Generate Report
//             </Button>
//           </div>
//           <div className="col-xl-6">
//             <input
//               className="Search"
//               type="text"
//               placeholder="Search..."
//               onChange={(event) => {
//                 setSearchTerm(event.target.value);
//               }}
//             />
//           </div>

//           <div className="col-xl-3">
//             <Button
//               id="backBtn"
//               style={{ width: "146px", marginBottom: "1rem" }}
//               variant="outline-dark"
//               onClick={() => navigate(-1)}
//             >
//               BACK
//             </Button>
//           </div>
//         </div>

//         {distributeList.length > 0 && (
//           <Table striped bordered hover>
//             <thead>
//               <tr>
//                 <th>Distributer ID</th>
//                 <th>Distributer Name</th>
//                 <th>Registered No</th>
//                 <th>Distribution Area</th>
//                 <th>Contact Number</th>
//                 <th>Address</th>
//               </tr>
//             </thead>
//             <tbody>
//               {distributeList
//                 .filter((dis) =>
//                   [dis.Distributer_id, dis.Registered_No, dis.dAddress].some(
//                     (value) =>
//                       value.toLowerCase().includes(searchTerm.toLowerCase())
//                   )
//                 )
//                 .map((dis) => (
//                   <tr key={dis._id}>
//                     <td>{dis.Distributer_id}</td>
//                     <td>{dis.Distributer_name}</td>
//                     <td>{dis.Registered_No}</td>
//                     <td>{dis.Area}</td>
//                     <td>{dis.Contact_No}</td>
//                     <td>{dis.dAddress}</td>
//                   </tr>
//                 ))}
//             </tbody>
//           </Table>
//         )}
//       </div>
//     </div>
//   );
// }

// export default DistributereporList;

import * as React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Table, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../SupplierManager/SupplierListStyle.css";
import "../components/cssForComponents/headerStyles.css";
import Header from "../components/SystemHeader";

function DistributereporList() {
  const navigate = useNavigate();
  const [distributeList, setDistributeList] = useState([]);

  useEffect(() => {
    axios
      .get("/DistributeList")
      .then((res) => {
        console.log(res);
        setDistributeList(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Header />

      <div style={{ width: "80%", margin: "auto auto" }}>
        <h2 style={{ textAlign: "center", marginTop: "1rem" }}>
          Distributer List Page
        </h2>

        <Button
          id="generateReportBtn"
          className="navigationbtns"
          onClick={window.print}
          style={{ marginBottom: "1rem" }}
        >
          Generate Report
        </Button>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Distributer ID</th>
              <th>Distributer Name</th>
              <th>Registered No</th>
              <th>Distribution Area</th>
              <th>Contact Number</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {distributeList.map((dis) => (
              <tr key={dis._id}>
                <td>{dis.Distributer_id}</td>
                <td>{dis.Distributer_name}</td>
                <td>{dis.Registered_No}</td>
                <td>{dis.Area}</td>
                <td>{dis.Contact_No}</td>
                <td>{dis.dAddress}</td>
              </tr>
            ))}
          </tbody>
        </Table>

        <Button
          id="backBtn"
          style={{ width: "146px", marginBottom: "1rem" }}
          variant="outline-dark"
          onClick={() => navigate(-1)}
        >
          BACK
        </Button>
      </div>
    </div>
  );
}

export default DistributereporList;
