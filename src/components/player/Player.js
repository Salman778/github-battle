import React, { Component } from "react";
import { ThemeConsumer } from "../../contexts/theme";
import PropTypes from "prop-types";
// import './Player.css';

class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      username: "",
    });
    this.props.onSubmit(this.state.username);
  }

  handleChange(e) {
    this.setState({
      username: e.target.value,
    });
  }

  render() {
    return (
      <ThemeConsumer>
        {({ theme }) => (
          <form onSubmit={this.handleSubmit} className="column player">
            <label htmlFor="username" className="player-label">
              {this.props.label}
            </label>
            <div className="row player-inputs">
              <input
                className={`input-${theme ? "light" : "dark"}`}
                type="text"
                placeholder="salman778"
                autoComplete="off"
                onChange={this.handleChange}
                value={this.state.username}
              />
              <button
                className={`btn ${theme ? "dark" : "light"}-btn`}
                type="submit"
                disabled={!this.state.username}
              >
                Submit
              </button>
            </div>
          </form>
        )}
      </ThemeConsumer>
    );
  }
}

Player.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

export default Player;
