import React from 'react'
import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn } from "mdbreact";
import sem from '../assets/images/sem.jpg' 
import stroi from '../assets/images/stroi.jpg' 
import uch from '../assets/images/uch.jpg' 

function Condition() {
    return (
        <MDBCard className="my-5 px-5 pb-5">
        <MDBCardBody>
          <h2 className="h1-responsive font-weight-bold text-center my-5">
            Условия кооператива
          </h2>
          <p className="text-center w-responsive mx-auto mb-5">
            
          </p>
          <MDBRow>
            <MDBCol lg="5">
              <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                <img
                  className="img-fluid"
                  src={sem}
                  alt=""
                />
                <a href="#!">
                  <MDBMask overlay="white-slight" />
                </a>
              </MDBView>
            </MDBCol>
            <MDBCol lg="7">
              <a href="#!" className="green-text">
                <h6 className="font-weight-bold mb-3">
                  <MDBIcon icon="utensils" className="pr-2" />
                  
                </h6>
              </a>
              <h3 className="font-weight-bold mb-3 p-0">
                <strong>Финансирование покупки готового жилья</strong>
              </h3>
              <h5>
              Мы финансируем покупку готового для проживания жилья с рассрочкой до десяти лет, при этом в отлчие от банков у нас нет ссудного процента. Будем учитывать инфляционную издержку которая будет зависеть от суммы долга и от срока рассрочки. По прогнозам Национального Банка КР средне-годовая инфляция составляет от 5% до 7% годовых.
              </h5>
              
              
            </MDBCol>
          </MDBRow>
          <hr className="my-5" />
          <MDBRow>
            <MDBCol lg="7">
              <a href="#!" className="pink-text">
                <h6 className="font-weight-bold mb-3">
                  <MDBIcon icon="image" className="pr-2" />
                  
                </h6>
              </a>
              <h3 className="font-weight-bold mb-3 p-0">
                <strong>Финансирование строительства жилья</strong>
              </h3>
              <h5>
              Мы финансируем строительство жилья под ключ с рассрочкой до десяти лет, без ссудного процента лишь с учетем инфляционной издержки которая будет зависеть от суммы долга и срока рассрочки. По прогнозам Национального Банка КР среднегодовая инфляция составляет от 5% до 7% годовых. </h5>

            </MDBCol>
            <MDBCol lg="5">
              <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                <img
                  className="img-fluid"
                  src={stroi}
                  alt=""
                />
                <a href="#!">
                  <MDBMask overlay="white-slight" />
                </a>
              </MDBView>
            </MDBCol>
          </MDBRow>
          <hr className="my-5" />
          <MDBRow>
            <MDBCol lg="5">
              <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                <img
                  className="img-fluid"
                  src={uch}
                  alt=""
                />
                <a href="#!">
                  <MDBMask overlay="white-slight" />
                </a>
              </MDBView>
            </MDBCol>
            <MDBCol lg="7">
              <a href="#!" className="indigo-text">
                <h6 className="font-weight-bold mb-3">
                  <MDBIcon icon="suitcase" className="pr-2" />
                </h6>
              </a>
              <h3 className="font-weight-bold mb-3 p-0">
                <strong>Финансирование покупки участка и строительства жилья на этом участке</strong>
              </h3>
              <h5>
              Финансируем приобретение участка и строительство жилья под ключ с рассрочкой до десяти лет, без ссудного процента лишь с учетем инфляционной издержки которая будет зависеть от суммы долга и срока рассрочки. По прогнозам Национального Банка КР среднегодовая инфляция составляет от 5% до 7% годовых.
              </h5>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    )
}

export default Condition
