import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
import '../styles/navbar.css'
export const DashboardHeader = () => {
  const usuarioA = localStorage.getItem('username')

  return (
    <Navbar expand="lg" className="bg-body-tertiary" >
      <Container fluid> 
        <div className="flex items-center justify-between ">
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Navbar.Toggle aria-controls="navbarScroll" />
        </div>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavLink to="/Dashboard">Home</NavLink>
            <NavLink to="/Profiles">Profile</NavLink>
            <NavLink to="/Products">Products</NavLink>
          </Nav>
          <Navbar.Brand href="#">{usuarioA}</Navbar.Brand>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
