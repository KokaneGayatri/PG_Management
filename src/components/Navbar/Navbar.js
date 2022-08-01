// import React from "react";
// import "./Navbar.css";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <nav class="navbar navbar-expand-lg bg-dark">
//       <div class="container-fluid">
//         <Link to="/">
//           <a class="navbar-brand">Vatsalya</a>
//         </Link>

//         <button
//           class="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span class="navbar-toggler-icon"></span>
//         </button>
//         <div class="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//             <li class="nav-item">
//               <Link to="/">
//                 <a class="nav-link active" aria-current="page" href="#">
//                   Home
//                 </a>
//               </Link>
//             </li>
//             <li class="nav-item">
//               <Link to="/gallery">
//                 <a class="nav-link" href="#">
//                   Gallery
//                 </a>
//               </Link>
//             </li>

//             <li class="nav-item">
//               <Link to="/aboutus" class="nav-link" href="#">
//                 <a>About Us</a>
//               </Link>
//             </li>

//             <li class="nav-item">
//               <Link to="/contactus">
//                 <a class="nav-link" href="#">
//                   Contact Us
//                 </a>
//               </Link>
//             </li>
//           </ul>
//           <div className="d-flex">
//             <Link to="/signin">
//               <a class="nav-link" href="#">
//                 <button className="btn btn-outline-info">Signin</button>
//               </a>
//             </Link>
//             <Link to="/register">
//               <a class="nav-link" href="#">
//                 <button className="btn btn-outline-success">Register</button>
//               </a>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
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
                to="/aboutus"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contactus"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/gallery"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Gallery
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>

          <Link to="/signin">
            <a class="nav-link" href="#">
              <button className="btn btn-outline-warning mb-3">Signin</button>
            </a>
          </Link>
          <Link to="/register">
            <a class="nav-link" href="#">
              <button className="btn btn-outline-warning mb-3">Register</button>
            </a>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
