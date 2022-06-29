import React from "react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import {Link} from 'react-scroll';


function Navbar() {
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  let navigate = useNavigate();

  const handleClick = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("token");
    navigate(`/`);
  };

  let path;
  if (isAuthenticated){
    path = "/search"
  }else{
    path= "/"
  }

  const clickHandler = () => {
    navigate("/")
  }

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        
          <NavLink to={`${path}`} className="navbar-brand">
            MurMur
          </NavLink>
        

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="nav navbar-nav mb-2 mb-lg-0 align-items-center ms-auto">
            <li className="nav-item">
              <NavLink to="/search" className="nav-link" aria-current="page">
                Search City
              </NavLink>
            </li>
            {!isAuthenticated && (
            <li className="nav-item">
              <Link activeClass="active" to="loginformular" spy={true} smooth={true} onClick={clickHandler}>
                LogIn
              </Link>
            </li>)}
            {isAuthenticated && (
              <>
                <li className="nav-item">
                  <NavLink
                    to="/create"
                    className="nav-link"
                    aria-current="page"
                  >
                    Write MurMur
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/profile"
                    className="nav-link"
                    aria-current="page"
                  >
                    Profile
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/"
                    onClick={handleClick}
                    className="nav-link"
                    aria-current="page"
                  >
                    Logout
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
