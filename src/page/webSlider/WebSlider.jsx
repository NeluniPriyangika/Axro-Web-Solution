import React from 'react';
import './webSlider.css';
import Carousel from 'react-bootstrap/Carousel';
import CarouselImage1 from "../../asesst/CarouselImage1.jpg";
import CarouselImage2 from "../../asesst/CarouselImage2.jpg";
import CarouselImage3 from "../../asesst/CarouselImage3.jpg";

function WebSlider() {
  return (
    <div className='webSlider-main'>
       <Carousel data-bs-theme="dark">
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={CarouselImage1}
                alt="First slide"
                />
                <Carousel.Caption>
                <h5>Elevate Your Security with Our Home Security & Solution</h5>
                <p>Empower your peace of mind with our cutting-edge home security and solutions, where safety meets sophistication.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={CarouselImage2}
                alt="Second slide"
                />
                <Carousel.Caption>
                <h5>Your Gateway to Bespoke Software Solutions</h5>
                <p>Embark on a digital journey of innovation with our tailored software development services—where your ideas come to life, and excellence is our code.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={CarouselImage3}
                alt="Third slide"
                />
                <Carousel.Caption>
                <h5> Unleashing Innovation & Engineering Excellence</h5>
                <p>
                At the intersection of creativity and precision, we offer bespoke innovation and engineering solutions, shaping a future where possibilities know no bounds.
                </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </div>
  )
}

export default WebSlider
