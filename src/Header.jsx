import React from "react";
import { Link } from "react-router-dom";
import "./css/style.css";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <Link to="/" className="header__logo">
            qpick
          </Link>
          <div className="nav">
            <a className="nav__link" href="#">
              <img src="../image/favorites.svg" alt="favorites" />
            </a>
            <Link to="/drawer" className="nav__link">
              <img src="../image/basket.svg" alt="basket" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
