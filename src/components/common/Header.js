import React, { useState, useEffect } from "react";
import "../../assets/styles.css";
import { Link } from "react-router-dom";
import Axios from "axios";
import SwipeableTemporaryDrawer from "../common/Drawer";

function Header() {
  const backEndServer = "https://notememo-backend-production.up.railway.app";
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setName] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleLoginButtonClick = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  useEffect(() => {
    checkAuthentication();
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const checkAuthentication = () => {
    Axios.get(backEndServer + "/auth/check", { withCredentials: true })
      .then((response) => {
        setName(response.data.name);
        setIsLoggedIn(true);
      })
      .catch((err) => {
        console.error(err);
        setIsLoggedIn(false);
      });
  };

  return (
    <header>
      <nav className="navbar navbar-expand-sm bg-body-tertiary">
        <div className="container-fluid">
          <h1>
            <Link className="nav-link" to="/">
              NoteMemo
            </Link>
          </h1>

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
                    <p className="user-name">Hello, {name} </p>
                  </li>

                  <li className="nav-item">
                    <a
                      className="nav-link nav-button"
                      href={backEndServer + "/auth/logout"}
                      role="button"
                    >
                      Logout
                    </a>
                  </li>

                  <li className="nav-item nav-items ">
                    <Link className="nav-link nav-button" to="/notes">
                      Notes
                    </Link>
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
      <SwipeableTemporaryDrawer
        handleLoginButtonClick={handleLoginButtonClick}
        isDrawerOpen={isDrawerOpen}
      />
    </header>
  );
}

export default Header;
