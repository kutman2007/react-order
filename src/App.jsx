import "./App.css";
import s from "./comp/more/puma_magic.jpeg"
import w from "./comp/more/nike_magic.jpeg"
import r from "./comp/more/adidias_magic.jpeg"
import { Example } from "./comp/easy";
import { More } from "./comp/more";
export const App=()=>{
  return(
    <div className="cont">
    <div className="App">
      <div className="brend">
        <h3>PUMA</h3>
        <h3>NIKE</h3>
        <h3>ADIDAS</h3>
      </div>
      <div className="shoes">

      <div className="shoes">
      <img src={s} alt="" /> 
      </div>
      <div className="shoes">
      <img src={w} alt="" />
      </div>
      <div className="shoes">
      <img src={r} alt="" />
      </div>
      </div>
        <div className="res">
          <span>
          Бренд выпускает функциональные кроссовки. <br />
           При разработке моделей задействуются разнообразные <br />
            технологии. Одна из них - IGNITE. <br />
            Материалы производства. Для верха <br />
             используется натуральная кожа. Фасон. <br />
              PUMA придерживается классических решений. ...
                 Дизайн.

          </span>
          
          <span>
          Технология наполнения воздухом подошвы <br />
           Air Max, не имеет себе аналогов. ... <br />
          Идеально прочные и ровные швы, износоустойчивый <br />
           материал — основные критерии длительного срока <br />
            эксплуатации кроссовок Найк;
          </span>
          <span>
          Материалы. Производитель позаботился и <br />
           подобрал максимально легкие и дышащие <br />
            тканевые материалы, которые нигде не <br />
             пережимает ногу. ...Нет шнуровки. <br /> 
             Амортизационные свойства. ...Ортопедическая <br />
              стелька. ...Разнообразие. ...Протектор.
          </span>
        
        </div>
        <Example/>
        <More/>
    </div>
    </div>
  )
}
