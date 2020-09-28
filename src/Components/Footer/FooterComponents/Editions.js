import React, { Component } from "react";

class Editions extends Component {
  render() {
    return (
      <div className="editions d-flex row">
        <div className="editions__element col-lg-4">
          Edycja pierwsza
        </div>
        <div className="editions__element  col-lg-4">
          Edycja druga
        </div>
        <div className="editions__element col-lg-4">
          Edycja trzecia
        </div>
      </div>
    );
  }
}
export default Editions;
