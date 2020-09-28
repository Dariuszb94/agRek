import React, { Component } from "react";
import water from "../../../Assets/water.png";
import greenBg from "../../../Assets/greenBg.png";
class ImagesColumn extends Component {
  render() {
    return (
      <div className="images col-12 col-lg-6">
        <div className="images__water col-8">
          <img
            src={water}
            className="images__water-image"
            alt="business meeting"
          />
        </div>
        <div className="images__green col-8">
          <img
            src={greenBg}
            className="images__green-image"
            alt="green background"
          />
        </div>
      </div>
    );
  }
}
export default ImagesColumn;
