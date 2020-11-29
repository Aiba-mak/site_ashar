import React from 'react'
import { Container } from 'reactstrap'
import './StepPrivating.css'

function StepPrivating() {
  return (
    <div className="step_privating">
      <Container>
        <h1 className="text-center1 ">Этапы Приобретения</h1>
        <div className="stepbox d-flex">
          <div className="bag mr-3">
            <div className="bag01"/>
          </div>
          <div>
            <h4>
              1. Необходимые документы!
            </h4>
            <p className='usl'> 1 - Паспорт; 2 - Поручитель; 3 - Кредитная история </p>
            <p className='usl'>
              Получить кредитную историю в кредитном бюро «Ишеним», которое находиться по адресу ул. Ахунбаева 127/1 перес ул. Малдыбаева
            </p>
          </div>
        </div>
        <div className="stepbox d-flex">
          <div className="paper mr-3">
            <div className="paper01"/>
          </div>
          <div>
            <h4>
            2. Заявление
            </h4>
            <p className='usl'>
            Заполнить заявление на вступление в некоммерческий кооператив «Ашар».
            </p>
          </div>
        </div>
        <div className="stepbox d-flex">
          <div className="document mr-3">
            <div className="document01"/>
          </div>
          <div>
            <h4>
            3. Договор
            </h4>
            <p className='usl'>
            Заключить Договор об участие в некоммерческом кооперативе «Ашар».
            </p>
          </div>
        </div>
        <div className="stepbox d-flex">
          <div className="money mr-3">
            <div className="money01"/>
          </div>
          <div>
            <h4>
            4. Оплата
            </h4>
            <p className='usl'>
            Внесение вступительного взноса 14% или 15% и первоначального взноса 35% от общей суммы приобретаемого авто. Оплата проходит в отделениях банка «Компаньен» на счет Кооператива.
            </p>
          </div>
        </div>
        <div className="stepbox d-flex">
          <div className="choice mr-3">
            <div className="choice01"/>
          </div>
          <div>
            <h4>
            5. Выбор автотранспортного средства
            </h4>
            <p className='usl'>
            Вы можете подобрать любое авто сами на рынке Кыргызстана (оформление только в Бишкеке). При выборе авто вы должны учитывать, что она должна иметь соответствующие документы (тех. паспорт).
            </p>
          </div>
        </div>
        <div className="stepbox d-flex">
          <div className="build mr-3">
            <div className="build01"/>
          </div>
          <div>
            <h4>
            6. Покупка автотранспортного средства
            </h4>
            <p className='usl'>
            Документы оформляются на Кооператив и только после погашения долга вы переоформите на себя.
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default StepPrivating
