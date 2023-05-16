import React, { useContext } from "react";
import "./css/style.css";
import AppContext from "./AppContext";

function Card({ title, price, rate, img }) {
  const { addItem } = useContext(AppContext);

  const handleClick = () => {
    const item = { title, price, rate, img };
    addItem(item);
    console.log("click", item);
  };

  return (
    <div className="card__item" data-id="01">
      <img className="card__img" src={img} alt="sneakers" />
      <div className="card__GlText">
        <div className="card__text">
          <span className="card__name">{title}</span>
          <span className="card__price">{price} Р</span>
        </div>
        <div className="card__bottomFirst">
          <span className="card__star">
            <img src="../image/star.png" alt="star" />
          </span>
          <span className="card__grade">{rate}</span>
          <div className="card__button">
            <form action="">
              <button className="card__btn" onClick={handleClick}>
                Купить
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
