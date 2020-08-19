import React, { Component } from "react";

class Hover extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hovering: false,
    };
    this.onMouseOverHandler = this.onMouseOverHandler.bind(this);
    this.onMouseOutHandler = this.onMouseOutHandler.bind(this);
  }

  onMouseOverHandler() {
    this.setState({
      hovering: true,
    });
  }

  onMouseOutHandler() {
    this.setState({
      hovering: false,
    });
  }

  render() {
    return (
      <div
        onMouseOver={this.onMouseOverHandler}
        onMouseOut={this.onMouseOutHandler}
      >
        {this.props.children(this.state.hovering)}
      </div>
    );
  }
}

export default Hover;
