import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./index.css";
import Timestamp from "./Timestamp";
import HeaderParser from "./HeaderParser";
import UrlShortener from "./UrlShortener";
import ExerciseTracker from "./ExerciseTracker";
import Navbar from "./Navbar";
import Landing from "./Landing";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Navbar />
            <Route exact path="/" component={Landing} />
            <Route path="/timestamp" component={Timestamp} />
            <Route path="/headerparser" component={HeaderParser} />
            <Route path="/url" component={UrlShortener} />
            <Route path="/exercise" component={ExerciseTracker} />
          </div>
        </Router>
        <footer className="footer">
          <span>
            made with <i className="fas fa-heart" /> for{" "}
            <a href="https://freecodecamp.com">freeCodeCamp</a>
          </span>
        </footer>
      </div>
    );
  }
}

export default App;
