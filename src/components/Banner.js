import React, { useEffect, useRef } from "react";
import { Parallax } from "react-parallax";
import "../scss/banner.scss";
import { MdKeyboardArrowRight } from "react-icons/md";
import bannerImg from "../assests/bg/banner-bac.webp";
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
              <h1>THIS TIME, PEPE IS GOING BONKERS.</h1>

              <p>CA: 0x559458f6ece2944533b4495b90d2c7b593fe5b90</p>
            </div>
            <div className="content">
              <a href="#">Telegram </a>
              <a target="blank_" href="#">
                Buy Now
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Banner;
