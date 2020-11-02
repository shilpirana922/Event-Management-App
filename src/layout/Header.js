
import React from "react";
import { Navbar, NavbarBrand, NavbarText } from "reactstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar color="info" light>
      <NavbarBrand tag={Link} to="/" className="text-white">Event Management App</NavbarBrand>
      <NavbarText className="text-white float-right">
        A simple event manage app
      </NavbarText>
    </Navbar>
  );
};

export default Header;
