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
    {
      id: 3,
      name: 'Walter White',
      position: 'CMO',
      image: 'https://via.placeholder.com/150',
    },
    // Add more team members as needed
  ];

  return (
    <Container>
      <Card body className='radius-15 text-light bg-black mb-4'>
      <h1 className="text-center mt-4 mb-4">Our Team</h1>
      <Row xs={1} md={2} lg={3} className="g-4">
        {teamMembers.map((member) => (
          <Col key={member.id}>
            <Card className="profile-card">
              <Card.Img variant="top" className="profile-image" src={member.image} alt={member.name} />
              <div>
                <Card.Body className="text-light">
                  <Card.Title>{member.name}</Card.Title>
                  <Card.Text>{member.position}</Card.Text>
                </Card.Body>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
      </Card>
    </Container>
  );
};

export default Team;
