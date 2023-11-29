import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

const BottomNavbar = () => {
    return (
        <Navbar fixed="bottom" bg="dark" variant="dark" className="d-block d-sm-none">
            <Container>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="w-100 justify-content-between">
                        <Nav.Link as={Link} to="/"><i className="bi bi-house"></i></Nav.Link>
                        <Nav.Link as={Link} to="/team"><i className="bi bi-people-fill"></i></Nav.Link>
                        <Nav.Link as={Link} to="/services"><i class="bi bi-grid-1x2-fill"></i></Nav.Link>
                        <Nav.Link as={Link} to="/about"><i className="bi bi-info-circle"></i></Nav.Link>
                        <Nav.Link as={Link} to="/contact"><i className="bi bi-telephone-fill"></i></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default BottomNavbar;
