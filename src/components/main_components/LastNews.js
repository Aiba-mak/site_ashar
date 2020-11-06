import React from 'react'
import { Card, CardBody, CardDeck, CardSubtitle, CardText, CardTitle, Container } from 'reactstrap'
import './Cards.css'

function LastNews() {
  return (
    <div className="mb-11">
      <Container>
        <div>
          <h2 className="text-primary text-center mt-3 mb-5">Наши программы!</h2>
        </div>
        <CardDeck>
          <Card>
            <CardBody>
              <CardTitle><h4 className="he">Построй свой дом</h4></CardTitle>
              <CardSubtitle><h5>Покупка участка и строительство дома</h5></CardSubtitle>
              <CardText>Первоначальный взнос от 30% и вступительный взнос 5% от стоимости недвижимости, рассрочка до 10 лет.</CardText>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <CardTitle><h4 className="he">Доступное жилье</h4></CardTitle>
              <CardSubtitle><h5>Покупка готового дома или квартиры</h5></CardSubtitle>
              <CardText>Первоначальный взнос от 30% и вступительный взнос 4% от стоимости недвижимости, рассрочка на 10 лет. </CardText>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <CardTitle><h4 className="he">Накопительная программа</h4></CardTitle>
              <CardSubtitle></CardSubtitle>
              <CardText>Оплата вступительного взноса и накопление первоначального взноса 30% от стоимости недвижимости в течении 36 месяцев</CardText>
            </CardBody>
          </Card>
        </CardDeck>
      </Container>
    </div>
  )
}

export default LastNews
