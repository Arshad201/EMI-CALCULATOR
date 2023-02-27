import React, { useState } from "react";
import "./Navbar.css";
import { MdModeNight } from "react-icons/md";
import { BsSunFill } from "react-icons/bs";
import { RiBarChartHorizontalFill } from "react-icons/ri";
import { FaTimes } from "react-icons/fa";

export default function Navbar(props) {
  let [view, setView] = useState(false);


  let toggleView = () => {
    setView(!view);
  };

  return (
    <>
      <nav style={props.bgColor}>
        <a href="/" className="logo" style={props.txtColor}>
          EMI-Cal++
        </a>
        <ul className="nav-wrapper" >
          <li className="link-wrapper" >
            <a href="/" className="link active-link" style={props.txtColor}>
              Calculator
            </a>
          </li>
          <li className="link-wrapper">
            <a href="/" className="link" style={props.txtColor}>
              About
            </a>
          </li>
          <li className="link-wrapper">
            <a href="/" className="link" style={props.txtColor}>
              Our Products
            </a>
          </li>
          <li className="link-wrapper">
            <a href="/" className="link" style={props.txtColor}>
              Contact
            </a>
          </li>
        </ul>
        <div className="switch-wrapper" onClick={props.toggleMode}>
          <div className="switch-box">
            <span className="switch-btn" style={props.txtColor}>
              {props.mode === false ? <BsSunFill /> : <MdModeNight />}
            </span>
          </div>
        </div>
        <div className="menu-icon" onClick={toggleView} style={props.txtColor}>
          {view===false?<RiBarChartHorizontalFill />:<FaTimes/>}
          
        </div>
      </nav>
      <div className="mobile-menu" style={view===false?{display:'none'}:{display:'block'}}>
        <ul className="mb-nav-wrapper">
          <li className="link-wrapper">
            <a href="/" className="link active-link">
              Calculator
            </a>
          </li>
          <li className="link-wrapper">
            <a href="/" className="link">
              About
            </a>
          </li>
          <li className="link-wrapper">
            <a href="/" className="link">
              Our Products
            </a>
          </li>
          <li className="link-wrapper">
            <a href="/" className="link">
              Contact
            </a>
          </li>
          <li className="link-wrapper">
            <div className="mb-switch-wrapper" onClick={props.toggleMode}>
              <div className="switch-box">
                <span className="switch-btn" style={props.txtColor}>
                  {props.mode === false ? <BsSunFill /> : <MdModeNight />}
                </span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
