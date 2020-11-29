import React from 'react'
import { Card, CardBody, CardSubtitle, CardText, CardTitle, Container } from 'reactstrap'
// import op from '../assets/images/op.jpg' 
// import op from '../assets/images/coop.jpg' 
import "./ListInfo.css"
function ListInfo() {
  return (
    <div className="body">
      <div >
            <img className="image1" src='https://trcvr.ru/wp-content/uploads/2017/08/top-5-business-laptops.png'/>
          </div>
      <Container>
        <div className="d-flex">
        <div >
            <img className="image" src='https://trcvr.ru/wp-content/uploads/2017/08/top-5-business-laptops.png'/>
          </div>
          <Card className="ml-3">
            <CardBody>
              <CardText >
                <p className="coop">Кооператив «Ашар» предоставляет возможность приобрести автотранспорт в рассрочку сроком до 2х лет без%. Программа нацелена на слой населения, которое не может приобрести авто сразу. Почему купить авто с нами выгодно:</p>
                  <li className="li">Только мы помогаем купить авто в рассрочку без %</li>
                  <li className="li">Только у нас самые выгодные условия для вас</li>
                  <li className="li">Мы одни на рынке кто финансирует из своих средств</li>
                  <li className="li">Мы не заставляем ждать своих пайщиков ждать месяцами</li>
                  
              </CardText>
            </CardBody>
          </Card>
        </div>
      </Container>
    </div>
  )
}

export default ListInfo
