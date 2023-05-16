import React from "react";
import "./css/style.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__card">
          <div className="footer__logo">qpick</div>
          <div className="footer__center">
            <a className="footer__btn" href="#">
              Избранное
            </a>
            <a className="footer__btn" href="#">
              Корзина
            </a>
            <a className="footer__btn" href="#">
              Контакты
            </a>
          </div>
          <div className="footer__right">
            <a className="footer__condition" href="#">
              Условия сервиса
            </a>
            <div className="footer__language">
              <img src="../image/language.png" alt="" />
              <form action="">
                <button className="footer__languageBtn">Рус</button>
                <button className="footer__languageBtn">Eng</button>
              </form>
            </div>
          </div>
          <div className="footer__last">
            <a className="footer_icons" href="#">
              <img src="../image/VK.png" alt="vk" />
            </a>
            <a className="footer_icons" href="#">
              <img src="../image/Telegram.png" alt="telegram" />
            </a>
            <a className="footer_icons" href="#">
              <img src="../image/Whatsapp.png" alt="whatsApp" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
