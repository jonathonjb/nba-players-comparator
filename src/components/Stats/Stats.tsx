import React, { useEffect } from "react";
import { fetchPlayerGames } from "../../actions";
import { connect } from "react-redux";
import { calculateStats } from "../../CalculateStats/calculateStats";
import CustomTable from "../CustomTable/CustomTable";

const Stats = (props: any) => {
  useEffect(() => {
    props.fetchPlayerGames(props.chosenPlayerId.id);
  }, []);

  const renderStats = () => {
    if (!props.games.data) {
      return <h1>Loading...</h1>
    }

    const total: any = calculateStats(props.games);

    if (total) {
      return <CustomTable objects={[total]} />
    }
  }

  return <React.Fragment>
    {renderStats()}
  </React.Fragment>
}

const mapStateToProps = (state: any, ownProps: any) => {
  return {
    chosenPlayerId: state.chosenPlayerId,
    games: state.games
  }
}

export default connect(mapStateToProps, { fetchPlayerGames })(Stats);