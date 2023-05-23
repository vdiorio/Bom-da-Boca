import React from "react";
import "./about.scss";
import bg from "./g.jpg";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="row">
          <div className="aboutContainer">
            <div
              style={{ backgroundImage: `url(${bg})` }}
              className="aboutContainerImg bgImg"
            ></div>

            <div className="aboutContainerDetails">
              <h1>
                <span className="colorGrey">Nós criamos</span>  deliciosas memórias
                <span className="colorGrey"> para nós</span>
              </h1>
              <p>
                Nós preparamos o melhor lanche da cidade,com um excelente
                atendimento ao cliente,as melhores refeições e pelo melhor preço.
                <a href="#contact" className="link">Visite-nos</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
