import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import './index.css';
import Timestamp from './Timestamp';
import HeaderParser from './HeaderParser';
import UrlShortener from './UrlShortener';
import Landing from './Landing';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
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
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="nav-link active" to="/url">
                  Url Shortener API
                </NavLink>
              </li>
            </ul>
            <Route exact path="/" component={Landing} />
            <Route path="/timestamp" component={Timestamp} />
            <Route path="/headerparser" component={HeaderParser} />
            <Route path="/url" component={UrlShortener} />
          </div>
        </Router>
        <footer className="footer">
          <span>
            made with <i className="fas fa-heart" /> for{' '}
            <a href="https://freecodecamp.com">freeCodeCamp</a>
          </span>
        </footer>
      </div>
    );
  }
}

export default App;
