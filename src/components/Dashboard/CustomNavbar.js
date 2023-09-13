import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../../App.scss';
import * as FaIcons from 'react-icons/fa';
import * as ImIcons from 'react-icons/im';

function CustomNavbar() {
  return (
    <Navbar id="navbar" expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
        <img
            src="/sena-logo.png"
            className="custom-logo" // Agrega la clase custom-logo aquí
            alt="SENA Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
          <NavDropdown title=<FaIcons.FaBell/> id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Notificacion 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Notificacion 2</NavDropdown.Item>
          </NavDropdown>
            <Nav.Link href="#link"><FaIcons.FaUserAlt/></Nav.Link>
            <NavDropdown title="Oscar Peña" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Mi perfil</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Configuraciones</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">Cerrar Sesión</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
