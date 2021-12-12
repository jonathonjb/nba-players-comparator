import React, { useEffect } from "react";
import { fetchPlayerGames } from "../../actions";
import { connect } from "react-redux";
import { calculateStats } from "../../CalculateStats/calculateStats";
import CustomTable from "../CustomTable/CustomTable";

const Stats = (props: any) => {
  useEffect(() => {
    props.fetchPlayerGames(props.chosenPlayer.data.id);
  }, []);

  const renderStats = () => {
    if (!props.games.data) {
      return <h1>Loading...</h1>
    }

    const total: any = calculateStats(props.games);
    const name = props.chosenPlayer.data.first_name + " " + props.chosenPlayer.data.last_name;

    if (total) {
      return <div>
        <CustomTable title={name} objects={[total]} />
      </div>
    }
  }

  return <React.Fragment>
    {renderStats()}
  </React.Fragment>
}

const mapStateToProps = (state: any, ownProps: any) => {
  return {
    chosenPlayer: state.chosenPlayer,
    games: state.games
  }
}

export default connect(mapStateToProps, { fetchPlayerGames })(Stats);