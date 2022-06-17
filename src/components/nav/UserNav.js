import React from "react";
import { Link } from "react-router-dom";
/* import styled from 'styled-components';
 */
/* 
const Nav = styled.nav`
font-size: 1em;
margin: 0.5em;
border-radius: 3px;
background-color: #03072b;
` */
const UserNav = () => (
  <Nav>
    <ul className="nav flex-column">
      <li className="nav-item">
        <Link to="/user/history" className="nav-link">
          History
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/user/password" className="nav-link">
          Password
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/user/wishlist" className="nav-link">
          Wishlist
        </Link>
      </li>
    </ul>
  </Nav>
);

export default UserNav;
