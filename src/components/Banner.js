import React, { useEffect, useRef } from "react";
import { Parallax } from "react-parallax";
import "../scss/banner.scss";
import { MdKeyboardArrowRight } from "react-icons/md";
import bannerImg from "../assests/7.jpg";
const Banner = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        const rect = imageRef.current.getBoundingClientRect();
        const scrollTop =
          window.pageYOffset || document.documentElement.scrollTop;

        if (rect.top < window.innerHeight && rect.bottom > 0) {
          const scrollPercentage =
            (window.innerHeight - rect.top) / window.innerHeight;
          const rotationAngle = -90 + scrollPercentage * 90;

          imageRef.current.style.transform = `rotateY(${rotationAngle}deg)`;
          imageRef.current.style.transition = "transform 0.5s ease-out";
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="banner__wrapper">
        <img src={bannerImg} style={{ width: "100%" }} alt="" />
        <section id="banner">
          <div className="container">
            <div className="heading">
              <h1>PEPE THEFT AUTO THE MEME COIN THAT STEALS THE SHOW</h1>

              <p>CA:0x87327C89f1ABb682140063192f1c8AA6be8B347B</p>
            </div>
            <div className="content">
              <a target="blank_" href="https://app.uniswap.org/#/swap?outputCurrency=0x87327c89f1abb682140063192f1c8aa6be8b347b&chain=ethereum">
                BUY NOW
              </a>
              <a href="https://t.me/pepetheftauto" target="blank_">
                TELEGRAM{" "}
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Banner;
