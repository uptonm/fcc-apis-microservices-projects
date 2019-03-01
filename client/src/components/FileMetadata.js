import React, { Component } from 'react';
import axios from 'axios';

class FileMetadata extends Component {
  state = {
    file: null
  };
  handleSubmit = async event => {
    event.preventDefault();
    if (this.state.file) {
      const res = await axios.post('/api/file/upload', this.state.file);
      console.log(res);
    }
  };
  handleChange = async event => {
    event.preventDefault();
    await this.setState({ file: event.target.value });
  };
  render() {
    return (
      <div className="container text-center">
        <form
          action="/profile"
          method="post"
          enctype="multipart/form-data"
          className="bd-example"
          onSubmit={this.handleSubmit.bind(this)}
        >
          <input
            type="file"
            name="avatar"
            value={this.state.file}
            onChange={this.handleChange.bind(this)}
          />
          <button className="btn btn-primary" type="submit">
            Upload
          </button>
        </form>
      </div>
    );
  }
}

export default FileMetadata;
