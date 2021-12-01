import React from "react";
import './style.css';
import { NavLink } from "react-bootstrap";
import logo from '../twitter.png'
import { AiOutlineHome } from "react-icons/ai";
import { BiHash } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FiMessageSquare } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { HiOutlineDotsCircleHorizontal } from "react-icons/hi";



const logoStyle={width:"50px",marginLeft:"30px"};
const iconStyle={marginTop:"10px"};

const LeftSideMenu = ()=>(
  <div className="container">
    <div className="row">
        <div className="col-lg-12">
            <img src={logo} style={logoStyle}/>
        </div>
    </div>
    <div className="row">
      <div className="col-lg-12">
        <NavLink
          className="navbar-item" style={iconStyle}
          activeClassName="is-active" to="/" exact>
          <AiOutlineHome className="menu-icon"/>Home
        </NavLink>
        <NavLink
          className="navbar-item" style={iconStyle}
          activeClassName="is-active" to="/" exact>
          <BiHash className="menu-icon"/>
          Explore
        </NavLink>
        <NavLink
          className="navbar-item" style={iconStyle}
          activeClassName="is-active" to="/" exact>
          <IoMdNotificationsOutline className="menu-icon"/>Notification
        </NavLink>
        <NavLink
          className="navbar-item" style={iconStyle}
          activeClassName="is-active" to="/" exact>
          <FiMessageSquare className="menu-icon"/>Messages
        </NavLink>
        <NavLink
          className="navbar-item" style={iconStyle}
          activeClassName="is-active" to="/" exact>
          <CgProfile className="menu-icon"/>Profile
        </NavLink>
        <NavLink
          className="navbar-item" style={iconStyle}
          activeClassName="is-active" to="/" exact>
          <HiOutlineDotsCircleHorizontal className="menu-icon"/>
          More
        </NavLink>
      </div>
    </div>
  </div>
);

export default LeftSideMenu;
