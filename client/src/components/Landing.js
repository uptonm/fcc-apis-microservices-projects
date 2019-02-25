import React from 'react';
import { NavLink } from 'react-router-dom';

export default () => {
  return (
    <div>
      <ul className="nav">
        <li className="nav-item">
          <NavLink className="nav-link" activeClassName="active" to="/timestamp">
            Timestamp API
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" activeClassName="nav-link active" to="/headerparser">
            Header Parser API
          </NavLink>
        </li>
      </ul>
      {/* <div className="jumbotron">
        <h1 className="display-4">Introduction to the APIs and Microservices Projects</h1>
        <p class="lead">
          This is a simple hero unit, a simple jumbotron-style component for calling extra attention
          to featured content or information.
        </p>
        <hr class="my-4" />
      </div> */}
    </div>
  );
};
