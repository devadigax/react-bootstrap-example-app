import Carousel from 'react-bootstrap/Carousel';
import Art1 from '../assets/images/carousel/Art1.jpg';
import Art2 from '../assets/images/carousel/Art2.jpg';
import Art3 from '../assets/images/carousel/Art3.jpg';
import Art4 from '../assets/images/carousel/Art4.jpg';
import Art5 from '../assets/images/carousel/Art5.jpg';

function HomeCarousel() {
  return (
    <Carousel className='mb-4'>
      <Carousel.Item>
        <img className="radius-15 d-block w-100" src={Art1} alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="radius-15 d-block w-100" src={Art2} alt="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="radius-15 d-block w-100" src={Art3} alt="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="radius-15 d-block w-100" src={Art4} alt="4 slide" />
        <Carousel.Caption>
          <h3>4 slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="radius-15 d-block w-100" src={Art5} alt="5 slide" />
        <Carousel.Caption>
          <h3>5 slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeCarousel;
