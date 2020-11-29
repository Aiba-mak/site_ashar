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
              <CardTitle><h4 className="he">Авто на 1 год!</h4></CardTitle>
              <CardSubtitle><h5>Рассрочка на 1 год и комиссия 14%</h5></CardSubtitle>
              <CardText>Первоначальный взнос от 35% от стоимости авто + наша комиссия, выбор автотранспорта за вами. Выплата в рассрочку до 12 месяцев без процентов и без дополнительных выплат. Все расходы на юридические услуги и в том числе на оформление авто покрываем мы.</CardText>
            </CardBody>
          </Card>
          {/* <Card>
            <CardBody>
              <CardTitle><h4 className="he">Доступное жилье</h4></CardTitle>
              <CardSubtitle><h5>Покупка готового дома или квартиры</h5></CardSubtitle>
              <CardText>Первоначальный взнос от 30% и вступительный взнос 4% от стоимости недвижимости, рассрочка на 10 лет. </CardText>
            </CardBody>
          </Card> */}
          <Card>
            <CardBody>
              <CardTitle><h4 className="he">Авто на 2 года! </h4></CardTitle>
              <CardSubtitle>Рассрочка на 2 года и комиссия 15%</CardSubtitle>
              <CardText>Первоначальный взнос от 35% от стоимости авто + наша комиссия, выбор авто за вами. Выплата в рассрочку до 24 месяцев без процентов и без дополнительных выплат. Все расходы на юридические услуги и в том числе на оформление авто покрываем мы. </CardText>
            </CardBody>
          </Card>
          <Card>
           <CardBody>
              <CardTitle><h4 className="he">Накопительная программа</h4></CardTitle>
              <CardSubtitle></CardSubtitle>
              <CardText>Оплата комиссии для вступления в кооператив и накопление первоначального взноса 35% от стоимости авто в течении 12 месяцев</CardText>
            </CardBody>
          </Card>
        </CardDeck>
      </Container>
    </div>
  )
}

export default LastNews
