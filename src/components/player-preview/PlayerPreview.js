import React from "react";
import { ThemeConsumer } from "../../contexts/theme";
import PropTypes from "prop-types";
import { FaTimesCircle } from "react-icons/fa";
// import './PlayerPreview.css';

function PlayerPreview(props) {
  const { username, label, onReset } = props;
  return (
    <ThemeConsumer>
      {({ theme }) => (
        <div className="column player">
          <h3 className="player-label">{label}</h3>
          <div className={`row bg-${theme ? "light" : "dark"}`}>
            <div className="player-info">
              <img
                className="avatar-small"
                src={`https://github.com/${username}.png?size=200`}
                alt={`Avatar for ${username}`}
              />
              <a className="link" href={`https://github.com/${username}`}>
                {username}
              </a>
            </div>
            <button className="btn-clear flex-center" onClick={onReset}>
              <FaTimesCircle color="rgb(194, 57, 42)" size={26} />
            </button>
          </div>
        </div>
      )}
    </ThemeConsumer>
  );
}

PlayerPreview.propTypes = {
  username: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onReset: PropTypes.func.isRequired,
};

export default PlayerPreview;
