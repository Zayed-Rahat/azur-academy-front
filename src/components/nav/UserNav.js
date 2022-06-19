import React from "react";
import { Link } from "react-router-dom";

const UserNav = () => (
  <nav className="navbar">
    <ul className="nav flex-column">
      <li className="nav-item">
        <Link to="/user/history"  className="nav-link bg-primary text-white font-weight-bold">
          History
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/user/password"  className="nav-link bg-primary text-white font-weight-bold">
          Password
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/user/wishlist" className="nav-link bg-primary text-white font-weight-bold">
          Wishlist
        </Link>
      </li>
    </ul>
  </nav>
);

export default UserNav;
