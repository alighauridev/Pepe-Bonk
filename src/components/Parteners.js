import React from "react";
import i1 from "../assests/icon.1.webp";
import i2 from "../assests/icon.2.webp";
import i3 from "../assests/icon.3.webp";
import i4 from "../assests/icon.4.webp";
import i5 from "../assests/icon.5.webp";
import "../scss/parteners.scss";
const Parteners = () => {
  return (
    <>
      <section id="parteners">
        <div className="container">
          <div className="heading">
            <h1> SOCIALS</h1>
          </div>
          <div className="content">
            <a href="#">
              <img src={i1} alt="" />
            </a>
            <a href="#">
              <img src={i2} alt="" />
            </a>
            <a href="#">
              <img src={i3} alt="" />
            </a>
            <a href="#">
              <img src={i4} alt="" />
            </a>
            <a href="#">
              <img src={i5} alt="" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Parteners;
