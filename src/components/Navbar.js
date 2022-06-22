import React from "react";
import { NavLink } from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const { isAuthenticated, setIsAuthenticated } =
    useContext(AuthContext);
  let navigate = useNavigate();

  const handleClick = () => {    
    setIsAuthenticated(false);
    localStorage.removeItem("token");
    navigate(`/`);
  };

  return (
<nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <NavLink to="/search"><a className="navbar-brand">MurMur</a></NavLink>
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
        <a onClick={handleClick} className="nav-link" aria-current="page">Logout</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

  );
}

export default Navbar;
