import React from "react";
import { Link } from "react-router-dom";

const AdminNav = () => (
  <nav className="navbar bg-primary ">
        <ul className="nav flex-column">
      <li className="nav-item ">
        <Link to="/admin/dashboard" className="nav-link bg-primary text-white font-weight-bold" >
          Dashboard
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/admin/product" className="nav-link bg-primary text-white font-weight-bold">
         Add Course/Book
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/admin/products" className="nav-link bg-primary text-white font-weight-bold">
        All  Courses & Books
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/admin/category" className="nav-link bg-primary text-white font-weight-bold">
          Category
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/admin/sub" className="nav-link bg-primary text-white font-weight-bold">
          Sub Category
        </Link>
      </li>

   <li className="nav-item">
        <Link to="/admin/coupon" className="nav-link bg-primary text-white font-weight-bold">
          Coupon
        </Link>
      </li> 

      <li className="nav-item">
        <Link to="/admin/password" className="nav-link bg-primary text-white font-weight-bold">
          Password
        </Link>
      </li>
    </ul>
    </nav>
);

export default AdminNav;
