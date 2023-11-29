import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Footer = () => {
  
  return (
    <Container>
    <Card body className='radius-15 text-light bg-black mb-4 shadow-lg d-none d-sm-block'>
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
        <hr></hr>
      <div className="text-center">
        <p>&copy; 2023 YourWebsite. All Rights Reserved.</p>
      </div>
      </Card>
    </Container>
  );
};

export default Footer;
