import React from "react"
import Layout from "../components/Layout"
import '../pages/index.scss';
import introBg from "../assets/intro-img.jpg"
import portfolioLink from '../assets/portfolio-link.jpg'
import aboutImg from '../assets/about-img.jpg'



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
      <section className="about">
        <div className="wrapper">
          <div className="about__content">
            <h2 className="about__title">Michał Wroceński</h2>
            <p className="about__desc">
              Mam na imię Michał, a fotografia to moja największa pasja.
              Pasja, którą postanowiłem uczynić swoją profesją.
            </p>
            <p className="about__desc">
              Każde naciśnięcie migawki, każde "pstryk" zrobione przez
              aparat to dla mnie wyjątkowy moment. Moment, w którym
              uwieczniłem na zdjęciu ułamek chwili.
            </p>
            <p className="about__desc">
              Czy to podczas pozowanej sesji, czy podczas tak ważnego dla Was wydarzenia
              jak Wasz ślub. Każde zdjęcie jest wyjątkowe, bo zatrzymuje chwilę.
              Będzie mi niezmierni miło, jeśli wybierzesz właśnie mnie,
              abym uwiecznił chwilę z Twojego życia na fotografii.
            </p>
          </div>
          <div className="about__image">
            <img src={aboutImg} alt="" />
          </div>
        </div>
      </section>
    </Layout>
  )
};


export default IndexPage
