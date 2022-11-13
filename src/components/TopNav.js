import React from "react";
import logo from "../assets/logo.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export const TopNav = () => {
  return (
    <Navbar expand="md" className="topNav" id="navbar" collapseOnSelect >
      <Container>
        <Navbar.Brand href="#">
          <img src={logo} alt="logo" width="150px"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#about">About Me</Nav.Link>
            <Nav.Link href="#contact ">Contact </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

// <div id="navbar" className="topNav">
//   <nav className="navbar navbar-expand-md bg-none">
//     <div className="container">
//       <a className="navbar-brand" href="#">
//         <img src={logo} alt="logo" width="60px" />
//       </a>
//       <button
//         className="navbar-toggler"
//         type="button"
//         data-bs-toggle="collapse"
//         data-bs-target="#navbarSupportedContent"
//         aria-controls="navbarSupportedContent"
//         aria-expanded="false"
//         aria-label="Toggle navigation"
//       >
//         <span className="navbar-toggler-icon"></span>
//       </button>
//       <div className="collapse navbar-collapse" id="navbarSupportedContent">
//         <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
//           <li className="nav-item">
//             <a
//               className="nav-link active"
//               aria-current="page"
//               href="#skills"
//             >
//               Skills
//             </a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="#projects">
//               Projects
//             </a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="#about">
//               About Me
//             </a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="#contact">
//               Contact
//             </a>
//           </li>
//         </ul>
//       </div>
//     </div>
//   </nav>
// </div>
