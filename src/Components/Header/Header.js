import React, { useState } from "react";
import "./Header.scss";

import { Link } from 'react-scroll'
export const Header = () => {
  const [toggle, settoggle] = useState(false);
  return (
    <div className="MainHeader">
      <div className="container">
        <nav>
          <div className="logo">
            <h3>
              P<span>o</span>rtf<span>o</span>li<span>o</span>
            </h3>
          </div>
          <div className="MenuList">
            <ul>
              <li>
                <Link to="home" spy={true} smooth={true}><span>Home</span></Link>
              </li>
              <li>
                <Link to="Education" spy={true} smooth={true}><span >Education</span></Link>

              </li>
              <li>
                <Link to="Experince" spy={true} smooth={true}><span >Experince</span></Link>

              </li>
              <li>
                <Link to="Skills" spy={true} smooth={true}><span >Skills</span></Link>

              </li>
              <li>
                <Link to="Portfolio" spy={true} smooth={true}><span>Portfolio</span></Link>

              </li>
              <li>
                <Link to="Contact" spy={true} smooth={true}><span>Contact</span></Link>

              </li>
            </ul>
          </div>

          <div className="smMenuList">
            <button onClick={() => settoggle(!toggle)}>
              <i class="fas fa-bars"></i>
            </button>
            <ul className={toggle ? "Show" : "Hide"}>
              <li>
                <span className="activeMenu">Home</span>
              </li>
              <li>
                <span>Education</span>
              </li>
              <li>
                <span>Experince</span>
              </li>
              <li>
                <span>Skills</span>
              </li>
              <li>
                <span>Portfolio</span>
              </li>
              <li>
                <span>Contact</span>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};
