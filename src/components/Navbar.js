import React from "react";
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
<nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">MurMur</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="nav navbar-nav mb-2 mb-lg-0 ">
        <li className="nav-item">
            <NavLink to="/search"><a className="nav-link" aria-current="page">Search City</a></NavLink>
        </li>
        <li className="nav-item">
        <NavLink to="/create"><a className="nav-link" aria-current="page">Write MurMur</a></NavLink>
        </li>
        <li className="nav-item">
        <NavLink to="/profile"><a className="nav-link" aria-current="page">Profile</a></NavLink>
        </li>
        <li className="nav-item">
        <a className="nav-link" aria-current="page">Logout</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

  );
}

export default Navbar;
