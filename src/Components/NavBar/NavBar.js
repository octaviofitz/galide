import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import '../NavBar/navBar.css';

function BasicExample() {
  return (
    <Navbar bg="light" expand="lg" className='navBar'>
      <Container>
      <Navbar.Brand><Link to='/'><img src={process.env.PUBLIC_URL + "/img/icono.png"} className='logo' alt='FC producciones' /></Link></Navbar.Brand>   
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#nosotros" className='links'>NOSOTROS</Nav.Link>
            <Nav.Link href="#servicios" className='links'>SERVICIOS</Nav.Link>
            <Nav.Link href="#clientes" className='links'>CLIENTES</Nav.Link>
            <Nav.Link href="#contacto" className='links'>CONTACTO</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;