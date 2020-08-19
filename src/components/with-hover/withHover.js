import React from "react";

function withHover(Component, propName = "hovering") {
  return class extends React.Component {
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
      const { onMouseOverHandler, onMouseOutHandler } = this;
      const props = {
        [propName]: this.state.hovering,
        ...this.props,
      };
      return (
        <div onMouseOver={onMouseOverHandler} onMouseOut={onMouseOutHandler}>
          <Component {...props} />
        </div>
      );
    }
  };
}

export default withHover;
