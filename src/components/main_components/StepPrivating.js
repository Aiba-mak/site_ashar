import React from 'react'
import { Container } from 'reactstrap'
import './StepPrivating.css'

function StepPrivating() {
  return (
    <div>
      <Container>
        <div className="stepbox d-flex">
          <div className="bag mr-3">
            <div className="bag01"/>
          </div>
          <div>
            <h4>
              1. Кредитная история
            </h4>
            <p className='usl'>
              Получить кредитную историю в кредитном бюро «Ишеним» , которое находиться по адресу ул. Ахунбаева 127/1 перес ул. Малдыбаева
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
            <p>
            Заполнить заявление вступление в жилищный кооператив Келечек.
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
            <p>
            Заключить Договор об участие в некоммерческом ЖК «Один Шаг к Будущему»
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
            Внесение вступительного взноса 4% от общей суммы приобретаемой недвижимости и первоначального взноса 25% от общей суммы приобретаемой недвижимости. Оплата проходит в отделениях банка «Капитал Банк» на счет Кооператива.
            </p>
          </div>
        </div>
        <div className="stepbox d-flex">
          <div className="choice mr-3">
            <div className="choice01"/>
          </div>
          <div>
            <h4>
            5. Выбор недвижимости
            </h4>
            <p className='usl'>
            Вы можете подобрать любую недвижимость сами на рынке Кыргызстана (в пределах Чуйской обл.). Она должна иметь соответствующие документы (Красная книга, тех. паспорт)
            </p>
          </div>
        </div>
        <div className="stepbox d-flex">
          <div className="build mr-3">
            <div className="build01"/>
          </div>
          <div>
            <h4>
            6. Покупка недвижимости.
            </h4>
            <p>
            Документы оформляются на вас.
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default StepPrivating
