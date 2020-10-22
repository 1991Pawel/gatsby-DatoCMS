import React from "react"
import Layout from "../components/Layout"
import '../pages/index.scss';
import introBg from "../assets/intro-img.jpg"
import portfolioLink from '../assets/portfolio-link.jpg'



const IndexPage = () => {
  return (
    <Layout>
      <div className="intro">
        <div className="wrapper">
          <div className="intro__content">
            <h1 className="intro__title">Witam cie na mojej stronie</h1>
            <p className="intro__desc">Mam na imię <strong className="strong">Michał</strong>, a fotografia to moja najwieksza pasja.</p>
            <a className="intro__btn" href="/">Portfolio</a>
          </div>
          <div className="intro__image">
            <img src={introBg} alt="" />
          </div>
        </div>
      </div>
      <section className="portfolio">
        <div className="wrapper">
          <h2 className="portfolio__title">Galeria</h2>
          <div className="portfolio__option">
            <div className="portfolio__link">
              <a href="">
                <span>Wesela</span>
                <img src={portfolioLink} alt="" />
              </a>
            </div>
            <div className="portfolio__link">
              <a href="">
                <span>Eventy</span>
                <img src={portfolioLink} alt="" />
              </a>
            </div>
            <div className="portfolio__link">
              <a href="">
                <span>Portrety</span>
                <img src={portfolioLink} alt="" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
};


export default IndexPage
