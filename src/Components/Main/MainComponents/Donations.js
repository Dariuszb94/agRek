import React, { Component } from "react";

class Donations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      button50Active: true,
      button70Active: false,
      button100Active: false,
    };
    this.changeDonation = this.changeDonation.bind(this);
  }
  changeDonation(donation) {
    this.setState({
      button50Active: donation === 50,
      button70Active: donation === 70,
      button100Active: donation === 100,
    });
  }
  render() {
    return (
      <section className="donations-container d-flex flex-column align-items-center ">
        <header className="donations-container__header">Wybierz kwotę</header>
        <article className="donations-container__content col-12 d-flex justify-content-between flex-column">
          <div className="row justify-content-around">
            <button
              className={`donations-container__content-button--${
                this.state.button50Active ? "active" : "inactive"
              } d-flex justify-content-center align-items-center`}
              onClick={() => this.changeDonation(50)}
            >
              50 ZŁ
            </button>
            <button
              className={`donations-container__content-button--${
                this.state.button70Active ? "active" : "inactive"
              } d-flex justify-content-center align-items-center`}
              onClick={() => this.changeDonation(70)}
            >
              70 ZŁ
            </button>
            <button
              className={`donations-container__content-button--${
                this.state.button100Active ? "active" : "inactive"
              } d-flex justify-content-center align-items-center`}
              onClick={() => this.changeDonation(100)}
            >
              100 ZŁ
            </button>
          </div>
        </article>
        <article className="donations-container__bottom-text col-10">
          *Doceniamy każdą wpłatę za pośrednictwem naszej strony, jednak aby
          otrzymać upominek wsparcie to minimum 50 zł.
        </article>
      </section>
    );
  }
}
export default Donations;
