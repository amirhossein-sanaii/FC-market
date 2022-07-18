import {Container , Navbar} from 'react-bootstrap';

import style from './Footer.module.css'

const Footer=()=> {
  return (
    <Navbar className={style.footer}>
      <Container>
        <Navbar.Brand href="#home">Footer</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Footer;