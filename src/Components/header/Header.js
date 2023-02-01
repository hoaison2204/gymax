// header bar

import React, { useState } from "react";
import "./header.scss";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="header">
      <div
        className={` ${open === true ? "cover-active cover" : ""}`}
        onClick={() => setOpen(!open)}
      ></div>
      <div className="container">
        <div class="header-inner">
          <div className="logo">
            <div>
              <img src={require("../../img/Logo.png")} alt="" />
            </div>
          </div>
          <div className="header-inner-center">
            <div
              className={`nav-icon ${open === true ? "active" : ""}  `}
              onClick={() => setOpen(!open)}
            >
              <i className="fas fa-bars"></i>
            </div>

            <ul
              className={`nav-bar nav-icon ${open === true ? "active" : ""}  `}
            >
              <li className="nav-item">
                <a href="/#">Home</a>
              </li>
              <li className="nav-item">
                <a href="/#">Pages</a>
              </li>
              <li className="nav-item">
                <a href="/#">Classes</a>
              </li>
              <li className="nav-item">
                <a href="/#">Portfolio</a>
              </li>
              <li className="nav-item">
                <a href="/#">Blog</a>
              </li>
              <li className="nav-item">
                <a href="/#">Contacts</a>
              </li>
            </ul>
          </div>
          <div className="header-inner-right">
            <div className="header-item search">
              <i className="fas fa-search"></i>
            </div>
            <div className="header-item cart">
              <i className="fas fa-shopping-basket"></i>
            </div>
            <div className="header-item user">
              <i className="fas fa-user"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;