import React from "react";
import "./NavBar.css";
import logo from "../assets/react.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="my-logo"></img>
      <ul className="nav-menu">
        <li>Home</li>
        <li>About Me</li>
        <li>Services</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
      <div className="nav-connect">Connect with Me</div>
    </div>
  );
};

export default Navbar;
