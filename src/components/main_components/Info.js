import React from 'react'
import { Container } from 'reactstrap'
import './Info.css'

function Info() {
  return (
    <div>
      <Container className="info d-flex">
        <h3 className='info_title mr-3'>
        Если у вас не хватает средств, то мы поможем вам приобрести авто в рассрочку до 2-х лет, рассрочка будет без процентной и без каких либо дролнительных выплат.
        </h3>
        <div className="razdelitel"/>
        <h3 className='info_item ml-3'>
        Сроки покупки будут оговорены в договоре и дается гарантия возврата средств в случае если вы захотите выйти с кооператива или кооператив не выполнит свои обязательства.
        </h3>
      </Container>
    </div>
  )
}

export default Info
