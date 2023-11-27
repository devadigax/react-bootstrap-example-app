import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import HomeCarousel from './Carousel.js';

const Homepage = () => {
  return (
    <div>
      <Container>
      <HomeCarousel />
        <h1>Welcome to My Website</h1>
        <p>
          This is a simple React homepage using Bootstrap for styling.
        </p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </Container>

      <Container>
        <Row>
          <Col>
            <h2>About</h2>
            <p>This is where you can write something about yourself or your website.</p>
          </Col>
          <Col>
            <h2>Services</h2>
            <p>Describe the services or features you offer.</p>
          </Col>
          <Col>
            <h2>Contact</h2>
            <p>Include contact information or a contact form.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Homepage;
