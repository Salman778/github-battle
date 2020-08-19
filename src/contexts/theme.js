import React, { createContext, Component } from "react";

const { Provider, Consumer: ThemeConsumer } = createContext();

class ThemeProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: true,
      toggleTheme: () =>
        this.setState(({ theme }) => ({
          theme: theme ? false : true,
        })),
    };
  }
  render() {
    const { theme } = this.state;
    return (
      <Provider value={this.state}>
        <div className={theme ? "light" : "dark"}>{this.props.children}</div>
      </Provider>
    );
  }
}

export { ThemeProvider, ThemeConsumer };
