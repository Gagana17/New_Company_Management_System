/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import CreatePost from "./CreatePost";
import Posts from "./Posts";
import Log from "./Log";
import Admin from "./Admin";
import Manager from "./Manager";
import Order from "./Order";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SupplierManager from "./SupplierManager/SupplierManager";
import CreateSupplierPosts from "./SupplierManager/CreateSupplierPosts";
import SupplierList from "./SupplierManager/SupplierList";

import AdminManager from "./AdminManager/AdminManager";
import AddManagers from "./AdminManager/AddManagers";
import ManagerList from "./AdminManager/ManagerList";

import CustomerProfile from "./Customers/CustomerProfile";

import Finance from "./finance/Finance";
import CreatePayroll from "./finance/CreatePayroll";
import CreateExpenses from "./finance/CreateExpenses";
import Createincome from "./finance/Createincome";
import CreateSales from "./finance/CreateSales";
import ReadPayroll from "./finance/ReadPayroll";
import ReadExpenses from "./finance/ReadExpenses";
import ReadIncome from "./finance/ReadIncome";
import ReadSales from "./finance/ReadSales";
import CreateProduct from "./ProductManager/CreateProduct";
import ProductList from "./ProductManager/ProductList";
import UpdateProduct from "./ProductManager/UpdateProduct";
import Home from "./StorageManagement/Home";
import Createpost from "./StorageManagement/CreatePost";
import Editpost from "./StorageManagement/Editpost";
import PostDetails from "./StorageManagement/PostDetails";
import ItemHome from "./StorageManagement/ItemHome";
import EmployeeManage from "./EmployeeM/EmployeeManage";
import AddEmployee from "./EmployeeM/AddEmployee";
import Manage from "./EmployeeM/Manage";
import Dashboard from "./EmployeeM/Dashboard";

import AddVehicle from "./DistributeManager/AddVehicle";
import AddDistributer from "./DistributeManager/AddDistributer";
import VehicleList from "./DistributeManager/VehicleList";
import DistributDash from "./DistributeManager/DistributeManager";
import DistributeList from "./DistributeManager/DistributeList";
import OrederDetails from "./OrederDetails";

import GenerateReport from "./StorageManagement/GenerateReport";
import InventoryOverview from "./StorageManagement/InventoryOverview";
import LowStockItems from "./StorageManagement/LowStockItems";
import DistributereportList from "./DistributeManager/disreport";
import DisOrederDetails from "./DistributeManager/DisOrder";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/Man/create/posts" element={<Posts />} />
        <Route path="/login" element={<Log />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/orders" element={<Order />} />
        <Route path="/orders/orderdetail" element={<OrederDetails />} />
        <Route path="/Man" element={<Manager />} />
        <Route path="/CusromerProfile" element={<CustomerProfile />} />
        <Route path="/SupplierManager" element={<SupplierManager />} />
        <Route
          path="/SupplierManager/CreateSupplierPosts"
          element={<CreateSupplierPosts />}
        />
        <Route
          path="/SupplierManager/CreateSupplierPosts/SupplierList"
          element={<SupplierList />}
        />
        <Route path="/AdminManager" element={<AdminManager />} />
        <Route path="/AdminManager/AddManagers" element={<AddManagers />} />
        <Route
          path="/AdminManager/AddManagers/ManagerList"
          element={<ManagerList />}
        />
        <Route path="/DistributeDash" element={<DistributDash />} />
        <Route
          path="/DistributeManager/createdistributer"
          element={<AddDistributer />}
        />
        <Route
          path="/DistributeManager/createvehicle"
          element={<AddVehicle />}
        />
        <Route
          path="/DistributeManager/createdistributer/DistributeList"
          element={<DistributeList />}
        />
        <Route
          path="/DistributeManager/createvehicle/VehicleList"
          element={<VehicleList />}
        />
        <Route
          path="/DistributeManager/DistributeList/disreport"
          element={<DistributereportList />}
        />
        <Route
          path="/DistributeManager/DisOrder"
          element={<DisOrederDetails />}
        />
        <Route path="/finance" element={<Finance />} />
        <Route
          path="/finance/CreatePayroll"
          element={<CreatePayroll />}
        ></Route>
        <Route
          path="/finance/CreateExpenses"
          element={<CreateExpenses />}
        ></Route>
        <Route path="/finance/Createincome" element={<Createincome />}></Route>
        <Route path="/finance/CreateSales" element={<CreateSales />}></Route>
        <Route path="/finance/ReadPayroll" element={<ReadPayroll />}></Route>
        <Route path="/finance/ReadExpenses" element={<ReadExpenses />}></Route>
        <Route path="/finance/ReadIncome" element={<ReadIncome />}></Route>
        <Route path="/finance/ReadSales" element={<ReadSales />}></Route>
        <Route
          path="/AdminManager/AddManagers/ManagerList"
          element={<ManagerList />}
        />
        <Route
          path="/ProductManager/CreateProduct"
          element={<CreateProduct />}
        ></Route>
        <Route
          path="/ProductManager/ProductList"
          element={<ProductList />}
        ></Route>
        <Route
          path="/ProductManager/ProductList/CreateProduct"
          element={<CreateProduct />}
        ></Route>
        <Route
          path="/ProductManager/UpdateProduct/:id"
          element={<UpdateProduct />}
        ></Route>
        <Route
          path="/AdminManager/AddManagers/ManagerList"
          element={<ManagerList />}
        />
        //Storage routes
        <Route path="/view-items" element={<Home />} />
        <Route path="/add" element={<Createpost />} />
        <Route path="/edit/:id" element={<Editpost />} />
        <Route path="/post/:id" element={<PostDetails />} />s
        <Route path="/storage" element={<ItemHome />} />
        //Employee
        <Route path="/employeemanager" element={<EmployeeManage />} />
        <Route path="/employeemanager/addemployee" element={<AddEmployee />} />
        <Route
          path="/employeemanager/addemployee/Empmanage"
          element={<Manage />}
        />
        <Route path="/employeemanager/empdashboard" element={<Dashboard />} />
        <Route path="/employeemanager/manageemployee" element={<Manage />} />
        <Route path="/generate-report" element={<GenerateReport />} />
        <Route
          path="/generate-inventory-overview"
          element={<InventoryOverview />}
        />
        <Route path="generate-low-stock-items" element={<LowStockItems />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
