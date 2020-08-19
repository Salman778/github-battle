import React, { Component, Fragment } from "react";
import Instructions from "../instructions/Instructions";
import Player from "../player/Player";
import PlayerPreview from "../player-preview/PlayerPreview";
import { Link } from "react-router-dom";
import "./Battle.css";

class Battle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerOne: null,
      playerTwo: null,
      // battle: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.onRestPlayers = this.onRestPlayers.bind(this);
  }
  handleSubmit(id, username) {
    this.setState({
      [id]: username,
    });
  }
  handleReset(id) {
    this.setState({
      [id]: null,
    });
  }
  onRestPlayers() {
    this.setState({
      playerOne: null,
      playerTwo: null,
      // battle: false,
    });
  }
  render() {
    const { playerOne, playerTwo } = this.state;
    // if (battle)
    //   return (
    //     <Results
    //       restPlayers={this.onRestPlayers}
    //       playerOne={playerOne}
    //       playerTwo={playerTwo}
    //     />
    //   );
    return (
      <Fragment>
        <Instructions />
        <div className="players-container">
          <h1 className="center-text header-lg">Players</h1>
          <div className="row space-around">
            {!playerOne ? (
              <Player
                label="Player One"
                onSubmit={(username) =>
                  this.handleSubmit("playerOne", username)
                }
              />
            ) : (
              <PlayerPreview
                username={playerOne}
                label="Player One"
                onReset={() => this.handleReset("playerOne")}
              />
            )}
            {!playerTwo ? (
              <Player
                label="Player Two"
                onSubmit={(username) =>
                  this.handleSubmit("playerTwo", username)
                }
              />
            ) : (
              <PlayerPreview
                username={playerTwo}
                label="Player Two"
                onReset={() => this.handleReset("playerTwo")}
              />
            )}
          </div>
          {playerOne && playerTwo && (
            <Link
              className="btn dark-btn btn-space"
              to={{
                pathname: "/battle/results",
                search: `?playerOne=${playerOne}&playerTwo=${playerTwo}`,
              }}
            >
              Battle
            </Link>
            // <button
            //   className="btn dark-btn btn-space"
            //   onClick={() =>
            //     this.setState({
            //       battle: true,
            //     })
            //   }
            // >
            //   Battle
            // </button>
          )}
        </div>
      </Fragment>
    );
  }
}

export default Battle;
