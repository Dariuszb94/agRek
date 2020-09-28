import React, { Component } from "react";
import fb from "../../../Assets/fb.png";
import ig from "../../../Assets/ig.png";

function Socials() {
  return (
    <div className="footer-container__rightColumn__socials d-flex justify-content-lg-end">
      <img
        className="footer-container__rightColumn__socials__social"
        src={fb}
        alt="facebook"
      ></img>
      <img
        className="footer-container__rightColumn__socials__social"
        src={ig}
        alt="instagram"
      ></img>
    </div>
  );
}
export default Socials;
