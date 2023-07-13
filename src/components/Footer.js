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
          <p style={{ maxWidth: "600px" }}>
            $PTA is a meme coin with no intrinsic value or expectation of
            financial return. There is no formal team or roadmap. the coin is
            completely useless and for entertainment purposes only.
          </p>
          <span>© 2023 by PTA. All rights reserved!</span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
