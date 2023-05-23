import React from "react";
import Form from "./Form/Form";

import { TiLocationOutline } from 'react-icons/ti';
import { FaMobileAlt } from 'react-icons/fa';
import { BsChatSquare } from 'react-icons/bs';
import { AiFillFacebook } from 'react-icons/ai';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { FaInstagram } from 'react-icons/fa';
import "./contact.scss";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h1 className="contactHeader">Contato</h1>
        <div className="contactAddress">
        <a href="https://maps.google.com/maps?ll=-23.365695,-46.871663&z=17&t=m&hl=pt-BR&gl=BR&mapclient=embed&cid=10392344294714579829">
            <div className="contactAddressDetails">
              <h2><TiLocationOutline /></h2>
              <h1>Location</h1>
              <p>Encontre rotas</p>
            </div>
          </a>
          <a href="https://whatsa.me/5511997396825">
            <div className="contactAddressDetails">
              <h2><AiOutlineWhatsApp /></h2>
              <h1>Whatsapp</h1>
              <p>11 99739-6825</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
