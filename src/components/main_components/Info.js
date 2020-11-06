import React from 'react'
import { Container } from 'reactstrap'
import './Info.css'

function Info() {
  return (
    <div>
      <Container className="info d-flex">
        <h3 className='info_title mr-3'>
          Хватит снимать квартиру и платить за чужое жилье! Приходите к нам и живите в своем доме покупая в рассрочку. Жилье оформляется на вас.
        </h3>
        <div className="razdelitel"/>
        <h3 className='info_item ml-3'>
          После оформления Вы можете проживать в своей квартире или сдавать в аренду. Также если вы решите выйти из кооператива, то мы вернем вам полную сумму денег которые вы оплатили.
        </h3>
      </Container>
    </div>
  )
}

export default Info
