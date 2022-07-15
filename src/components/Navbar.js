import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {props.title}
          </a>
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
      
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Games
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="lightsOutGame">
                      LightsOut
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="diceRoll">
                      Roll-TheDice
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="pokeDox">
                      PokeDox
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Utility
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="colorGenerator">
                      Color Generator
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="yourBox">
                      Box Maker
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="todoApp">
                      Todo App
                    </a>
                  </li>
              
              
                </ul>
              </li>
                
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Contact Us
                </a>
              </li>
            </ul>

            <a className="nav-link" href="/">
              Login
            </a>
            <a className="nav-link" href="/">
              Register
            </a>
            {/* <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}
          </div>
        </div>
      </nav>
    </>
  );
}

// Component_name.propTypes represent the datatype of the prop variable
Navbar.propTypes = {
  title: PropTypes.string,
};
// // Component_name.defaultProps represent the value of the prop variable in case if it is unpassed
// Navbar.defaultProps={
//     title:"Set title"
// }
