import React, { Component } from "react";
import * as environment from "../assets/environment.json";

class HeaderParser extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="display-4 text-center">
          API Project: Request Header Parser Microservice
        </h1>
        <hr />
        <h2>User Story:</h2>
        <ol>
          <li>
            The API endpoint is GET [project_url]/api/timestamp/:date_string?
          </li>
          <li>
            I can get the IP address, preferred languages (from header{" "}
            <code>Accept-Language</code>) and system infos (from header{" "}
            <code>User-Agent</code>) for my device.
          </li>
        </ol>
        <div className="container text-center">
          <h3>Example Usage:</h3>
          <a href={`${environment.PROJECT_URL}/api/whoami`}>
            <code>[project url]/api/whoami</code>
          </a>
          <br />
          <br />
          <h3>Example Output:</h3>
          <code>{`{"ipaddress":"159.20.14.100","language":"en-US,en;q=0.5",
"software":"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:50.0) Gecko/20100101 Firefox/50.0"}`}</code>
        </div>
      </div>
    );
  }
}

export default HeaderParser;
