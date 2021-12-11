import React, { useState } from "react";
import { Row, Offcanvas, OffcanvasHeader, OffcanvasBody, Button } from "reactstrap";
import NavButton from "./NavButton";

const Nav = () => {
  const [open, setOpen] = useState<boolean>(false);

  const toggle = () => {
    console.log('toggled');
    setOpen(!open);
  }

  return <React.Fragment>
    <Button style={{ borderRadius: 50, margin: "1rem", float: "right" }} onClick={toggle}>Open</Button>
    <Offcanvas isOpen={open} toggle={toggle} direction={"end"}>
      <OffcanvasBody>
        <NavButton content={"Home"} linkTo="/" />
        <NavButton content={"Player Stats"} linkTo="/stats" />
        <NavButton content={"Player Comparison"} linkTo="/comparison" />
      </OffcanvasBody>
    </Offcanvas>
  </React.Fragment >
}

export default Nav;