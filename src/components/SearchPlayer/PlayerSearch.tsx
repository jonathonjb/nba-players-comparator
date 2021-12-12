import React, { useState } from "react";
import { searchPlayer, choosePlayerId } from "../../actions";
import { connect } from "react-redux";
import { Form, Button, Input, FormGroup } from "reactstrap";
import CustomTable from "../CustomTable/CustomTable";
import { useNavigate } from "react-router-dom";

const PlayerSearch = (props: any) => {
  const [name, setName] = useState<string>('');
  const navigate = useNavigate();

  const getPlayerAttributes = (player: any) => {
    return {
      name: player.first_name + " " + player.last_name,
      height: player.height_feet === null ? '' : player.height_feet + "'" + player.height_inches,
      position: player.position === null ? '' : player.position,
      team: player.team.abbreviation === null ? '' : player.team.abbreviation
    }
  }

  const renderTable = () => {
    if (!props.fetchedPlayers.list) {
      return null;
    }
    const playersFields = props.fetchedPlayers.list.map((player: any) => {
      return getPlayerAttributes(player);
    })
    return <CustomTable objects={playersFields} handleClick={handleClick} />
  }

  const handleClick = (index: number) => {
    props.choosePlayerId(props.fetchedPlayers.list[index].id);
    navigate(`/stats`);
  }

  return <React.Fragment>
    <Form>
      <FormGroup>
        <Input name="name" type="text" placeholder="Name" autoComplete="off" value={name} onChange={e => setName(e.target.value)} />
      </FormGroup>
    </Form>
    <Button onClick={() => props.searchPlayer(name)}>Submit</Button>
    {renderTable()}
  </React.Fragment>
}

const mapStateToProps = (state: any) => {
  return {
    fetchedPlayers: state.fetchedPlayers
  }
};

export default connect(mapStateToProps, { searchPlayer, choosePlayerId })(PlayerSearch);