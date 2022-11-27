import React from "react";
import logo from "../assets/logo.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
export const TopNav = () => {
  return (
    <Navbar expand="md" className="topNav" id="navbar" collapseOnSelect>
      <Container>
        <Link to="/">
          <img src={logo} alt="logo" width="150px"></img>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link className="nav-link" to="/skills">
              Skills
            </Link>
            <Link className="nav-link" to="/projects">
              Projects
            </Link>
            <Link className="nav-link" to="/about">
              About Me
            </Link>
            <Link className="nav-link" to="/contact ">
              Contact{" "}
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
