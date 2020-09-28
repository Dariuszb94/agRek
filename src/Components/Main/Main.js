import React, { Component } from "react";
import Steps from "./MainComponents/Steps/Steps";
import Form from "./MainComponents/Form/Form";
import Donations from "./MainComponents/Donations";
class Main extends Component {
  render() {
    return (
      <section className="main-container container-fluid">
        <div className="container">
          <Steps />
          <Donations />
          <Form />
        </div>
      </section>
    );
  }
}
export default Main;
