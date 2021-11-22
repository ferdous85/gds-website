import React from 'react'
import './Sidebar.css'
import { MdHome,MdTimeline, MdTrendingUp,MdOutlinePermIdentity,MdOutlineStorefront,MdAttachMoney,MdBarChart, } from "react-icons/md";
import { Link } from 'react-router-dom';


const Sidebar = () => {
   
    return (
      <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/admin/dashboard" className="link">
            <li className="sidebarListItem active">
              <MdHome className="sidebarIcon" />
              Home
            </li>
            </Link>
            <li className="sidebarListItem">
              <MdTimeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <MdTrendingUp className="sidebarIcon" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Website Control</h3>
          <ul className="sidebarList">
            <Link to="/admin/homePage" className="link">
              <li className="sidebarListItem">
                <MdOutlinePermIdentity className="sidebarIcon" />
                Home
              </li>
            </Link>
            <Link to="/admin/about" className="link">
              <li className="sidebarListItem">
                <MdOutlineStorefront className="sidebarIcon" />
                About
              </li>
            </Link>
            <Link to="/admin/course" className="link">
              <li className="sidebarListItem">
                <MdOutlineStorefront className="sidebarIcon" />
                Course
              </li>
            </Link>
            <Link to="/admin/package" className="link">
              <li className="sidebarListItem">
                <MdOutlineStorefront className="sidebarIcon" />
                Package
              </li>
            </Link>
            <Link to="/admin/indfees" className="link">
              <li className="sidebarListItem">
                <MdOutlineStorefront className="sidebarIcon" />
                Individual Fees
              </li>
            </Link>
            <Link to="/admin/blog" className="link">
              <li className="sidebarListItem">
                <MdOutlineStorefront className="sidebarIcon" />
                Blog
              </li>
            </Link>
            <Link to="/admin/oncls" className="link">
              <li className="sidebarListItem">
                <MdOutlineStorefront className="sidebarIcon" />
                5 & 6 Hour Class
              </li>
            </Link>
            <Link to="/admin/faq" className="link">
              <li className="sidebarListItem">
                <MdOutlineStorefront className="sidebarIcon" />
                FAQ
              </li>
            </Link>

            <Link to="/admin/contact" className="link">
              <li className="sidebarListItem">
                <MdOutlineStorefront className="sidebarIcon" />
                Contact
              </li>
            </Link>
            <li className="sidebarListItem">
              <MdAttachMoney className="sidebarIcon" />
              Transactions
            </li>
            <li className="sidebarListItem">
              <MdBarChart className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
        
        
      </div>
    </div>
    )
}

export default Sidebar
