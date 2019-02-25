import React, { Component } from 'react';

class Timestamp extends Component {
  render() {
    return (
      <div className="container" style={{ height: '100vh' }}>
        <h1 className="display-4 text-center">API Project: Timestamp Microservice</h1>
        <hr />
        <h2>User Stories (WIP):</h2>
        <ol>
          <li>The API endpoint is GET [project_url]/api/timestamp/:date_string?</li>
          <li>
            A date string is valid if can be successfully parsed by new Date(date_string). Note that
            the unix timestamp needs to be an integer (not a string) specifying milliseconds. In our
            test we will use date strings compliant with ISO-8601 (e.g. "2016-11-20") because this
            will ensure an UTC timestamp.
          </li>
          <li>
            If the date string is empty it should be equivalent to trigger new Date(), i.e. the
            service uses the current timestamp.
          </li>
          <li>
            If the date string is valid the api returns a JSON having the structure
            <br />
            <code>{`{"unix": <date.getTime()>, "utc" : <date.toUTCString()> }`}</code>
            <br />
            e.g. <code>{`{"unix": 1479663089000 ,"utc": "Sun, 20 Nov 2016 17:31:29 GMT"}`}</code>
          </li>
          <li>
            If the date string is invalid the api returns a JSON having the structure
            <br />
            <code>{`{"error" : "Invalid Date" }`}</code>
          </li>
        </ol>
        <div className="container text-center">
          <h3>Example Usage:</h3>
          <a href="/api/timestamp/2015-12-25">
            <code>[project url]/api/timestamp/2015-12-25</code>
          </a>
          <br />
          <a href="/api/timestamp/1450137600">
            <code>[project url]/api/timestamp/1450137600</code>
          </a>
          <br />
          <br />
          <h3>Example Output:</h3>
          <code>{`{"unix": 1451001600000, "utc":"Fri, 25 Dec 2015 00:00:00 GMT"}`}</code>
        </div>
      </div>
    );
  }
}

export default Timestamp;
