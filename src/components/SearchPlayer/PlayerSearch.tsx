import React, { useEffect } from "react";
import { searchPlayer } from "../../actions";
import { connect } from "react-redux";

const PlayerSearch = (props: any) => {
  useEffect(() => {
    props.searchPlayer("Giannis");
  }, [props])

  return <React.Fragment>

  </React.Fragment>
}

export default connect(null, { searchPlayer })(PlayerSearch);