import React from 'react';
import { Container, Card } from 'react-bootstrap';

const Services = () => {
  return (
    <Container>
      <Card body className='radius-15 text-light bg-black mb-4'>
      <h1 className="text-center mt-4 mb-4">Our Services</h1>
        <Card className='bg-secondary text-light mb-4'>
          <Card.Body>
            <Card.Title>Service 1</Card.Title>
            <Card.Text>
              Description of service 1 goes here. You can provide details about this service.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className='bg-secondary text-light mb-4'>
          <Card.Body>
            <Card.Title>Service 2</Card.Title>
            <Card.Text>
              Description of service 2 goes here. You can provide details about this service.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className='bg-secondary text-light mb-4'>
          <Card.Body>
            <Card.Title>Service 3</Card.Title>
            <Card.Text>
              Description of service 3 goes here. You can provide details about this service.
            </Card.Text>
          </Card.Body>
        </Card>
        {/* Add more Card components for additional services */}
        </Card>
    </Container>
  );
};

export default Services;
