import React from 'react'
import {Carousel} from 'react-bootstrap'
import { Container } from 'reactstrap'
import home from '../assets/images/home.jpg'
import apartment from '../assets/images/apartment.jpg'
import hause from '../assets/images/hause.jpg'
import tower from '../assets/images/tower.jpg'
import dom6 from '../assets/images/dom6.jpg'
import dom5 from '../assets/images/dom5.png'
import './Header.css'

function HomeCarousel() {
  return (
    <div className="">
        <Carousel>
          <Carousel.Item>
            <img
              className="imgcarousel d-block w-100"
              src={dom6}
              alt="First slide"
              
            />
            <Carousel.Caption className="backph">
              <h1 className="txt2">Построй дом в россрочку на 10 лет без %!</h1>
              {/* <p>......</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="imgcarousel d-block w-100"
              src={tower}
              alt="Third slide"
            />

            <Carousel.Caption className="backph">
              <h2 className="txt1">Купи квартиру в рассрочку до 10лет без %!</h2>
              {/* <p>... ...</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="imgcarousel d-block w-100"
              src={dom5}
              alt="Third slide"
            />

            <Carousel.Caption className="backph">
              <h1 className="txt3">Стань обладателем собственного дома!</h1>
              {/* <h5>...</h5> */}
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
    </div>
  )
}

export default HomeCarousel
