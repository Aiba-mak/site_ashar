import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBBtn, MDBInput, MDBContainer } from "mdbreact";
import Axios from "axios";
import { Col, Card, CardImg, CardBody, CardTitle } from "reactstrap";
import './Home.css'

import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';
import InstagramEmbed from 'react-instagram-embed';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faClock, // the clock icon
    faUserCircle, // the user circle icon
    faMapMarkerAlt,
    faPhoneSlash,
    faMobileAlt,
    faFacebook,
    faEnvelope,
    faCamera
    
} from '@fortawesome/free-solid-svg-icons'


function Contact(props) {

  console.log(props.props)

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [advice, setAdvice] = useState("");
  const [information, setInformation] = useState("");

  function postData(id){
    const data = {
      id,
      name,
      email, 
      subject,
      advice,
      information
    }
    if(name !== '' && email !== '') {
    async function postOrder(id){
        const res = await Axios.post(`${process.env.REACT_APP_API_URL_PRODUCTS}/orders`, data)
    postOrder(id)
  }}else{console.log("order has not been sent")}
    
}

  return (    
    <section className="contact">
      <h1 className="h1-responsive font-weight-bold text-center my-5">
      Наши контакты!
      </h1>
      
      <MDBRow>
        <MDBCol>
          <MDBContainer>
          <div
            id="map-container"
            className="rounded z-depth-1-half map-container"
            style={{ height: "400px" }}
          >
            <iframe
              // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d93531.71079379348!2d74.49115431079855!3d42.89677465293526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec7d979079afb%3A0x9bb594c6a6f88787!2z0J_QtdGA0LLQvtC80LDQudGB0LrQuNC5INGA0LDQudC-0L0sINCR0LjRiNC60LXQug!5e0!3m2!1sru!2skg!4v1599171814146!5m2!1sru!2skg"
              src="https://maps.google.com/maps?q=kievskaya%20107%2F1&t=&z=13&ie=UTF8&iwloc=&output=embed"
              title="This is a unique title"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
            />
          </div>
          <br />
          <MDBRow className="text-center">
            <MDBCol md="4">
              <MDBBtn tag="a" floating color="blue" className="accent-1">
                <MDBIcon icon="map-marker-alt" />
              </MDBBtn>
              <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
              <p className="icon"><FontAwesomeIcon icon={faMapMarkerAlt} /> Бишкек, ул. Киевская 107/1</p> 
              <p className="icon"><FontAwesomeIcon icon={faClock} /> График работы: Пн-пт, 9:00-18:00</p>
            </MDBCol>
            <MDBCol md="4">
              <MDBBtn tag="a" floating color="blue" className="accent-1">
                <MDBIcon icon="phone" />
              </MDBBtn>

              <p href="tel:+996507566971"><FontAwesomeIcon icon={faMobileAlt} /> +996 (509) 515-500</p>
              <p href="tel:+996507566971"><FontAwesomeIcon icon={faMobileAlt} /> +996 (559) 515-500</p>
              
            </MDBCol>
            <MDBCol md="4">
              <MDBBtn tag="a" floating color="blue" className="accent-1">
                <MDBIcon icon="envelope" />
              </MDBBtn>
              <p className="icon"><FontAwesomeIcon icon={faEnvelope} /> ashar.kg@gmail.com</p>
              <p className="icon"><FontAwesomeIcon icon={faCamera}/>  ashar_co</p>
            {/* <li>
              <a><InstagramEmbed
                url='https://www.instagram.com/ashar_co/'
                maxWidth={320}
                hideCaption={false}
                containerTagName='div'
                protocol=''
                injectScript
                onLoading={() => {}}
                onSuccess={() => {}}
                onAfterRender={() => {}}
                onFailure={() => {}}
              /> ashar_co</a>
            </li> */}
            </MDBCol>
          </MDBRow>
          </MDBContainer>
        </MDBCol>
      </MDBRow>
    </section>
  );
}

export default Contact;
