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
              <span>Everyone is dreaming about catching the next PEPE/PEPE2.0.</span>
              <h1>WHAT IF YOU’RE LOOKING AT YOUR CHANCE NOW?</h1>
            </div>
            <p>
              Just imagine yourself: life is good, you’re roaming around town in
              your brand new Lambo with your upgraded GF/BF, all because you
              were early on $PEPEBONK.
            </p>
            <p>
              Are you really willing not to take your ‘ticket’ into $PEPEBONK
              this early?
            </p>
            <p>PepeWood awaits us. But this time, Pepe is going BONKERS!</p>
            <a href="#">BIGGEST ETH STEALTH LAUNCH ABOUT TO HAPPEN</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
