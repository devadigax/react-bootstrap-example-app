import React from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';

const About = () => {
  return (
    <Container>
      <Card body className='card-container text-light bg-black mb-4'>
      <h1 className="text-center mt-4 mb-4">About Us</h1>
      <Row>
        <Col md={6}>
          <Image src="https://via.placeholder.com/400" alt="About Us" fluid />
        </Col>
        <Col md={6}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget leo sapien.
            Curabitur accumsan, justo ac ullamcorper volutpat, odio metus aliquet velit, in
            scelerisque neque ex nec lacus. Quisque ut pulvinar libero.
          </p>
          <p>
            Sed convallis risus sed ipsum consequat, in suscipit sapien placerat. Integer quis
            consequat magna. Nulla facilisi.
          </p>
          <p>
            Nunc tincidunt, metus eget efficitur consectetur, purus tortor cursus magna, eu
            volutpat purus urna a velit. Nam nec magna id mi ultricies lacinia.
          </p>
        </Col>
      </Row>
      </Card>
    </Container>
  );
};

export default About;
