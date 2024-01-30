import React from "react";
import header from "./header.module.scss"

const Header = () => {
  return (
    <div className={header.header}>
      <div className={header.logoPart}>
        <img src="/logo.png" />
        <p>
          Колбасы и мясные деликатесы
        </p>
      </div>
      <div className={header.rightPart}>
        <div className={header.star}>
          <i className={`${header.starr} fa-regular fa-star`}></i>
          <span className={`${header.badge} badge bg-warning`}>3</span>
        </div>
        <div className={header.cartWrapper}>
        <i className={`${header.cart} fa-solid fa-basket-shopping`}></i>
        </div>
        <div className={header.stats}>
          <p>Товаров: 3 <br /> <span className={header.ruble}>6 540 ₽</span></p>
        </div>
      </div>
    </div>
  );
};

export default Header;
