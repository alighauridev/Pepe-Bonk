import React from "react";
import tokenomics from "../assests/tokenomics-img.webp";
import "../scss/tokenomics.scss";
const Tokenomics = () => {
  return (
    <>
      <section id="tokenomics">
        <div className="container">
          <div className="img1">
            <img src={tokenomics} alt="" />
          </div>
          <div className="content">
            <div className="heading">
              <h1>TOKENOMICS</h1>
            </div>
            <p>
              <p>Contract Address</p> 0x559458F6eCE2944533B4495b90d2c7B593Fe5b90
            </p>
            <p>
              Total Supply
              <span>4,206,900</span>
            </p>

            <p>
              Taxes
              <span>2%</span>
            </p>

            <p>
              Security
              <span>Ownership Renounced</span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Tokenomics;
