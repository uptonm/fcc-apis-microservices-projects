import React, { Component } from "react";
import axios from "axios";

class ExerciseTracker extends Component {
  state = {
    username: {
      value: "",
      error: ""
    },
    userId: {
      value: "",
      error: ""
    },
    description: {
      value: "",
      error: ""
    },
    duration: {
      value: "",
      error: ""
    },
    date: {
      value: "",
      error: ""
    },
    content: {}
  };

  handlePostUser = async event => {
    event.preventDefault();
    const username = await axios
      .post("/api/exercise/users", { username: this.state.username.value })
      .catch(err => {
        this.setState({
          username: {
            ...this.state.username,
            error: err.response.data.Error
          },
          content: {
            status: false
          }
        });
      });
    if (username) {
      this.setState({
        username: { ...this.state.username, error: "" },
        content: { title: "User Added: ", status: "user", ...username.data }
      });
    }
  };

  handlePostExercise = async event => {
    event.preventDefault();
    let exercise;
    if (this.state.date.value.length === 0) {
      exercise = {
        user: this.state.userId.value,
        description: this.state.description.value,
        duration: this.state.duration.value
      };
    } else {
      exercise = {
        user: this.state.userId.value,
        description: this.state.description.value,
        duration: this.state.duration.value,
        date: this.state.date
      };
    }
    await axios.post("/api/exercise", exercise).catch(err => {
      this.setState({
        date: {
          ...this.state.date,
          error: err.response.data.Error
        }
      });
    });
  };

  handleGetUser = async event => {
    event.preventDefault();
    const user = await axios
      .get(`/api/exercise/users?username=${this.state.username.value}`)
      .catch(err => {
        this.setState({
          username: {
            ...this.state.username,
            error: err.response.data.Error
          },
          content: {
            status: false
          }
        });
      });
    if (user) {
      this.setState({
        username: {
          ...this.state.username,
          error: ""
        },
        content: {
          status: "user",
          title: "User: ",
          ...user.data
        }
      });
    }
  };

  handleChange = event => {
    // console.log(event.target.id );
    this.setState({
      [`${event.target.id}`]: {
        ...this.state[`${event.target.id}`],
        value: event.target.value
      }
    });
  };

  renderContent = () => {
    switch (this.state.content.status) {
      case "user":
        return (
          <div className="bd-example" style={{ marginTop: "2.2em" }}>
            <i
              className="fas fa-times float-top-right"
              onClick={() => this.setState({ content: {} })}
            />
            <h3>{this.state.content.title}</h3>
            <code>_id: </code>
            {this.state.content._id}
            <br />
            <code>username: </code>
            {this.state.content.username}
          </div>
        );
      case "exercise":
      default:
        return (
          <div className="bd-example" style={{ marginTop: "2.2em" }}>
            <p>GET user's exercise log:</p>
            <code>GET /api/exercise/log?{`{userId}`}[&from][&to][&limit]</code>
            <br />
            <br />
            <p>
              <strong>{`{}`}</strong> = required, <strong>[ ]</strong> =
              optional
            </p>
            <p>
              <strong>from, to</strong> = dates (yyyy-mm-dd);{" "}
              <strong>limit</strong> = number
            </p>
          </div>
        );
    }
  };

  render() {
    return (
      <div className="container">
        <h1 className="display-4 text-center">API Project: Exercise Tracker</h1>
        <hr />
        <div className="row" style={{ marginTop: "1em" }}>
          <div className="col-sm-6">
            <form
              onSubmit={this.handlePostUser.bind(this)}
              className="bd-example"
            >
              <h3>Create a User:</h3>
              <code>POST [project_url]/api/exercise/users</code>
              <div className="form-group" style={{ marginTop: "1em" }}>
                <label htmlFor="username">Username</label>
                <input
                  className={
                    this.state.username.error.length === 0
                      ? "form-control"
                      : "form-control is-invalid"
                  }
                  required
                  id="username"
                  value={this.state.username.value}
                  onChange={this.handleChange.bind(this)}
                />
                <div className="invalid-feedback">
                  {this.state.username.error}
                </div>
              </div>
              <button
                className="btn btn-primary"
                style={{ width: "45%", marginRight: "5%" }}
                type="submit"
              >
                Submit
              </button>
              <button
                className="btn btn-success"
                style={{ width: "45%", marginLeft: "5%" }}
                onClick={this.handleGetUser}
              >
                Look Up
              </button>
            </form>
            {this.renderContent()}
          </div>
          <div className="col-sm-6">
            <form
              onSubmit={this.handlePostExercise.bind(this)}
              className="bd-example"
            >
              <h3>Add Exercises:</h3>
              <code>POST [project_url]/api/exercise</code>
              <div className="form-group" style={{ marginTop: "1em" }}>
                <label htmlFor="userId">UserId</label>
                <input
                  className="form-control"
                  required
                  id="userId"
                  value={this.state.userId.value}
                  onChange={this.handleChange.bind(this)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <input
                  className="form-control"
                  required
                  id="description"
                  value={this.state.description.value}
                  onChange={this.handleChange.bind(this)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="duration">Duration (mins)</label>
                <input
                  className="form-control"
                  required
                  id="duration"
                  value={this.state.duration.value}
                  onChange={this.handleChange.bind(this)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="date">Date (yyyy-mm-dd)</label>
                <input
                  className={
                    this.state.date.error.length > 0
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  id="date"
                  value={this.state.date.value}
                  onChange={this.handleChange.bind(this)}
                />
                <div className="invalid-feedback">{this.state.date.error}</div>
              </div>
              <button
                className="btn btn-primary"
                style={{ width: "100%" }}
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default ExerciseTracker;
