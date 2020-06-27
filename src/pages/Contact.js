import React from "react";
import NavMenu from "../components/NavMenu.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileAlt, faAt } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

const phone = <FontAwesomeIcon style={{marginLeft: "5px"}} icon={faMobileAlt} size="1x" />;
const at = <FontAwesomeIcon icon={faAt} size="1x" />;
const facebook = <FontAwesomeIcon icon={faFacebook} size="1x" />;

export default function Contact() {
  return (
    <div className="contact">
      <NavMenu navBg="bg-contact-nav" />
      <div className="contact-info">
        <div className="d-flex flex-column">
          <h1 className="animate__animated animate__bounce">{phone}</h1>
          <h1 className="animate__animated animate__bounce animate__delay-1s">{at}</h1>
          <h1 className="animate__animated animate__bounce animate__delay-2s">{facebook}</h1>
        </div>
        <div className="d-flex flex-column">
          <h1 className="animate__animated animate__slideInRight">090-2510-918</h1>
          <h1 className="animate__animated animate__slideInRight animate__delay-1s">jamesadenhall@gmail.com</h1>
          <h1 className="animate__animated animate__slideInRight animate__delay-2s">https://www.facebook.com/ad.ng.98</h1>
        </div>
      </div>
    </div>
  );
}
