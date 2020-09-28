import React from "react";
import Steps from "./MainComponents/Steps/Steps";
import Form from "./MainComponents/Form/Form";
import Donations from "./MainComponents/Donations";
function Main() {
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
export default Main;
