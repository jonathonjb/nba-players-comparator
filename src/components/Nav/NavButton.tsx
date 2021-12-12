import React from "react";
import { Row } from "reactstrap"
import { Link } from 'react-router-dom';

type NavButtonProps = {
  content: string,
  linkTo: string
}

const NavButton = (props: NavButtonProps) => {
  return <React.Fragment>
    <Row>
      <Link to={props.linkTo} style={{ textDecoration: "none", color: "black" }}>
        <div style={{
          textAlign: "center",
          fontSize: "2rem",
          width: "100%",
          marginTop: "1rem",
          cursor: "pointer"
        }}>
          {props.content}
        </div>
      </Link>
    </Row>
  </React.Fragment>
}

export default NavButton;