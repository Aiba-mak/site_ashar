import React from 'react'
import {Carousel} from 'react-bootstrap'
import { Container } from 'reactstrap'
import home from '../assets/images/home.jpg'
import apartment from '../assets/images/apartment.jpg'
import hause from '../assets/images/hause.jpg'
import './Header.css'

function HomeCarousel() {
  return (
    <div className=" mt-4">
        <Carousel>
          <Carousel.Item>
            <img
              className="imgcarousel d-block w-100"
              src={home}
              alt="First slide"
              
            />
            <Carousel.Caption>
              <h1>Построй дом в россрочку на 10 лет без %</h1>
              {/* <p>......</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="imgcarousel d-block w-100"
              src={apartment}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h1>Купи квартиру в рассрочку на 10 лет без %</h1>
              {/* <p>... ...</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="imgcarousel d-block w-100"
              src={hause}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h1>Стань обладателем собственного дома </h1>
              {/* <h5>...</h5> */}
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
    </div>
  )
}

export default HomeCarousel
