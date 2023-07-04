import React, { useState, useEffect } from "react";
import "../../assets/styles.css";
import { Link } from "react-router-dom";
import { useAuthentication } from "../auth/auth";
import backEndServer from "../../config";

function Header(props) {
  const { isLoggedIn, userInfo } = useAuthentication();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLoginButtonClick = () => {
    props.setIsDrawerOpen(!props.isDrawerOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header>
      <nav className="navbar navbar-expand-sm bg-body-tertiary">
        <div className="container-fluid">
          <h1>NoteMemo</h1>
          <button
            className={`navbar-toggler ${isDropdownOpen ? "active" : ""}`}
            type="button"
            onClick={toggleDropdown}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className={` justify-content-end nav-items collapse navbar-collapse ${
              isDropdownOpen ? "show" : ""
            }`}
          >
            <ul className="navbar-nav ">
              {isLoggedIn ? (
                <div className="nav-items">
                  <li className="nav-item">
                    <p className="user-name">Hello, {userInfo}</p>
                  </li>

                  <li className="nav-item">
                    <a
                      className="nav-link nav-button"
                      href={`${backEndServer}/auth/logout`}
                      role="button"
                    >
                      Logout
                    </a>
                  </li>
                </div>
              ) : (
                <div className="nav-items">
                  <li className="nav-item ">
                    <Link
                      className="nav-link nav-button"
                      onClick={handleLoginButtonClick}
                      onClose={handleLoginButtonClick}
                    >
                      Login
                    </Link>
                  </li>
                </div>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
