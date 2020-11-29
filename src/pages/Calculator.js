
import React, { useState } from 'react';
import { Button, Modal } from 'reactstrap';

function Calculator(props) {
  const { calculate, setCalculate } = props
  const [value, setValue] = useState('')
  const [years, setYears] = useState('1')

  const personalPayment = 0
  const [result, setResult] = useState({
    totalSummPayment: 0,
    fisrtPayment: 0,
    incomePayment: 0,
    summRecive: 0,
    everyMonthPayment: 0
  })

  function setGoodNumber(number) {
    let float = parseFloat(number) - parseInt(number) + ' '
    float.split(' ')
    let res = []
    let resf = []
    number = parseInt(number) + ''
    number = number.split('').reverse()

    for (let i = 0; i < number.length; i++) {
      if (i > 2 && i % 3 == 0) res.push(' ')
      res.push(number[i])
    }

    for (let i = 1; i < 4; i++) {
      resf.push(float[i])
    }
    res = res.reverse().join('')
    resf = resf.join('')
    res += resf

    return res
  }

  function Calculating(event) {
    event.preventDefault();
    let val = value
    val = parseInt(val)
    let time = years
    let data = { ...result }
    data.fisrtPayment = val * 0.35
    data.incomePayment = val * 0.14
    data.summRecive = val - data.fisrtPayment
    data.everyMonthPayment = 0 + parseInt(data.summRecive) / time
    data.totalSummPayment = 0 * time + val + parseFloat(data.incomePayment)

    data.fisrtPayment = setGoodNumber(data.fisrtPayment)
    data.incomePayment = setGoodNumber(data.incomePayment)
    data.summRecive = setGoodNumber(data.summRecive)
    data.everyMonthPayment = setGoodNumber(data.everyMonthPayment)
    data.totalSummPayment = setGoodNumber(data.totalSummPayment)

    setResult(data)
  }

  function setNiceInput(string) {
      if(string.length < 1) return ''
      string = string.split('')
      string.forEach((item,i)=>{
        if(item == 0) return true
        if(!parseInt(item)) string.splice(i,1)
      })
    
    let res = []
    string = string.reverse()
    for (let i = 0; i < string.length; i++) {
      if (i > 2 && i % 3 == 0) res.push(' ')
      res.push(string[i])
    }
    res = res.reverse().join('')
    return res
  }

  function parseInput(str){
    str = str.split(' ')
    str = str.join('')
    return str
  }

  return (
    <Modal isOpen={calculate} style={{ width: 'min-content', textAlign: 'center' }}>
      <div className="calculate">
        <h1>КАЛЬКУЛЯТОР</h1>
        <p>Заполните 2 поля: стоимость авто и срок рассрочки!</p>
        <p>Нажмите на кнопку: "Рассчитать".</p>
        <p className="currency">Валюта рассчета доллар.</p>
        <br></br>
        <form >
          <div className="calculate__form">
            <label htmlFor="value" >Стоимость авто:</label>
            <input value={setNiceInput(value)} onChange={(e) => setValue(parseInput(e.target.value))} type="text" id="value" placeholder="Введите сумму, доллар"></input>
            <label htmlFor="value">Количество месяцев:</label>
            <input value={years} onChange={e => setYears(e.target.value)} type="number" min="1" max="24"></input>
          </div>
          <button type="submit" onClick={(e) => Calculating(e)} className="btn_calculate">Рассчитать</button>
        </form>
        <div className="calculate__result">
          <h4>Результат</h4>
          <div className="row jcb">
            <span>Первоначальный взнос 35%: {result.fisrtPayment}</span>
            <span>Процентная ставка: {personalPayment}</span>
          </div>
          <div className="row jcb">
            <span>Комиссия: {result.incomePayment}</span>
            <span>Сумма к получению: {result.summRecive}</span>
          </div>
        </div>
        <br></br><span>Ежемесячный платеж: {result.everyMonthPayment}</span>
        <br></br><span>Общая сумма выплаты: {result.totalSummPayment}</span>
        <br></br><Button onClick={() => setCalculate(false)} style={{
          padding: '1px',
          fontSize: '20px',
          fontWeight: 'bold',
          color: 'white',
          border: 'rgb(219, 56, 16) 2px solid',
          borderRadius: '4px',
          background: '#949494'
        }}>Закрыть</Button>
      </div>
    </Modal>
  )
}

export default Calculator