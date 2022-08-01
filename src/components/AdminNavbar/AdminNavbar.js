
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./AdminNavbar.css";

function AdminNavbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            Happy Nest Girls PG
            <i className="fas fa-code"></i>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/viewuser"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                View user
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                exact
                to="/viewbooking"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                View Bookings
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                exact
                to="/viewmessenrollments"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                View Mess Enrollments
              </NavLink>
            </li>
            
            <li className="nav-item">
              <NavLink
                exact
                to="/viewpayments"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >  
                View Payments
              </NavLink>
            </li>


          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>

          
          <Link to="/">
            <a class="nav-link" href="#">
              <button className="btn btn-outline-warning mb-3">Logout</button>
            </a>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default AdminNavbar;
