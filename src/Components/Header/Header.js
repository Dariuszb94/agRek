import React from "react";
import scissors from "../../Assets/scissors.png";
import TextColumn from "./HeaderComponents/TextColumn";
import ImagesColumn from "./HeaderComponents/ImagesColumn";

function Header() {
  return (
    <section className="header container">
      <article className="header__title">
        Lorem ipsum set dolore amet duis sir class!
      </article>
      <article className="header__content">
        <div className="row justify-content-between header__content-items">
          <TextColumn />
          <ImagesColumn />
        </div>
      </article>
      <article className="header__background">
        <img
          src={scissors}
          alt="scissors"
          className="header__background-image"
        />
      </article>
    </section>
  );
}
export default Header;
