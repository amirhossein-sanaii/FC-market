

import { LinkContainer } from 'react-router-bootstrap'

//bootstrap
import {Container , Nav , Navbar} from 'react-bootstrap';

const NavbarHeader = ()=> {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <LinkContainer to='/'>
          <Navbar.Brand>FC Market</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link>
                <i className='fa fa-home p-2'></i>
                Home 
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/stor">
              <Nav.Link>
                <i className='fa fa-shopping-cart p-2'></i>
                Stor
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarHeader ;