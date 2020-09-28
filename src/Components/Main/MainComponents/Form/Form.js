import React, { Component } from "react";
import RodoText from "./FormComponents/RodoText";
import formBg from "../../../../Assets/formBg.png";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uniqueNumber: null,
      name: "",
      street: "",
      email: "",
      city: "",
      number: "",
      post: "",
      nameInvalid: false,
      streetInvalid: false,
      emailInvalid: false,
      cityInvalid: false,
      numberInvalid: false,
      postInvalid: false,
      submitted: false,
      rodoAccepted: false,
      dataOK: null,
    };
    this.validate = this.validate.bind(this);
    this.acceptRodo = this.acceptRodo.bind(this);
  }
  componentDidMount() {
    let random = Math.floor(Math.random() * (999999 - 111111 + 1) + 111111);
    this.setState({ uniqueNumber: random });
  }
  acceptRodo() {
    this.setState((prevState) => ({
      rodoAccepted: !prevState.rodoAccepted,
    }));
  }
  validate() {
    this.setState(
      {
        nameInvalid: !this.state.name.length,
        streetInvalid: !this.state.street.length,
        emailInvalid: !this.state.email.length,
        cityInvalid: !this.state.city.length,
        numberInvalid: !this.state.number.length,
        postInvalid: !this.state.post.length,
      },
      () => this.send()
    );
  }
  send() {
    if (
      !this.state.nameInvalid &&
      !this.state.streetInvalid &&
      !this.state.emailInvalid &&
      !this.state.cityInvalid &&
      !this.state.numberInvalid &&
      !this.state.postInvalid &&
      this.state.rodoAccepted
    ) {
      this.setState({ dataOK: true }, () => console.log(this.state.dataOK));
    } else {
      this.setState({ dataOK: false }, () => console.log(this.state.dataOK));
    }
  }
  render() {
    return (
      <section className="form-container col-lg-8 d-flex flex-column justify-content-center">
        <header className="form-container__header">Dane do wysyłki</header>
        <form className="form-container__form d-flex flex-wrap justify-content-between align-content-between">
          <input
            className={`form-container__form-input${
              this.state.nameInvalid ? "--invalid" : ""
            }`}
            placeholder="imię nazwisko"
            value={this.state.name}
            onChange={(event) => this.setState({ name: event.target.value })}
          ></input>
          <input
            className={`form-container__form-input${
              this.state.streetInvalid ? "--invalid" : ""
            }`}
            placeholder="ulica "
            value={this.state.street}
            onChange={(event) => this.setState({ street: event.target.value })}
          ></input>
          <input
            className={`form-container__form-input${
              this.state.emailInvalid ? "--invalid" : ""
            }`}
            placeholder="adres e-mail"
            value={this.state.email}
            onChange={(event) => this.setState({ email: event.target.value })}
          ></input>
          <input
            className={`form-container__form-input${
              this.state.cityInvalid ? "--invalid" : ""
            }`}
            placeholder="miasto"
            value={this.state.city}
            onChange={(event) => this.setState({ city: event.target.value })}
          ></input>
          <input
            className={`form-container__form-input${
              this.state.numberInvalid ? "--invalid" : ""
            }`}
            placeholder="telefon"
            value={this.state.number}
            onChange={(event) => this.setState({ number: event.target.value })}
          ></input>
          <input
            className={`form-container__form-input${
              this.state.postInvalid ? "--invalid" : ""
            }`}
            placeholder="kod pocztowy"
            value={this.state.post}
            onChange={(event) => this.setState({ post: event.target.value })}
          ></input>
        </form>
        <article className="form-container__code">
          Twój unikalny kod: #{this.state.uniqueNumber}
        </article>
        <article className="form-container__rodo d-flex align-items-start">
          <input
            className={`form-container__rodo__checkbox${
              !this.state.rodoAccepted && this.state.dataOK === false
                ? "--invalid"
                : ""
            }`}
            type="checkbox"
            onClick={this.acceptRodo}
          />
          <RodoText />
        </article>
        <article
          className={`form-container__submitOK--${
            this.state.dataOK ? "shown" : "hidden"
          }`}
        >
          Wsparcie przesłane
        </article>
        <article
          className={`form-container__submitNOK--${
            this.state.dataOK !== null && !this.state.dataOK
              ? "shown"
              : "hidden"
          }`}
        >
          Popraw dane
        </article>
        <button className="form-container__submit" onClick={this.validate}>
          WSPIERAM
        </button>
        <img
          className="form-container__bg"
          src={formBg}
          alt="form background"
        />
      </section>
    );
  }
}
export default Form;
