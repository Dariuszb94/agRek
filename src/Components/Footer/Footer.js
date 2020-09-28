import React, { Component } from "react";
import Socials from "./FooterComponents/Socials";
import Editions from "./FooterComponents/Editions";
class Footer extends Component {
  render() {
    return (
      <section className="footer-container d-flex flex-column-reverse flex-lg-row">
        <article className="footer-container__editions col-lg-6 ">
          <div className="footer-container__editions-previous col-lg-6 row">
            Poprzednie edycje
          </div>
          <Editions />
          <div className="footer-container__editions-copyright">
            © 2019 Nazwa firmy sp. z o.o. wszystkie prawa zastrzeżone
          </div>
        </article>
        <article className="footer-container__rightColumn col-6">
          <Socials />
          <div className="footer-container__rightColumn-policy">
            Polityka prywatności
          </div>
        </article>
      </section>
    );
  }
}
export default Footer;
