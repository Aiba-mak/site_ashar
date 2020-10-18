import React, { useState } from 'react';
import { Button, Modal } from 'reactstrap';

function Calculator(props) {
    const {calculate,setCalculate} = props
    const [value, setValue] = useState('')
    const [years, setYears] = useState('')

    const personalPayment = 2000
    const [result, setResult] = useState({
        totalSummPayment: 0,
        fisrtPayment: 0,
        incomePayment: 0,
        summRecive: 0,
        everyMonthPayment: parseFloat(0)
    })
    function Calculating(event) {
        event.preventDefault();
        let val = value
        val = parseInt(val)
        let time = years * 12
        let data = { ...result }
        data.fisrtPayment = val * 0.3
        data.incomePayment = val * 0.04
        data.summRecive = val - data.fisrtPayment
        data.everyMonthPayment = 2000 + data.summRecive / time
        data.totalSummPayment = 2000 * time + val + data.incomePayment
        setResult(data)
    }

    return (
        <Modal isOpen={calculate} style={{width:'min-content',textAlign:'center'}}>
        <div className="calculate">      
          <h1>КАЛЬКУЛЯТОР</h1>
          <p>Заполните 2 поля: стоимость недвижимости и срок аренды!</p>
          <p>Нажмите на кнопку: "Рассчитать".</p>
          <p className="currency">Валюта рассчета СОМ.</p>
          <br></br>
          <form >
            <div className="calculate__form">
              <label htmlFor="value" >Стоимость жилья:</label>
              <input value={value} onChange={(e)=>setValue(e.target.value)} type="number" id="value" placeholder="Введите сумму, сом"></input>
              
              <label htmlFor="value">Количество лет:</label>
              <input value={years} onChange={e=>setYears(e.target.value)} type="number" min="1" max="10"></input>
            </div>
            <button type="submit" onClick={(e)=>Calculating(e)} className="btn_calculate">Рассчитать</button>
          </form>
            <div className="calculate__result">
              <h4>Результат</h4>
              <div className="row jcb">
                <span>Первоначальный взнос 30%: {result.fisrtPayment}</span>
                <span>Членский взнос, в месяц: {personalPayment}</span>
              </div>
              <div className="row jcb">
                <span>Вступительный взнос 4%: {result.incomePayment}</span>
                <span>Сумма к получению: {result.summRecive}</span>
              </div>
            </div>
          <br></br><span>Ежемесячный платеж: {result.everyMonthPayment}</span>
          <br></br><span>Общая сумма выплаты: {result.totalSummPayment}</span> 
          <br></br><Button onClick={()=>setCalculate(false)} style={{
            padding: '0px',
            padding: '3px',
            fontSize: '20px',
            fontWeight: '600',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            background: '#949494'
          }}>Закрыть</Button>
        </div>  
      </Modal>
    )
}

export default Calculator
