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
          
          <CardTitle><div ><h4 className="mb-6">Вступительный взнос 14% (это и есть комиссия) от стоимости авто.</h4></div></CardTitle>
          <CardSubtitle><h5> </h5></CardSubtitle>
        <div className="mb-7"><CardText>Членами кооператива могут быть граждане Кыргызской Республики, достигшие 18-летнего возраста.</CardText></div>
        </CardBody>
      </Card>
       <Card>
        <CardBody>
          <CardTitle><div ><h4 className="mb-8">Первоначальный взнос 35% от стоимости авто.</h4></div></CardTitle>
          <CardSubtitle><h5></h5></CardSubtitle>
          <CardText>Автотранспорт должен быть минимум 2000 - года и обязательно растоможенным, выбор авто остается за вами. Рассрочка максимум на 2 года.</CardText>
        </CardBody>
      </Card>
       {/* <Card>
        <CardBody>
          <CardTitle><div className="mb-9"><h4>Ежемесячные выплаты</h4></div></CardTitle>
          <CardSubtitle></CardSubtitle>
          <CardText>2000 сом для компенсации инфляционной издержки. Компания несет убытки из-за обесценения денег, каждый год в среднем на 5%</CardText>
        </CardBody>
      </Card> */}
       <Card>
        <CardBody>
          <CardTitle><div><h4 className="mb-10">Необходимые Документы</h4></div></CardTitle>
          {/* <CardSubtitle>Card subtitle</CardSubtitle> */}
          <CardText>Документы для того чтобы стать членом кооператива: <p>1. Кредитная история;</p> <p>2. Паспорт;</p>3. Поручитель; </CardText>
        </CardBody>
      </Card>
       
      </CardDeck>
      </Container>
    </div>
  )
}

export default Cards
