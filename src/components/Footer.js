import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  
  return (
    <Container>
    <footer className="footer text-light shadow-lg d-none d-sm-block">
      
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
      
      <div className="text-center">
        <hr></hr>
        <p>&copy; 2023 YourWebsite. All Rights Reserved.</p>
      </div>
    </footer>
    </Container>
  );
};

export default Footer;
