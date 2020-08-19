import React, { Component, Fragment } from "react";
import { battle } from "../../utils/api";
import Card from "../card/Card";
import Loading from "../loading/Loading";
import ProfileList from "../profile-list/ProfileList";
// import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import queryString from "query-string";

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      winner: null,
      loser: null,
      error: null,
      loading: true,
    };
  }
  componentDidMount() {
    const { playerOne, playerTwo } = queryString.parse(
      this.props.location.search
    );
    battle([playerOne, playerTwo])
      .then((players) => {
        this.setState({
          winner: players[0],
          loser: players[1],
          error: null,
          loading: false,
        });
      })
      .catch((error) =>
        this.setState({
          winner: null,
          loser: null,
          error: error.message,
          loading: false,
        })
      );
  }
  render() {
    const { winner, loser, error, loading } = this.state;
    if (loading) return <Loading text="Battling" speed={100} />;
    if (error) return <p className="center-text error">{error}</p>;
    return (
      <Fragment>
        <div className="grid space-around container-sm">
          <Card
            header={winner.score === loser.score ? "Tie" : "Winner"}
            subHeader={`Score: ${winner.score.toLocaleString()}`}
            avatar={winner.profile.avatar_url}
            name={winner.profile.login}
            href={winner.profile.avatar_url}
          >
            <ProfileList profile={winner.profile} />
          </Card>

          <Card
            header={winner.score === loser.score ? "Tie" : "Loser"}
            subHeader={`Score: ${loser.score.toLocaleString()}`}
            avatar={loser.profile.avatar_url}
            name={loser.profile.login}
            href={loser.profile.avatar_url}
          >
            <ProfileList profile={loser.profile} />
          </Card>
        </div>
        <Link
          // onClick={this.props.restPlayers}
          to="/battle"
          className="btn dark-btn btn-space"
        >
          Reset
        </Link>
      </Fragment>
    );
  }
}

// Results.propTypes = {
//   playerOne: PropTypes.string.isRequired,
//   playerTwo: PropTypes.string.isRequired,
//   restPlayers: PropTypes.func.isRequired,
// };

export default Results;
