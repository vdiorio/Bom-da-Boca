import React from "react";

import "./footer.scss";
import bg from './l.jpg';


const Footer = () => {
  return (
    <footer
      className="footer bgImg bgImgFixed"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="container">
        <p className="license">copyright 2023 &#169; Criado por <a href="vdiorio.github.io">Vitor Diorio</a></p>
      </div>
    </footer>
  );
};

export default Footer;
