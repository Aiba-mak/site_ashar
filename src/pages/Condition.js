import React from 'react'
import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn } from "mdbreact";
import por from '../assets/images/por.png' 
import audi from '../assets/images/audi.png' 
import uch from '../assets/images/uch.jpg' 
import './Condition.css'
function Condition() {
    return (
        <MDBCard className="my-5 px-5 pb-5">
        <MDBCardBody className="page">
          <h1 className="h1">
            Условия кооператива
          </h1>
          <MDBRow>
            <MDBCol lg="7">
              <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                <img
                  className="img-fluid"
                  src={por}
                  alt=""
                />
                <a href="#!">
                  <MDBMask overlay="white-slight" />
                </a>
              </MDBView>
            </MDBCol>
            <MDBCol lg="5">
              <h3 className="fo">
                <strong>Финансирование покупки авто за месяц!</strong>
              </h3>
              <p className="tex">
              Для того чтобы воспользоваться нашими услугами вам необходимо вступить в наш Кооператив. Вы пишете заявление на вступление в наш Кооператив Ашар, после чего мы отправляем запрос на регистрацию в Министерство Юстиции, это занимает в среднем 10 рабочих дней. Как только мы получим справку с Министерства Юстиции о том что вы зарегистрированы в нашем Кооперативе, мы связываемся с вами чтобы вы выбрали авто для покупки, дальше покупка авто и передача авто вам с выплатой долша в рассрочку. Эта социальная программа ориентирована для поддержки малобеспеченных граждан.
              </p>
            </MDBCol>
          </MDBRow>
          <hr className="my-5" />
          <MDBRow>
            <MDBCol lg="5">
              <h3 className="fo">
                <strong>Накопительная программа</strong>
              </h3>
              <h5 className="tex">Если у вас не хватает денег на первоначальный взнос чтобы воспользоваться нашими услугами, то мы предлагаем накопительную программу. Вы вступаете в наш Кооператив Ашар и начинаете копить деньги пока не наберется достаточной суммы для первоначального взноса, после чего вы будете профинансированы нами при покупке авто.</h5>
            </MDBCol>
            <MDBCol lg="7">
              <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                <img
                  className="img-fluid"
                  src={audi}
                  alt=""
                />
                <a href="#!">
                  <MDBMask overlay="white-slight" />
                </a>
              </MDBView>
            </MDBCol>
          </MDBRow>
          {/* <hr className="my-5" /> */}
          {/* <MDBRow>
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
              Финансируем приобретение участка и строительство жилья под ключ с рассрочкой до десяти лет, без ссудного процента. Стоимость м2 будет примерно в районе от 280$ до 300$, точная цена будет известно только после того как мы будет составлен проект дома.
              </h5>
            </MDBCol>
          </MDBRow> */}
        </MDBCardBody>
      </MDBCard>
    )
}

export default Condition
