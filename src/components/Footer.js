import React from "react";
import {
  FaAccessibleIcon,
  FaDiscord,
  FaFacebook,
  FaInstagram,
  FaPage4,
  FaTelegram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { AiOutlineTwitter, AiOutlineTelegram } from "react-icons/ai";
import "../scss/footer.scss";
import { LinkRounded } from "@material-ui/icons";


const Footer = () => {
  return (
    <>
      <footer id="footer">
        <div className="container">
          <p>Copyright © 2023 PEPE BONKERS - All Rights Reserved.</p>
         
        </div>
      </footer>
    </>
  );
};

export default Footer;
