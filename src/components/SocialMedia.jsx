import React from "react";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://twitter.com/ColinaIsai">
        <BsTwitter />
      </a>
    </div>
    <div>
      <a href="https://www.facebook.com/oscar.colina.14">
        <FaFacebookF />
      </a>
    </div>
    <div>
      <a href="https://www.instagram.com/isaicolina11/">
        <BsInstagram />
      </a>
    </div>
  </div>
);

export default SocialMedia;
