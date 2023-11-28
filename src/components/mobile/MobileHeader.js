import React from 'react';
import { useState, useEffect } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';

const MobileHeader = () => {
    const [showHeader, setShowHeader] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setShowHeader(true);
            } else {
                setShowHeader(false);
            }
        };

        window.addEventListener('resize', handleResize);

        // Initial check on mount
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className={`d-lg-none ${showHeader ? 'd-block' : 'd-none'}`} style={{ marginTop: '-75px' }}>
            <Container className='mb-4'>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">My Website</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Navbar>
            </Container>
        </div>
    );
};

export default MobileHeader;
