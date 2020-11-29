import React from 'react'
import {Carousel} from 'react-bootstrap'
import { Container } from 'reactstrap'
import home from '../assets/images/home.jpg'
import apartment from '../assets/images/apartment.jpg'
import hause from '../assets/images/hause.jpg'
import bugg from '../assets/images/bugg.png'
import lex from '../assets/images/lex.png'
import mers from '../assets/images/mers.png'
import './Header.css'

function HomeCarousel() {
  return (
    <div className="">
        <Carousel>
          <Carousel.Item>
            <img
              className="imgcarousel d-block w-100"
              src={lex}
              alt="First slide"
              
            />
            <Carousel.Caption className="backph">
              <h1 className="txt2">Купи авто в россрочку до 2-х лет без %!</h1>
              {/* <p>......</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="imgcarousel d-block w-100"
              src={bugg}
              alt="Third slide"
            />

            <Carousel.Caption className="backph">
              <h2 className="txt1">Настало время обновить авто? Сделай это вместе с нами!</h2>
              {/* <p>... ...</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="imgcarousel d-block w-100"
              src={mers}
              alt="Third slide"
            />

            <Carousel.Caption className="backph">
              <h1 className="txt3">Мы поможем купить вам авто вашей мечты!</h1>
              {/* <h5>...</h5> */}
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
    </div>
  )
}

export default HomeCarousel
