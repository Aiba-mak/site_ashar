import React from 'react'
import './Footer.css'
import { Container } from 'reactstrap'
import { Link, BrowserRouter, useHistory } from 'react-router-dom'
import logo from '../assets/logo.png' 

function Footer() {
    const history=useHistory()
    return (
        <div className='footer'>
            <div className="footercontainer">
            <BrowserRouter>
                <Container >
                    <nav className="footer-menu mt-5">
                        <div className="d-flex justify-content-around "> 
                            <img
                                className="img"
                                src={logo}
                                alt=""
                            />
                            <div className="footer-group">
                                <ul>
                                    <h5 className="footer-title">Быстрые ссылки</h5>
                                    <li className="onas">
                                        <a href="/condition">Условия</a>
                                    </li>
                                    <li>
                                        <a href="/step">Этапы</a>
                                    </li>
                                    <li>
                                        <a href="/pre">Преимущества</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="footer-group">
                                <ul>
                                    <h5 className="footer-title">Контакты</h5>
                                    <li>
                                        Свяжитесь с нами
                                    </li>
                                    <li>
                                    <a href="tel:+996507566971">Тел: +996507566971</a>
                                    </li>
                                    <li>
                                    <a href="tel:+996507566971">Тел: +996557566971</a>
                                    </li>
                                    <li>
                                    <a href="mailto:aibekmamaev94@gmail.com">Email: aiba.mak94@gmail.com</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </Container>
            </BrowserRouter>
            </div>
        </div>
    )
}

export default Footer
