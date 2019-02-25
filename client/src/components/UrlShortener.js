import React, { Component } from 'react';
import axios from 'axios';

class UrlShortener extends Component {
  state = {
    url: '',
    shortenedUrl: ''
  };

  handleChange = e => {
    this.setState({ url: e.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const url = await axios.post('/api/url', { url: this.state.url });
    this.setState({ shortenedUrl: url.data.code }, () => {
      console.log(this.state);
    });
  };

  render() {
    return (
      <div className="container">
        <h1 className="display-4 text-center">API Project: URL Shortener Microservice</h1>
        <hr />
        <h2>User Story:</h2>
        <ol>
          <li>
            I can POST a URL to <code>[project_url]/api/shorturl/new</code> and I will receive a
            shortened URL in the JSON response.
            <br />
            Example :<code>{`\t{"original_url": "www.google.com","short_url":1}`}</code>
          </li>
          <li>
            If I pass an invalid URL that doesn't follow the{' '}
            <code>http(s)://www.example.com(/more/routes)</code>
            format, the JSON response will contain an error like{' '}
            <code>{`{"error":"invalid URL"}`}</code>
            <br />
            HINT: to be sure that the submitted url points to a valid site you can use the function
            dns.lookup(host, cb) from the dns core module.
          </li>
          <li>When I visit the shortened URL, it will redirect me to my original link.</li>
        </ol>
        <div className="container text-center">
          <h3>Short URL Creation:</h3>
          <span>
            example: <code>POST [project_url]/api/url</code> - <code>https://google.com</code>
          </span>
          <br />
          <br />
          <form className="bd-example" onSubmit={this.handleSubmit.bind(this)}>
            <div className="form-group">
              <label htmlFor="url">Url to Shorten: </label>
              <input
                className="form-control"
                type="text"
                id="url"
                value={this.state.url}
                onChange={this.handleChange.bind(this)}
              />
            </div>
            {this.state.shortenedUrl.length > 0 ? (
              <h3>
                <a href={`api/url/${this.state.shortenedUrl}`}>{`[project_url]/api/url${
                  this.state.shortenedUrl
                }`}</a>
              </h3>
            ) : (
              ''
            )}
            <button className="btn btn-lg btn-primary" type="submit">
              Submit
            </button>
          </form>
          <br />
          <h3>Example Usage:</h3>
          <a href="/api/url/9a31e9">
            <code>[this_project_url]/api/url/9a31e9</code>
          </a>
          <br />
          <br />
          <h3>Will Redirect To:</h3>
          <code>https://google.com</code>
        </div>
      </div>
    );
  }
}

export default UrlShortener;
