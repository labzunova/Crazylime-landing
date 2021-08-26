import './App.css';
import "./styles.css"
import logo from "./assets/logo.jpg"
import line from "./assets/line.png"
import lime1 from "./assets/lime1.png"
import star from "./assets/star.png"
import Diana from "./assets/Diana.jpg"
import Diana_s from "./assets/Diana-sizes.jpg"
import Luiza from "./assets/Luiza.jpg"
import Luiza_s from "./assets/Luiza-sizes.jpg"
import Julia from "./assets/Julia.jpg"
import Julia_s from "./assets/Julia-sizes.jpg"

function App() {
  return (<div>
  <img src={line} className="fullwidth rainbow-line"/>
    <div className="center-flex-container">
      <img src={logo} className="logo"/>
    </div>

    <div className="center-flex-container">
      <div className="container menu">

        <div className="col menu-element">
          Как заказать?
        </div>
        <div className="col menu-element">
          Что в наличии?
        </div>
        <div className="col menu-element">
          Доставка
        </div>
        <div className="col menu-element">
          Таблицы размеров
        </div>
        <div className="col menu-element">
          Гарантии
        </div>

      </div>
    </div>


    <img src={line} className="fullwidth rainbow-line" />
      <div className="main-block">
        <div className="center-flex-container">
          <div className="green-ribbon">
            <h2 className="section-green-name">Как заказать?</h2>
          </div>
        </div>

        <div className="center-flex-container">
          <img src={lime1} className="left-lime"/>
          <img src={lime1} className="right-lime"/>

              <h3 className="center-allign" >
			<span className="text">
			Чтобы оформить заказ через Instagram, нужно:<br/>
			<br/>🍃Прислать фото товара, который интересует, и его размер.
			<br/>🍃Мы проверим наличие и сообщим Вам.
			<br/>🍃Если Вы из региона, то отправим Вам почтой или в пункт выдачи Сдэк после оплаты в этот же или на следующий день
			<br/>🍃Пришлем Вам трек для отслеживания посылки
			</span>

              </h3>
        </div>


        <img src={line} className="fullwidth rainbow-line" />
          <div className="center-flex-container">
            <div className="pink-ribbon">
              <h2 className="section-pink-name">Что в наличии?</h2>
            </div>
          </div>
          <div className="center-flex-container">
            <div className="container">
              <div className="row margin-bottom12">
                <div className="col">
                  <a href="" className="link-catalog">Наш сайт</a>
                </div>
              </div>
              <div className="row margin-bottom12">
                <div className="col">
                  <img src={star}/>
                </div>
              </div>
              <div className="row margin-bottom12">
                <div className="col">
                  <a href="" className="link-catalog">Школьные платья</a>
                </div>
              </div>
              <div className="row margin-bottom12">
                <div className="col">
                  <img src={star}/>
                </div>
              </div>
              <div className="row margin-bottom12">
                <div className="col">
                  <a href="" className="link-catalog">Нарядные платья</a>
                </div>
              </div>
            </div>
          </div>


          <img src={line} className="fullwidth rainbow-line" />
            <div className="center-flex-container">
              <div className="green-ribbon">
                <h2 className="section-green-name">Доставка</h2>
              </div>
            </div>

            <div className="center-flex-container">
              <h2>Москва и Санкт-Петербург</h2>
            </div>
            <div className="center-flex-container">
            {/*  <div style="overflow-x: auto; overflow-y: hidden;">*/}
            {/*    <table align="left" width="100%" cellSpacing="1" cellPadding="18" className="delivery_table">*/}
            {/*      <tbody>*/}
            {/*      <tr style="background-color: #c7c7c7; bording" align="center" valign="middle">*/}
            {/*        <td style="padding: 2px; border: 1px solid black; text-align: center; width: 25%;">*/}
            {/*          <b>СПОСОБ ДОСТАВКИ</b>*/}
            {/*        </td>*/}
            {/*        <td style="padding: 2px; border: 1px solid black; text-align: center; width: 25%;">*/}
            {/*          <b>ГЕОГРАФИЯ ДОСТАВКИ</b>*/}
            {/*        </td>*/}
            {/*        <td style="padding: 2px; border: 1px solid black; text-align: center; width: 10%;">*/}
            {/*          <b>СРОКИ</b>*/}
            {/*        </td>*/}
            {/*        <td style="padding: 2px; border: 1px solid black; text-align: center; width: 10%;">*/}
            {/*          <b>ДОСТАВКА</b>*/}
            {/*        </td>*/}
            {/*        <td style="border: 1px solid black; text-align: center; width: 10%;">*/}
            {/*          <b>ОТ 6000 РУБ</b>*/}
            {/*        </td>*/}
            {/*      </tr>*/}
            {/*      <tr align="center" valign="middle">*/}
            {/*        <td style="border: 1px solid black; text-align: center;" scope="col" align="center" valign="middle">*/}
            {/*          Самовывоз*/}
            {/*          (СДЭК)*/}
            {/*        </td>*/}
            {/*        <td style="border: 1px solid black; text-align: center;" scope="col" align="center" valign="middle">*/}
            {/*          Любой пункт самовывоза СДЭК*/}
            {/*        </td>*/}
            {/*        <td style="border: 1px solid black; text-align: center; vertical-align: middle;">*/}
            {/*          1-2 дня<br/>*/}
            {/*        </td>*/}
            {/*        <td style="border: 1px solid black; text-align: center; vertical-align: middle;">*/}
            {/*          180 руб*/}
            {/*        </td>*/}
            {/*        <td style="border: 1px solid black; text-align: center; vertical-align: middle;">*/}
            {/*          <span style="color: #9d0a0f;"><b>бесплатно</b></span>*/}
            {/*        </td>*/}
            {/*      </tr>*/}
            {/*      <tr style="background-color: #e0e0e0;" align="center" valign="middle">*/}
            {/*        <td rowSpan="4" style="border: 1px solid black; text-align: center; vertical-align: middle;">*/}
            {/*          Курьером*/}
            {/*        </td>*/}
            {/*        <td style="border: 1px solid black; text-align: center; vertical-align: middle;">*/}
            {/*          до МКАД / КАД*/}
            {/*        </td>*/}
            {/*        <td style="border: 1px solid black; text-align: center; vertical-align: middle;">*/}
            {/*          1-2 дня<br/>*/}
            {/*        </td>*/}
            {/*        <td style="border: 1px solid black; text-align: center; vertical-align: middle;">*/}
            {/*          290 руб*/}
            {/*        </td>*/}
            {/*        <td style="border: 1px solid black; text-align: center; vertical-align: middle;">*/}
            {/*          <span style="color: #9d0a0f;"><b>бесплатно*</b></span>*/}
            {/*        </td>*/}
            {/*      </tr>*/}
            {/*      <tr align="center" valign="middle">*/}
            {/*        <td style="border: 1px solid black; text-align: center; vertical-align: middle;">*/}
            {/*          за МКАД / КАД до 5км*/}
            {/*        </td>*/}
            {/*        <td style="border: 1px solid black; text-align: center;" >*/}
            {/*          1-2 дня*/}
            {/*        </td>*/}
            {/*        <td style="border: 1px solid black; text-align: center; vertical-align: middle;">*/}
            {/*          390 руб*/}
            {/*        </td>*/}
            {/*        <td style="border: 1px solid black; text-align: center; vertical-align: middle;">*/}
            {/*          190 руб*/}
            {/*        </td>*/}
            {/*      </tr>*/}
            {/*      <tr style="background-color: #e0e0e0;" align="center" valign="middle">*/}
            {/*        <td style="border: 1px solid black; text-align: center;">*/}
            {/*          за МКАД / КАД до 15км*/}
            {/*        </td>*/}
            {/*        <td style="border: 1px solid black; text-align: center; vertical-align: middle;">*/}
            {/*          1-2 дня*/}
            {/*        </td>*/}
            {/*        <td style="border: 1px solid black; text-align: center; vertical-align: middle;">*/}
            {/*          490 руб*/}
            {/*        </td>*/}
            {/*        <td style="border: 1px solid black; text-align: center; vertical-align: middle;">*/}
            {/*          290 руб*/}
            {/*        </td>*/}
            {/*      </tr>*/}
            {/*      <tr align="center" valign="middle">*/}
            {/*        <td style="border: 1px solid black; text-align: center; vertical-align: middle;">*/}
            {/*          за МКАД / КАД до 23км (и Зеленоград)*/}
            {/*        </td>*/}
            {/*        <td style="border: 1px solid black; text-align: center;">*/}
            {/*          1-2 дня*/}
            {/*        </td>*/}
            {/*        <td style="border: 1px solid black; text-align: center; vertical-align: middle;">*/}
            {/*          690 руб*/}
            {/*        </td>*/}
            {/*        <td style="border: 1px solid black; text-align: center; vertical-align: middle;">*/}
            {/*          490 руб*/}
            {/*        </td>*/}
            {/*      </tr>*/}
            {/*      <tr align="center" valign="middle">*/}
            {/*      </tr>*/}
            {/*      <tr align="center" valign="middle">*/}
            {/*        <td style="border: 1px solid black; text-align: center; vertical-align: middle;">*/}
            {/*          Почта РФ (Обыкновенная посылка)*/}
            {/*        </td>*/}
            {/*        <td style="border: 1px solid black; text-align: center; vertical-align: middle;">*/}
            {/*          Любое почтовое отделение*/}
            {/*        </td>*/}
            {/*        <td style="border: 1px solid black; text-align: center; vertical-align: middle;">*/}
            {/*          3-5 дней*/}
            {/*        </td>*/}
            {/*        <td style="border: 1px solid black; text-align: center; vertical-align: middle;">*/}
            {/*          290 руб*/}
            {/*        </td>*/}
            {/*        <td style="border: 1px solid black; text-align: center; vertical-align: middle;">*/}
            {/*          <span style="color: #9d0a0f;"><b>бесплатно</b></span>*/}
            {/*        </td>*/}
            {/*      </tr>*/}
            {/*      </tbody>*/}
            {/*    </table>*/}
            {/*    <p>*/}
            {/*      <span style="color: #a40c06;"> * Сумма выкупленного товара, не менее 6000 рублей. </span> То есть если*/}
            {/*      вы заказали на сумму более 6000 руб, а выкупили на меньшую сумму, то доставка будет платной.*/}
            {/*    </p>*/}
            {/*  </div>*/}
              <div className="center-flex-container">
                <h2>По всей России (Предоплата - 100%)</h2>
              </div>


              <img src={line} className="fullwidth rainbow-line"/>
                <div className="center-flex-container">
                  <div className="pink-ribbon">
                    <h2 className="section-pink-name">Таблицы размеров</h2>
                  </div>
                </div>
                <div className="center-flex-container">

                  <div className="card product-card">
                    <img src={Luiza} className="card-img-top" alt="..."/>
                      <img src={Luiza_s} className="card-img-top" alt="..."/>
                        <div className="card-body">
                          <p className="card-text product-text">"Луиза"</p>
                        </div>
                  </div>

                  <div className="card product-card" >
                    <img src={Diana} className="card-img-top" alt="..."/>
                      <img src={Diana_s} className="card-img-top" alt="..."/>
                        <div className="card-body product-text">
                          <p className="card-text">"Диана"</p>
                        </div>
                  </div>

                  <div className="card product-card" >
                    <img src={Julia} className="card-img-top" alt="..."/>
                      <img src={Julia_s} className="card-img-top" alt="..."/>
                        <div className="card-body">
                          <p className="card-text product-text">"Джулия"</p>
                        </div>
                  </div>
                </div>


                <img src={line} className="fullwidth rainbow-line" />
                  <div className="center-flex-container">
                    <div className="green-ribbon">
                      <h2 className="section-green-name">Гарантии</h2>
                    </div>
                  </div>
                  <div className="center-flex-container">
                    <h3 className="center-allign" >
			<span className="text">
				✔️Нашему магазину crazylime.ru в этом году 11 лет<br/>
				✔️У нас огромное количество отзывов на разных ресурсах. В инстаграм их более 1000 <br/>
				✔️В нашей группе уже более 100 000 человек<br/>
				✔️В закрепленных сториз есть все видеообзоры наших платьев и сьемки нашего магазина<br/>
				✔️Нам невыгодно получить от кого-то 5 тыс руб и исчезнуть, закрыть из-за этого бизнес<br/>
				✔️Нам не нужны недовольные клиенты, которые испортят нам репутацию<br/>
				✔️У нас официальное ИП, реквизиты есть на сайте crazylime.ru<br/>
			</span>
                    </h3>
                  </div>

            </div>
      </div>

</div>)
}

export default App;
