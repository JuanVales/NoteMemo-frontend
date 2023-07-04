/* import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/pages/Home";
import Register from "./components/auth/Register";
import Notes from "./components/pages/Notes";

function AppRouter() {
  return (
    <Router basename="/">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/notes" component={Notes} />
      </Switch>
    </Router>
  );
}

export default AppRouter; */

import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./components/pages/Home";
import Register from "./components/auth/Register";
import Notes from "./components/notes/Notes";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/*" element={<Home />} />
    </Routes>
  );
}

export default AppRouter;
