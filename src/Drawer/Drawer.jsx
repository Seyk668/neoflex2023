import React, { useContext, useState } from "react";
import Footer from "../Footer";
import Header from "../Header";
import AppContext from "../AppContext";
import "./basket.css";

function Drawer() {
  const { cartItems } = useContext(AppContext);
  const [counter, setCounter] = useState(1);
  const price = 2927;
  const total = price * counter;

  const handleCounterClick = (action) => {
    if (action === "plus") {
      setCounter(counter + 1);
    } else if (action === "minus" && counter > 1) {
      setCounter(counter - 1);
    }

    console.log("click", setCounter);
  };

  return (
    <>
      <Header />
      <div className="section">
        <div className="container">
          <h2 className="section__title">Корзина</h2>
          <div className="card__Bas">
            <div className="card__itemBas">
              <div className="card__itemImg">
                <img
                  className="card__imgBas"
                  src="../image/BYZ S852I.png"
                  alt=""
                />
              </div>
              <div className="card__GlTextBas">
                <div className="card__textBas">
                  <div className="card__name">Apple BYZ S852I</div>
                  <div className="card__priceBas">2927 Р</div>
                </div>
              </div>
              <div className="card__formDeleteBas" action="">
                <button className="card__btnDelete">
                  <img src="../image/delete.png" alt="" />
                </button>
              </div>

              <div className="bottom__amountBas">
                <div className="card__btnMinus" action="">
                  <img
                    src="../image/minus.png"
                    alt="-"
                    data-action="minus"
                    onClick={() => handleCounterClick("minus")}
                  />
                </div>
                <div className="card__amount" data-counter>
                  {counter}
                </div>
                <div className="card__btnPlus">
                  <img
                    src="../image/plus.png"
                    alt="+"
                    data-action="plus"
                    onClick={() => handleCounterClick("plus")}
                  />
                </div>
              </div>
              <div className="card__total">{total}</div>
            </div>
          </div>
          <div className="card__registration">
            <div className="top__registration">
              <div className="registration__total">Итого</div>
              <div className="registration__total">{total}</div>
            </div>
            <form className="form__buy" action="">
              <button className="btn__buy">Перейти к оформлению</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Drawer;
