import React, { useEffect, useState } from 'react';
import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
  Group,
  ExitToAppOutlined
} from "@material-ui/icons";
import { Link, useNavigate } from "react-router-dom";



export default function Sidebar() {
  const history = useNavigate();
  const [logout, setLogout] = useState(false)

  useEffect(()=>{
    if(!localStorage.getItem('token'))
      history('/') 
  },[logout])

  const handleLogout = e =>{
    e.preventDefault();
    localStorage.removeItem('token');
    setLogout(true);
  }

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className='Link'>
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon" />
              Home
            </li>
            </Link>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <Link to="/users" className='Link'>
            <li className="sidebarListItem">
              <WorkOutline className="sidebarIcon" />
              Manage
            </li>
            </Link>
            
            <Link to="/salarys" className='Link'>
              <li className="sidebarListItem">
                <AttachMoney className="sidebarIcon" />            
                  Salary
              </li>
            </Link>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Product</h3>
          <ul className="sidebarList">
            <Link to="/product" className='Link'>
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                Products
              </li>
            </Link>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MailOutline className="sidebarIcon" />
              Mail
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Log out</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem" onClick={handleLogout}>
              <ExitToAppOutlined className="sidebarIcon" />
              {/* <button type='button' onClick={handleLogout}>
              Log out
              </button> */}
              Log out
            </li>
          </ul>
        </div>
        
      </div>
    </div>
  )
}
