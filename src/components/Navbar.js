import {Nav,Navbar,Container} from 'react-bootstrap';

export const NavbarComponents = ()=> {
    return (
        <Navbar  bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="/">Anime Ku</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Top Anime</Nav.Link>
                <Nav.Link href="#link">List</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}