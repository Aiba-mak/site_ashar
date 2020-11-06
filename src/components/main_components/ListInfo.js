import React from 'react'
import { Card, CardBody, CardSubtitle, CardText, CardTitle, Container } from 'reactstrap'
// import op from '../assets/images/op.jpg' 
// import op from '../assets/images/coop.jpg' 
import "./ListInfo.css"
function ListInfo() {
  return (
    <div className="body">
      <div >
            <img className="image" src='https://trcvr.ru/wp-content/uploads/2017/08/top-5-business-laptops.png'/>
          </div>
      <Container>
        <div className="d-flex">
          
          <Card className="ml-3">
            <CardBody>
              <CardText >
                <p className="coop">Кооператив «Ашар» предоставляет возможность приобрести или построить дом, квартиру в рассрочку сроком на 10 лет без%. Программа нацелена на слой населения, которое не может приобрести жилье сразу. Так же вы можете проживать или сдавать в аренду эту квартиру или дом, что облегчит ваши ежемесячные платежи. Зачем снимать квартиру и выплачивать ежемесячно за чужую квартиру?
                  Пришло время вкладывать деньги в свое будущее и в свою недвижимость!</p>
                  <li className="li">Только мы помогаем строить дома в рассрочку</li>
                  <li className="li">Только у нас самые выгодные условия для вас!</li>
                  <li className="li">Мы одни на рынке кто финансирует из своих средств </li>
                  <li className="li">Документы на недвижимость оформляются на вас!</li>
                  
              </CardText>
            </CardBody>
          </Card>
        </div>
      </Container>
    </div>
  )
}

export default ListInfo
