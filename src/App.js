import React, { useState, useEffect } from "react";
import "./app.css"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
  useParams
} from "react-router-dom";

import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/Topbar/Topbar";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import SalaryList from "./pages/salaryList/SalaryList";
import NewProduct from "./pages/newProduct/NewProduct";
import Salary from "./pages/salary/Salary";
import Login from "./pages/login/Login";  
// import Main from "./Main";



function App(){
  return(
    <Router>
      {/* <Topbar/> */}
      {/* <div className="container"> */}
        {/* <Sidebar/> */}
        <Routes>
          <Route path="/" element={<Login/>}></Route>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/users" element={<UserList/>}></Route>
          <Route path="/users/:id" element={<User />} ></Route>
          <Route path="/newUser" element={<NewUser />}></Route>
          <Route path="/salarys" element={<SalaryList/>}></Route>
          <Route path="/salarys/:id" element={<Salary/>}></Route>
          <Route path="/product" element={<ProductList />}></Route>
          <Route path="/product/:id" element={<Product />} ></Route>
          <Route path="/newProduct" element={<NewProduct />}></Route>
        </Routes>
      {/* </div> */}
    </Router>
  )
}

export default App;
