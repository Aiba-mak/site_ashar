import React, { Component } from "react";
import { MDBContainer, MDBCollapse, MDBCard, MDBCardBody, MDBRow, MDBMask, MDBCol, MDBView, MDBCollapseHeader } from "mdbreact";
import './Home.css'
import que from '../assets/images/que.jpg' 


class CollapsePage extends Component {
state={
  collapseID: "collapse3"
}

toggleCollapse = collapseID => () =>
  this.setState(prevState => ({
    collapseID: prevState.collapseID !== collapseID ? collapseID : ""
  }));

render() {
const { collapseID } = this.state;
  return (
    <div className="questions">
      {/* <h2 className="text-center">Частые вопросы</h2> */}
      <MDBRow>
      <MDBCol lg="5">
              <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                <img
                  className="img-fluid"
                  src={que}
                  alt=""
                />
                <a href="#!">
                  <MDBMask overlay="white-slight" />
                </a>
              </MDBView>
        </MDBCol>
        <MDBCol>
    <MDBContainer className="que">
    <h2 className="text-center">Частые вопросы</h2>
      <MDBContainer className="mt-5">
        <MDBCard className="mt-3 mb-3">
          <div onClick={this.toggleCollapse("collapse1")}>
            <h4>Что нужно сделать чтобы вы купили мне дом?</h4>
            <i className={ collapseID==="collapse1" ? "fa fa-angle-down rotate-icon" : "fa fa-angle-down" } />
          </div>
          <MDBCollapse id="collapse1" isOpen={collapseID}>
            <MDBCardBody>
            Вам нужно вступить в наш кооператив путем вклада первоначального взноса и вступительного взноса от стоимости желаемого вами дома.
            </MDBCardBody>
          </MDBCollapse>
        </MDBCard>

        <MDBCard className="mt-3 mb-3">
          <div onClick={this.toggleCollapse("collapse2")}>
          <h4>Сколько времени нужно ждать чтобы вы купили нам дом?</h4>
            <i className={ collapseID==="collapse2" ? "fa fa-angle-down rotate-icon" : "fa fa-angle-down" } />
          </div>
          <MDBCollapse id="collapse2" isOpen={collapseID}>
            <MDBCardBody>
              В течении одного года мы гарантируем что профинансируем вас для приобретения дома или строительтсва дома. Если мы выполним это в течении года вы будете вправе вернуть полную сумму денег которую вы вкладывали нам при вступлении, то есть это вступительный взнос и первоначальный взнос. Все эти пункты оговаривается в договоре.
            </MDBCardBody>
          </MDBCollapse>
        </MDBCard>

        <MDBCard className="mt-3 mb-3">
          <div onClick={this.toggleCollapse("collapse3")}>
          <h4>Вы только покупаете дома?</h4>
            <i className={ collapseID==="collapse3" ? "fa fa-angle-down rotate-icon" : "fa fa-angle-down" } />
          </div>
          <MDBCollapse id="collapse3" isOpen={collapseID}>
            <MDBCardBody>
              Нет, мы не только помогаем с покупкой дома. Мы также финансируем покупку участка и строительства дома на этом участке.
            </MDBCardBody>
          </MDBCollapse>
        </MDBCard>

        <MDBCard className="mt-3 mb-3">
          <div onClick={this.toggleCollapse("collapse4")}>
          <h4>Вы помогаете с покупкой дома по всей стране?</h4>
            <i className={ collapseID==="collapse3" ? "fa fa-angle-down rotate-icon" : "fa fa-angle-down" } />
          </div>
          <MDBCollapse id="collapse4" isOpen={collapseID}>
            <MDBCardBody>
              Нет, мы пока работаем только на территории Чуйской области.
            </MDBCardBody>
          </MDBCollapse>
        </MDBCard>

        <MDBCard className="mt-3 mb-3">
          <div onClick={this.toggleCollapse("collapse5")}>
          <h4>Вы помогаете с покупкой только участка?</h4>
            <i className={ collapseID==="collapse6" ? "fa fa-angle-down rotate-icon" : "fa fa-angle-down" } />
          </div>
          <MDBCollapse id="collapse5" isOpen={collapseID}>
            <MDBCardBody>
              Нет, мы отдельно покупку участка не финансируем, только с дальнейшей строительства дома на участке. Мы считаем что человек который обратился к нам за финансовой помощью с целью приобретения жилья, должен иметь дом после использования наших услуг. Так как ему предстоит оплатить оставшуюся часть денег в рассрочку.
            </MDBCardBody>
          </MDBCollapse>
        </MDBCard>

        <MDBCard className="mt-3 mb-3">
          <div onClick={this.toggleCollapse("collapse6")}>
          <h4>А как будете определять цену строительства дома?</h4>
            <i className={ collapseID==="collapse6" ? "fa fa-angle-down rotate-icon" : "fa fa-angle-down" } />
          </div>
          <MDBCollapse id="collapse6" isOpen={collapseID}>
            <MDBCardBody>
              По рыночной цене за квдратный метр от 250 до 350$, но в пределах 40 000$. Точная цена будет зависеть от материалов которые будут использованы в строительстве
            </MDBCardBody>
          </MDBCollapse>
        </MDBCard>

        <MDBCard className="mt-3 mb-3">
          <div onClick={this.toggleCollapse("collapse7")}>
          <h4>А если у нас есть участок вы поможете со строительством дома?</h4>
            <i className={ collapseID==="collapse7" ? "fa fa-angle-down rotate-icon" : "fa fa-angle-down" } />
          </div>
          <MDBCollapse id="collapse7" isOpen={collapseID}>
            <MDBCardBody>
              Да, можем профинансировать только строительство дома в случае если у вас имеется участок на территории Чуйской области. Но все соответствующие документы на участок обязательно должны быть у вас.
            </MDBCardBody>
          </MDBCollapse>
        </MDBCard>

      </MDBContainer>
    </MDBContainer>
    </MDBCol>
    </MDBRow>
    </div>
    );
  }
}

export default CollapsePage;