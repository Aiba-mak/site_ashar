import React, { useState } from 'react';

import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import { NavbarToggler,  NavbarBrand, Nav, Form, Button, NavLink, Container, Modal } from 'reactstrap';

import {Navbar, NavDropdown, FormControl } from 'react-bootstrap';
import './Header.css'
import Calculator from '../pages/Calculator';

function Header() {
  const [calculate, setCalculate] = useState(false)

return (

  
    <div className="HeaderMainDiv fixed-top">
      <Container>
    <Navbar className='nav'>
    <NavbarBrand className="HeaderNavbarBrand" href="/"> 
      <div className="HeaderLogo ml-5"></div>      
    </NavbarBrand>
    <NavbarToggler aria-controls="basic-navbar-nav" />
    <NavbarCollapse id="basic-navbar-nav">
    <Nav className="mr-auto">
        <NavLink className = "HeaderNavlinks" href="/">ГЛАВНАЯ</NavLink>
        <NavDropdown className = "NavDropDown" title="О НАС" href="/about-us/:id">
        
        <NavLink href="/condition">Условия</NavLink>
        <NavLink href="/step">Этапы</NavLink>
        <NavLink href="/pre">Преимущества</NavLink>
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
    )
}

export default Header