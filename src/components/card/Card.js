import React from "react";
import { ThemeConsumer } from "../../contexts/theme";
import PropTypes from "prop-types";

function Card(props) {
  const { header, subHeader, avatar, href, name, children } = props;
  return (
    <ThemeConsumer>
      {({ theme }) => (
        <div className={`card bg-${theme ? "light" : "dark"}`}>
          <h4 className="header-lg center-text">{header}</h4>
          <img className="avatar" src={avatar} alt={`Avatar for ${name}`} />
          {subHeader && <h4 className="center-text">{subHeader}</h4>}
          <h2 className="center-text">
            <a className="link" href={href}>
              {name}
            </a>
          </h2>
          {children}
        </div>
      )}
    </ThemeConsumer>
  );
}

Card.propTypes = {
  header: PropTypes.string.isRequired,
  subHeader: PropTypes.string,
  avatar: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Card;
