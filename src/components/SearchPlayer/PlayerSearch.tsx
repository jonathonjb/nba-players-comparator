import React, { useState } from "react";
import { searchPlayer } from "../../actions";
import { connect } from "react-redux";
import { Form, Button, Input, FormGroup, Row, Col } from "reactstrap";

const PlayerSearch = (props: any) => {
  const [name, setName] = useState<string>('');


  const renderPlayer = (player: any) => {
    return <Row>
      <Col>{player.first_name}</Col>
      <Col>{player.last_name}</Col>
      <Col>{player.team.full_name}</Col>
    </Row>
  }

  const renderList = () => {
    if (!props.players.list) {
      return;
    }
    return <div>
      {props.players.list.map((player: any) => renderPlayer(player))}
    </div>
  }

  return <React.Fragment>
    <Form>
      <FormGroup>
        <Input name="name" type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
      </FormGroup>
    </Form>
    <Button onClick={() => props.searchPlayer(name)}>Submit</Button>
    {renderList()}
  </React.Fragment>
}

const mapStateToProps = (state: any) => {
  return {
    players: state.players
  }
};

export default connect(mapStateToProps, { searchPlayer })(PlayerSearch);