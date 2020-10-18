import React from 'react'
import { Container } from 'reactstrap'
import './StepPrivating.css'

function StepPrivating() {
  return (
    <div className="step_privating">
      <Container>
        <h2 className="text-center">Этапы Приобретения</h2>
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
            Заполнить заявление вступление в некоммерческий кооператив Ашар.
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
            Заключить Договор об участие в некоммерческом кооперативе «Ашар»
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
            Внесение вступительного взноса 4% или 5% от общей суммы приобретаемой недвижимости и первоначального взноса 30% от общей суммы приобретаемой недвижимости. Оплата проходит в отделениях банка ....... на счет Кооператива.
            </p>
          </div>
        </div>
        <div className="stepbox d-flex">
          <div className="choice mr-3">
            <div className="choice01"/>
          </div>
          <div>
            <h4>
            5. Выбор недвижимости или проекта дома для строительства
            </h4>
            <p className='usl'>
            Вы можете подобрать любую недвижимость или проект дома сами на рынке Кыргызстана (в пределах Чуйской обл.). При выборе готового жилья вы должны учитывать что она должна иметь соответствующие документы (Красная книга, тех. паспорт). Для составления проекта дома можете обращаться к нам, мы поможем вам составить проект дома вашей мечты.
            </p>
          </div>
        </div>
        <div className="stepbox d-flex">
          <div className="build mr-3">
            <div className="build01"/>
          </div>
          <div>
            <h4>
            6. Покупка недвижимости или строительство жилья
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
