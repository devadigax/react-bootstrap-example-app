import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import FloatingLabel from 'react-bootstrap/FloatingLabel'; // Import FloatingLabel

const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    // You can perform form validation and submit data to your backend
  };

  return (
    <Container className='mb-4'>
      <Card body className='card-container text-light bg-black'>
        <Row>
          <Col sm={6}>
          <h4>Contact Information</h4>
            <p>123 Street Name, City, Country</p>
            <p>Email: example@example.com</p>
            <p>Phone: +1234567890</p>
          </Col>
          <Col sm={6}>
            <Card body className='bg-dark text-light'>
              <h1>Contact Us</h1>
              <Form onSubmit={handleSubmit}>
                <FloatingLabel controlId="formName" label="Name">
                  <Form.Control type="text" className='bg-secondary text-light mb-4' placeholder="Enter your name" />
                </FloatingLabel>

                <FloatingLabel controlId="formEmail" label="Email address">
                  <Form.Control type="email" className='bg-secondary text-light mb-4' placeholder="Enter email" />
                </FloatingLabel>

                <FloatingLabel controlId="formSubject" label="Subject">
                  <Form.Control type="text" className='bg-secondary text-light mb-4' placeholder="Enter subject" />
                </FloatingLabel>

                <FloatingLabel controlId="formMessage" label="Message">
                  <Form.Control as="textarea" rows={5} className='bg-secondary text-light mb-4' placeholder="Enter your message" />
                </FloatingLabel>

                <Button variant="outline-light" className='w-100' type="submit">
                  Submit
                </Button>
              </Form>
            </Card>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default ContactUs;
