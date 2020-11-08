import React from 'react'
import './Footer.css'
import { Container } from 'reactstrap'
import { Link, BrowserRouter, useHistory } from 'react-router-dom'
import logo from '../assets/logo.png' 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faClock, // the clock icon
    faUserCircle, // the user circle icon
    faMapMarkerAlt,
    faPhoneSlash,
    faMobileAlt,
    faFacebook,
    faEnvelope,
    faPhone,
    faPhoneSquare,
    faCamera,
    
    
} from '@fortawesome/free-solid-svg-icons'

// import { fa } from '@fortawesome/free-brands-svg-icons' 

function Footer() {
    const history=useHistory()
    return (
        <div className='footer'>
            <div className="footercontainer">
            {/* <BrowserRouter> */}
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
                                        <a href="/condition">Условия</a>                                    <li>
                                        <a href="/questions">Вопросы</a>
                                    </li>
                                    <li>
                                        <a href="/contact">Контакты</a>
                                    </li>
                                    </li>
                                    <li>
                                        <a href="/step">Этапы приобретения</a>
                                    </li>
                                    <li>
                                        <a href="/pre">Наши преимущества</a>
                                    </li>

                                </ul>
                            </div>

                            <div className="footer-group">
                                <ul>
                                    <h5 className="footer-title">Контакты</h5>

                                    <li>
                                    <a href="tel:+996509515500"><FontAwesomeIcon icon={faPhoneSquare}  />  +996 (509) 515-500</a>
                                    </li>
                                    <li>
                                    <a href="tel:+996559515500"><FontAwesomeIcon icon={faPhoneSquare} />  +996 (559) 515-500</a>
                                    </li>
                                    <li>
                                    <a href="tel:0312611402"><FontAwesomeIcon icon={faPhoneSquare} />  +996 (312) 611-402</a>
                                    </li>
                                    <li>
                                    <a href="mailto:ashar.kg@gmail.com"><FontAwesomeIcon icon={faEnvelope} />  ashar.kg@gmail.com</a>
                                    </li>
                                    <li>
                                    <a href="instagram://user?username={ashar_co}"><FontAwesomeIcon icon={faCamera} />  ashar_co</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </Container>
            {/* </BrowserRouter> */}
            </div>
        </div>
    )
}

export default Footer
