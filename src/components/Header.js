import React, { useState } from 'react';

import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import { NavbarToggler,  NavbarBrand, Nav, Form, Button, NavLink, Container, Modal } from 'reactstrap';

import {Navbar, NavDropdown, FormControl } from 'react-bootstrap';
import './Header.css'
import Calculator from '../pages/Calculator';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faClock, // the clock icon
    faUserCircle, // the user circle icon
    faMapMarkerAlt,
    faPhoneSlash,
    faMobileAlt,
    faFacebook,
    faEnvelope
    
} from '@fortawesome/free-solid-svg-icons'


function Header() {
  const [calculate, setCalculate] = useState(false)

return (<>
    <div className="Header_Contacts">
      <a className="otstup1" href="mailto:aibekmamaev94@gmail.com"><FontAwesomeIcon icon={faEnvelope} /> ashar.kg@gmail.com</a>
      <p className="otstup">ddddddd</p>
      <a className="otstupo" href="tel:+996507566971"><FontAwesomeIcon icon={faMobileAlt} /> +996 (509) 515-500</a>
      <p className="otstup">ddddddd</p>
      <a className="otstup1" href="tel:+996507566971"><FontAwesomeIcon icon={faMobileAlt} /> +996 (559) 515-500</a>
      <p className="otstup">ddddddd</p>
      <p className="sch"><FontAwesomeIcon icon={faClock} /> График р-ты: Пн-пт, 09:00 - 18:00</p>
    </div>

    <div className="fixed-top" style={{position: "sticky"}}>
    <div className="HeaderMainDiv ">
      <Container>
      {/* <nav className="header-menu mt-5">  
        <div className="d-flex justify-content-around "> 
         <NavLink className="HeaderLogo ml-5" href="/" ></NavLink>
         <NavLink className = "HeaderNavlinks" href="/">ГЛАВНАЯ</NavLink>
         <NavDropdown className = "NavDropDown" title="О НАС">                            
         <NavLink className="pod" href="/condition">Условия</NavLink>
         <NavLink className="pod" href="/step">Этапы</NavLink>
         <NavLink className="pod" href="/pre">Преимущества</NavLink>
         </NavDropdown>
         <NavLink className = "HeaderNavlinks" href="/questions">ВОПРОСЫ</NavLink>
         <NavLink className = "HeaderNavlinks" href="/contact">КОНТАКТЫ</NavLink>
         <NavLink className = "HeaderNavlinks" onClick={()=>setCalculate(true)}>КАЛЬКУЛЯТОР</NavLink>
        </div>
       </nav> */}


    <Navbar className='nav'>
    <NavbarBrand className="HeaderNavbarBrand" hrHeader__Contactsef="/"> 
    <NavLink className="HeaderLogo ml-5" href="/" ></NavLink>
    </NavbarBrand>
    <NavbarToggler aria-controls="basic-navbar-nav" />
    <NavbarCollapse id="basic-navbar-nav">
    <Nav className="mr-auto mx-5">
        <NavLink className = "HeaderNavlinks" href="/">ГЛАВНАЯ</NavLink>
        <NavDropdown className = "NavDropDown" title="О НАС">
        
        <NavLink className="pod" href="/condition">Условия</NavLink>
        <NavLink className="pod" href="/step">Этапы</NavLink>
        <NavLink className="pod" href="/pre">Преимущества</NavLink>
        </NavDropdown>
        <NavLink className = "HeaderNavlinks" href="/questions">ВОПРОСЫ</NavLink>
        <NavLink className = "HeaderNavlinks" href="/contact">КОНТАКТЫ</NavLink>
        <NavLink className = "HeaderNavlinks" onClick={()=>setCalculate(true)}>КАЛЬКУЛЯТОР</NavLink>
        <div className="animation start-home"></div>
    </Nav>
    </NavbarCollapse>
    </Navbar>
    </Container>
    {calculate ? <Calculator calculate={calculate} setCalculate={setCalculate}/> : ''}
    </div>
    </div>
    </>
  );
}

export default Header