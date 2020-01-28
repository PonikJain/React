import React, { Component } from "react";
import "./navBar.css";

class NavBar extends Component {
  render() {
    return (
      <nav id="navBar">
        <ul className="navLogo">
          <li>
            <a href="#logo">Logo</a>
          </li>
        </ul>
        <ul className="rightNavBar">
          <li>
            <a href="#1">Become a Agent</a>
          </li>
          <li>
            <a href="#2">Help</a>
          </li>
          <li>
            <a href="#3">Sign up</a>
          </li>
          <li>
            <a href="#4">Log in</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
