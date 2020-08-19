import React from "react";
import { NavLink } from "react-router-dom";
import { ThemeConsumer } from "../../contexts/theme";

const activeStyle = {
  color: "rgb(187, 46, 31)",
};
function Nav(props) {
  return (
    <ThemeConsumer>
      {({ theme, toggleTheme }) => (
        <nav className="row space-between">
          <ul className="row nav">
            <li>
              <NavLink
                to="/"
                exact={true}
                className="nav-link"
                activeStyle={activeStyle}
              >
                Popular
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/battle"
                exact={true}
                className="nav-link"
                activeStyle={activeStyle}
              >
                Battle
              </NavLink>
            </li>
          </ul>
          <button
            onClick={toggleTheme}
            style={{ fontSize: 30 }}
            className="btn-clear"
          >
            {theme ? "🔦" : "💡"}
          </button>
        </nav>
      )}
    </ThemeConsumer>
  );
}

export default Nav;
