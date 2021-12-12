import React, { useEffect } from "react";
import { fetchPlayerGames } from "../../actions";
import { connect } from "react-redux";

const Stats = (props: any) => {
  useEffect(() => {
    props.fetchPlayerGames();
  }, [props])

  return <React.Fragment>

  </React.Fragment>
}

export default connect(null, { fetchPlayerGames })(Stats);