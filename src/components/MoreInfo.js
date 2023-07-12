import React from "react";
import "../scss/moreinfo.scss";
import img1 from "../assests/moreInfo-img.webp";
const MoreInfo = () => {
  return (
    <>
      <section id="section-2">
        <div className="container">
          <div className="img">
            <img src={img1} alt="" />
          </div>
          <div className="content">
            <div className="heading">
              <h1>INTRODUCING PEPE BONKERS</h1>
            </div>
            <div className="para">
              <p>
                <b>$PEPEBONK</b> is not your usual memecoin. We are a
                milestone-oriented community project.
              </p>
              <p>
                Because we are chads and we want to bring value to the degen
                community, holders with over 0.3% of supply will have acces to
                the private PepeWood chat, where we will mirror all major paid
                alpha bots/calls from the space.
              </p>
              <p>
                Every new ath we’ll break, we will be closer to a top tier CEX
                listing.
              </p>
              <p>
                So get your ETH ready, hodl <b>$PEPEBONK</b> and enjoy the ride
                towards 1000x. This is your time.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MoreInfo;
