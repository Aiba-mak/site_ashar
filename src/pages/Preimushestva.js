import React from 'react'
import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn } from "mdbreact";
import percent from '../assets/images/percent.jpg' 
import pre from '../assets/images/pre.jpg' 
import coop from '../assets/images/coop.jpg'
function Preimushestva() {
  return (
    <div>
      <MDBCard className="my-5 px-5 pb-5">
       <MDBCardBody>
         <h2 className="h1-responsive font-weight-bold text-center my-5">
           Преимущества нашего кооператива
         </h2>
         {/* <p className="text-center w-responsive mx-auto mb-5">
           Duis aute irure dolor in reprehenderit in voluptate velit esse
           cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
           cupidatat non proident, sunt in culpa qui officia deserunt mollit
           anim id est laborum.
         </p> */}
         <MDBRow>
           <MDBCol lg="5">
             <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
               <img
                 className="img-fluid"
                 src={percent}
                 alt=""
               />
               <a href="#!">
                 <MDBMask overlay="white-slight" />
               </a>
             </MDBView>
           </MDBCol>
           <MDBCol lg="7">
             <a href="#!" className="green-text">
               <h6 className="font-weight-bold mb-3">
                 <MDBIcon icon="utensils" className="pr-2" />
                 Аквапринт коричневое дерево LC Prado 150
               </h6>
             </a>
             <h3 className="font-weight-bold mb-3 p-0">
               <strong>Преимущество кооператива Ашар</strong>
             </h3>
             <p>
             Мы финансируем покупку авто с выплатой долга в рассрочку до 2х лет без процентов, вместо того чтобы брать кредит в банке лучше воспользоваться нашими услугами. Для получения кредита в банке вам необходимо подготовить кучу документов и положить в залог свое имущество, также вы досрочно не сможете погасить долг и самое главное дорого. В банках у нас кредиты выдаюся в среднем под 20% годовых и если брать кредит на 2 года то будет почти два раза дороже чем наша комиссия.
             Кооператив Ашар предостовляет средства в долг без процентной ставки с рассрочкой выплаты до 2х лет. Вам лишь требуется паспорт, кредитную историю и один поручитель. Если вы не сможете выполнят обязательства перед нами, то мы(кооператив) выставляем авто на продажу и возвращаем вам всю сумму которую вы выплатили за авто.
             </p>
             
             
           </MDBCol>
         </MDBRow>
         <hr className="my-5" />
         <MDBRow>
           <MDBCol lg="7">
             <a href="#!" className="pink-text">
               <h6 className="font-weight-bold mb-3">
                 <MDBIcon icon="image" className="pr-2" />
                 
               </h6>
             </a>
             <h3 className="font-weight-bold mb-3 p-0">
               <strong>Преимущества кооператива Ашар от других кооперативов</strong>
             </h3>
             <p>
               У нас в договоре учитывается срок обязательства кооператива по финансированию и это максимум 1 месяц, а если мы не выполним обязательства перед вами в оговоренный срок вы будете в праве вернуть всю сумму которую вы выплатили нам в качестве вступительного взноса и первоначального взноса. 
               Мы не будем заставлять вас ждать месяцами как делают другие кооперативы и не оставим себе вступительный взнос в случае вашего выхода из кооператива как делают все остальные кооперативы.
               В отличие от других кооперативов мы финансируем из собственных средств и поэтому нам не надо заставлять вас ждать.
               При вступлении в наш кооператив вам не нужно платить дополнительно за юридические услуги которое у других кооператив составляет от 20000 сом до 60000сом. Все дальнейшие расходы входят в ту самую комиссию которую вы выплатили при вступлении в кооператив в виде вступительного взноса.
             </p>
           </MDBCol>
           <MDBCol lg="5">
             <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
               <img
                 className="img-fluid"
                 src={pre}
                 alt=""
               />
               <a href="#!">
                 <MDBMask overlay="white-slight" />
               </a>
             </MDBView>
           </MDBCol>
         </MDBRow>
         <hr className="my-5" />
         <MDBRow>
           <MDBCol lg="5">
             <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
               <img
                 className="img-fluid"
                 src={coop}
                 alt=""
               />
               <a href="#!">
                 <MDBMask overlay="white-slight" />
               </a>
             </MDBView>
           </MDBCol>
           <MDBCol lg="7">
             <a href="#!" className="indigo-text">
               <h6 className="font-weight-bold mb-3">
                 <MDBIcon icon="suitcase" className="pr-2" />
                 Food
               </h6>
             </a>
             <h3 className="font-weight-bold mb-3 p-0">
               <strong>Как работают Кооперативы</strong>
             </h3>
             <p>
             Кооператив привлекает новых членов которые в свою очередь выплачивают вступительный взнос (от 4% от стоимости жилья) и первоначальный взнос (от 25% от стоимости жилья).
             Новый член кооператива встает в очередь и ждет пока не вступят новые члены которые тоже выплачивают взносы. За деньги четырех членов Кооператив покупает жилье первому пришедшему клиенту, так как деньги четырех членов по 25% составят ровно 100%.
             Остальные трое членов ждут пока не вступять в Кооператив еще 12 новых членов, за деньги(первоначальный взнос) которых можно купить только 3 дома. Теперь чтобы купить 12 членам которые остались в очереди потребуется 48 новых членов. 
             Таким образом если у кооператива нет своих средств для финансирования (а у нас в стране почти у всех действущих кооперативов нет своего капитала) рано или поздно цепочка прервется и вы стоящий на очереди в лучшем случае вернете свой первоначальный взнос в течении 10 лет который из-за инфляции обесцениться, а в худшем случае останетесь ни с чем. 
             А вступительном взносе которую вы выплатили вы можете забыть, большинство кооперативов не возвращает в любом случае.
             Поэтому перед тем как вступить в какой либо кооператив узнайте имеет ли они свой капитал, что случится если кооператив обонкротиться, и описывается ли срок выполнения обязательства кооператива перед членом?
             </p>
           </MDBCol>
         </MDBRow>
       </MDBCardBody>
      </MDBCard>
        
      
    </div>
  )
}

export default Preimushestva



