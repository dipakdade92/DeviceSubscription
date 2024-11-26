import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";
import "./style.scss";
import logo from '../../images/driveLah.png';
const Header: React.FC = () => {
  return (
    <>
      <div className="header-body">
        <div className="toggle-icon"><FaBars /></div>
        <div className="logo">
          <img src={logo} alt='Drive lah' height={'25px'}/>
          Drive lah</div>
        <div className="header-content">
          <ul className="header-nav">
            <li>
              <a href="#" className="header-links">Learn more</a>
            </li>
            <li>
              <a href="#" className="header-links">List your car</a>
            </li>
            <li>
              <a href="#" className="header-links">Inbox</a>
            </li>
          </ul>
          <div className="header-profile">
            <img src="https://www.shutterstock.com/image-vector/person-gray-photo-placeholder-woman-600nw-1241538838.jpg" alt="user" height={40} width={40} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
