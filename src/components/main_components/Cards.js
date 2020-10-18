import React from 'react'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button,CardDeck, Container
} from 'reactstrap';
import './Cards.css'

function Cards() {
  return (
    <div className="mb-5">
      <Container>
      <CardDeck>
       <Card>
        <CardBody>
          
          <CardTitle><div className="mb-6"><h4>Вступительный взнос 4 %</h4></div></CardTitle>
          <CardSubtitle><h5>4 % от стоимости квартиры.</h5></CardSubtitle>
        <div className="mb-7"><CardText>Членами кооператива могут быть граждане Кыргызской Республики, достигшие 18-летнего возраста.</CardText></div>
        </CardBody>
      </Card>
       <Card>
        <CardBody>
          <CardTitle><div className="mb-8"><h4>Первоначальный взнос 30%</h4></div></CardTitle>
          <CardSubtitle><h5>30% от стоимости квартиры.</h5></CardSubtitle>
          <CardText>Недвижимость может быть приобретена только в пределах Чуйской области Кыргызской Республики.</CardText>
        </CardBody>
      </Card>
       <Card>
        <CardBody>
          <CardTitle><div className="mb-9"><h4>Ежемесячные выплаты + 2000 Сом</h4></div></CardTitle>
          <CardSubtitle></CardSubtitle>
          <CardText>2000 сом для компенсации инфляционной издержки. Компания несет убытки из-за обесценения денег, каждый год в среднем на 5%</CardText>
        </CardBody>
      </Card>
       <Card>
        <CardBody>
          <CardTitle><div className="mb-10"><h4>Необходимые Документы</h4></div></CardTitle>
          {/* <CardSubtitle>Card subtitle</CardSubtitle> */}
          <CardText>Документы для того чтобы стать членом жилищного кооператива: <p>1. Кредитная история;</p> 2. Паспорт</CardText>
        </CardBody>
      </Card>
       
      </CardDeck>
      </Container>
    </div>
  )
}

export default Cards
