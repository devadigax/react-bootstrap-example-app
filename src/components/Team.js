import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'John Doe',
      position: 'CEO',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      name: 'Jane Smith',
      position: 'CTO',
      image: 'https://via.placeholder.com/150',
    },
    // Add more team members as needed
  ];

  return (
    <Container className='mt-5'>
      <h1>Our Team</h1>
      <Row>
        {teamMembers.map((member) => (
          <Col key={member.id} md={4}>
            <Card className="mb-4">
              <Card.Img variant="top" src={member.image} alt={member.name} />
              <Card.Body>
                <Card.Title>{member.name}</Card.Title>
                <Card.Text>{member.position}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Team;
