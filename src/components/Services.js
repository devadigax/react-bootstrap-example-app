import React from 'react';
import { Container, Card } from 'react-bootstrap';

const Services = () => {
  return (
    <Container className='mt-5'>
      <h1>Our Services</h1>
        <Card>
          <Card.Body>
            <Card.Title>Service 1</Card.Title>
            <Card.Text>
              Description of service 1 goes here. You can provide details about this service.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Service 2</Card.Title>
            <Card.Text>
              Description of service 2 goes here. You can provide details about this service.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Service 3</Card.Title>
            <Card.Text>
              Description of service 3 goes here. You can provide details about this service.
            </Card.Text>
          </Card.Body>
        </Card>
        {/* Add more Card components for additional services */}
    </Container>
  );
};

export default Services;
