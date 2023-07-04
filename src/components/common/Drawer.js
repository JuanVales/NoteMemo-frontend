import * as React from "react";
import GoogleIcon from "@mui/icons-material/Google";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import Axios from "axios";
import { useState, useEffect } from "react";
import backEndServer from "../../config";

export default function SwipeableTemporaryDrawer(props) {
  const [failureResponse, setFailureResponse] = useState("");
  const drawerWidth = 300;

  async function handleLogin(event) {
    event.preventDefault();
    const user = {
      username: event.target.elements.username.value,
      password: event.target.elements.password.value,
    };

    Axios.post(backEndServer + "/auth/login", JSON.stringify(user), {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    })
      .then((response) => {
        if (response.status === 200) {
          window.location.reload(true);
          props.setIsDrawerOpen(false);
        }
      })
      .catch((err) => {
        console.log("error");
        console.log(err);
        setFailureResponse(err.response.data.message);
        console.error(err);
      });
  }

  return (
    <SwipeableDrawer
      anchor="right"
      open={props.isDrawerOpen}
      onClose={() => props.setIsDrawerOpen(!props.isDrawerOpen)}
      PaperProps={{ style: { width: drawerWidth } }}
    >
      <div class="social-button">
        <Box p={2}>
          <p>
            Don't have an account?{" "}
            <Link className="nav-register" to="/register">
              Sign Up
            </Link>
          </p>
          <div class="card mb-3">
            <div class="card-body">
              <a
                class="btn btn-block google-btn"
                href={backEndServer + "/auth/google"}
                role="button"
              >
                <GoogleIcon color="primary" />
                Google
              </a>
            </div>
          </div>

          <form onSubmit={handleLogin}>
            <div className="spacer">
              <span className="spacer-text">
                <span> Or with email and password </span>
              </span>
            </div>
            <section className="form-group">
              <label for="username" className="form-label">
                Email
              </label>
              <input
                id="username"
                name="username"
                type="text"
                className="form-control"
                autocomplete="username"
                required
                autofocus
              />
            </section>
            <section class="form-group">
              <label for="current-password" className="form-label">
                Password
              </label>
              <input
                id="current-password"
                name="password"
                type="password"
                className="form-control"
                autocomplete="current-password"
                required
              />
            </section>
            <button type="submit" className="btn btn-primary mt-3">
              Sign in
            </button>
          </form>
        </Box>
      </div>
      {failureResponse && (
        <div class="alert alert-danger m-3 " role="alert">
          {failureResponse}
        </div>
      )}
    </SwipeableDrawer>
  );
}
