import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <div className="footer-container">
    <footer className="container footer text-light mt-5">
      <Container>
        <Row>
          <Col md={6}>
            <h4>About Us</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus libero in
              ultricies mollis.
            </p>
          </Col>
          <Col md={6}>
            <h4>Contact Information</h4>
            <p>123 Street Name, City, Country</p>
            <p>Email: example@example.com</p>
            <p>Phone: +1234567890</p>
          </Col>
        </Row>
      </Container>
      <div className="text-center">
        <hr></hr>
        <p>&copy; 2023 YourWebsite. All Rights Reserved.</p>
      </div>
    </footer>
    </div>
  );
};

export default Footer;
