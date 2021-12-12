import React from "react";
import { fetchPlayerGames } from "../../actions";
import { connect } from "react-redux";

const Stats = (props: any) => {

  return <React.Fragment>
  </React.Fragment>
}

const mapStateToProps = (state: any, ownProps: any) => {
  return {
    games: state.games
  }
}

export default connect(mapStateToProps, { fetchPlayerGames })(Stats);