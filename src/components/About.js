import React from "react";
import about from "../assests/about-img.webp";
import "../scss/about.scss";
const About = () => {
  return (
    <>
      <section id="about">
        <div className="container">
          <div className="img1">
            <img src={about} alt="" />
          </div>
          <div className="content">
            <div className="heading">
              <span>Everyone dreams about catching the next PEPE/PEPE2.0. </span>
              <h1>COULD THIS BE YOUR CHANCE RIGHT NOW? </h1>
            </div>
            <p>
            Just picture it: life is grand, you're cruising through the city in your brand new Lambo with your upgraded GF/BF, all thanks to your early investment in $PTA. Are you really ready to pass up your 'ticket' into $PTA this early? PepeCity awaits us. But this time, Pepe is taking the wheel in GTA style!
            </p>
            {/* <p>
              Are you really willing not to take your ‘ticket’ into $PEPEBONK
              this early?
            </p>
            <p>PepeWood awaits us. But this time, Pepe is going BONKERS!</p> */}
            {/* <a href="#">BIGGEST ETH STEALTH LAUNCH ABOUT TO HAPPEN</a> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
