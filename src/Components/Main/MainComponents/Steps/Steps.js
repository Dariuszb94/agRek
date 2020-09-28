import React, { Component } from "react";
import Step1 from "./StepsComponents/Step1";
import Step2 from "./StepsComponents/Step2";
import Step3 from "./StepsComponents/Step3";
import Step4 from "./StepsComponents/Step4";

function Steps() {
  return (
    <section className="steps-container">
      <header className="steps-container__header">
        Jak możesz się dołożyć?
      </header>
      <article className="steps-container__content col-12">
        <Step1 />
        <Step2 />
        <Step3 />
        <Step4 />
      </article>
    </section>
  );
}
export default Steps;
