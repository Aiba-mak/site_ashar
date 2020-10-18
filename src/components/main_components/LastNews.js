import React from 'react'
import { Card, CardBody, CardDeck, CardSubtitle, CardText, CardTitle, Container } from 'reactstrap'

function LastNews() {
  return (
    <div className="mb-5">
      <Container>
        <div>
          <h2 className="text-primary text-center mt-3 mb-5">Последние новости</h2>
        </div>
        <CardDeck>
          <Card>
            <CardBody>
              <CardTitle><h4>Card title</h4></CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <CardTitle><h4>Card title</h4></CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <CardTitle><h4>Card title</h4></CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            </CardBody>
          </Card>
        </CardDeck>
      </Container>
    </div>
  )
}

export default LastNews
