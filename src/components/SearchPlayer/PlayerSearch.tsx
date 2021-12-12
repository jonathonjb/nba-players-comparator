import React, { useState } from "react";
import { searchPlayer } from "../../actions";
import { connect } from "react-redux";
import { Form, Button, Input, FormGroup, Row, Col } from "reactstrap";
import CustomTable from "../CustomTable/CustomTable";

const PlayerSearch = (props: any) => {
  const [name, setName] = useState<string>('');

  const getPlayerAttributes = (player: any) => {
    return {
      name: player.first_name + " " + player.last_name,
      height: player.height_feet === null ? '' : player.height_feet + "'" + player.height_inches,
      position: player.position === null ? '' : player.position,
      team: player.team.abbreviation === null ? '' : player.team.abbreviation
    }
  }

  const renderTable = () => {
    if (!props.players.list) {
      return null;
    }
    const playersFields = props.players.list.map((player: any) => {
      return getPlayerAttributes(player);
    })
    return <CustomTable objects={playersFields} />
  }

  return <React.Fragment>
    <Form>
      <FormGroup>
        <Input name="name" type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
      </FormGroup>
    </Form>
    <Button onClick={() => props.searchPlayer(name)}>Submit</Button>
    {renderTable()}
  </React.Fragment>
}

const mapStateToProps = (state: any) => {
  return {
    players: state.players
  }
};

export default connect(mapStateToProps, { searchPlayer })(PlayerSearch);