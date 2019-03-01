import React from "react";
import { NavLink } from "react-router-dom";

export default () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark"
      style={{ marginBottom: "1em" }}
    >
      <NavLink className="navbar-brand" to="/">
        FCC-APIs-Microservices
      </NavLink>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink
              className="nav-link"
              activeClassName="active"
              to="/timestamp"
            >
              Timestamp API
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              activeClassName="nav-link active"
              to="/headerparser"
            >
              Header Parser API
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              activeClassName="nav-link active"
              to="/url"
            >
              Url Shortener API
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              activeClassName="nav-link active"
              to="/exercise"
            >
              Exercise Tracker API
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              activeClassName="nav-link active"
              to="/file"
            >
              File Metadata API
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
