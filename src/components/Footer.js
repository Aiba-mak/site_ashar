import React from 'react'
import './Footer.css'
import { Container } from 'reactstrap'
import { Link, BrowserRouter, useHistory } from 'react-router-dom'

function Footer() {
    const history=useHistory()
    return (
        <div className='footer'>
            <div className="footercontainer">
            <BrowserRouter>
                <Container >
                    <nav className="footer-menu mt-5">
                        <div className="d-flex justify-content-around "> 
                            <div className="footer-group">
                                <ul>
                                    <h4 className="footer-title">О нас</h4>
                                    <li className="onas">
                                        <a href="/about-us/:id">О нас</a>
                                    </li>
                                    <li>
                                        <a href="/confident">Правила конфиденциальности в отношении авторских прав</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="footer-group">
                                <ul>
                                    <h4 className="footer-title">Общее</h4>
                                    <li>
                                        <a  href="#">иаоли</a>
                                    </li>
                                    <li>
                                        <a href="#">фывав</a>
                                    </li>
                                    <li>
                                        <a href="#">фываывфа</a>
                                    </li>
                                    <li>
                                        <a href="#">фвыафывафыва</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="footer-group">
                                <ul>
                                    <h4 className="footer-title">Контакты</h4>
                                    <li>
                                        Свяжитесь с нами
                                    </li>
                                    <li>
                                        +996 51651651651
                                    </li>
                                    <li>
                                    <a href="/contact">Контакты</a>
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
