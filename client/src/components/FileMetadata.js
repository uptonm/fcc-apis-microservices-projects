import React, { Component } from "react";

class FileMetadata extends Component {
  state = {
    label: "Choose file..."
  };
  handleChange = event => {
    event.preventDefault();
    this.setState({ label: event.target.value });
  };
  render() {
    return (
      <div className="container">
        <h1 className="display-4 text-center">
          API Project: File Metadata Microservice{" "}
        </h1>
        <hr />
        <h4>User Stories: </h4>
        <ol style={{ margin: "0 auto" }}>
          <li>I can submit a form object that includes a file upload. </li>
          <li>
            The from file input field has the "name" attribute set to "upfile".
            We rely on this in testing.{" "}
          </li>
          <li>
            When I submit something, I will receive the file name, and size in
            bytes within the JSON response.
          </li>
        </ol>
        <br />
        <h4 className="text-center">Usage: Please Upload a File ...</h4>
        <br />
        <form
          action="/api/file/upload"
          method="POST"
          encType="multipart/form-data"
          className="bd-example"
          style={{ margin: "0 auto", width: "60%" }}
        >
          <div className="custom-file">
            <input
              id="file"
              type="file"
              name="file"
              className="custom-file-input"
              onChange={this.handleChange.bind(this)}
            />
            <label className="custom-file-label" htmlFor="file">
              {this.state.label}
            </label>
          </div>

          <button
            className="btn btn-primary"
            id="button"
            type="submit"
            style={{ marginTop: "1em" }}
          >
            Upload
          </button>
        </form>
      </div>
    );
  }
}

export default FileMetadata;
