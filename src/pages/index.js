import React from "react"
import { Link } from 'gatsby'
import Layout from "../components/Layout"
import '../pages/index.scss';
import introBg from "../assets/intro-img.jpg"
import portfolioLink from '../assets/portfolio-link.jpg'
import aboutImg from '../assets/about-img.jpg'
import { AnchorLink } from "gatsby-plugin-anchor-links";
import facebookIcon from '../assets/instagram.svg'
import instagramIcon from '../assets/facebook.svg'
import nextIcon from '../assets/next.svg'




const IndexPage = () => {
  return (
    <Layout>
      <div id="intro" className="intro">
        <div className="wrapper">
          <div className="intro__content">
            <h1 className="intro__title">Witam cie na mojej stronie</h1>
            <p className="intro__desc">Mam na imię <strong className="strong">Michał</strong>, a fotografia to moja najwieksza pasja.</p>
            <AnchorLink className="intro__btn" to="/#portfolio" title="Portfolio" />
          </div>
          <div className="intro__image">
            <img src={introBg} alt="" />
          </div>
        </div>
      </div>
      <section id="portfolio" className="portfolio">
        <div className="wrapper">
          <h2 className="portfolio__title">Galeria</h2>
          <div className="portfolio__option">
            <div className="portfolio__link">
              <Link to="/gallery">
                <span>Wesela
                  <img className="portfolio__icon" src={nextIcon} alt="next icon" />
                </span>
                <img src={portfolioLink} alt="" />
              </Link>
            </div>
            <div className="portfolio__link">
              <Link to="/gallery">
                <span>Portrety
                  <img className="portfolio__icon" src={nextIcon} alt="next icon" />
                </span>
                <img src={portfolioLink} alt="" />
              </Link>
            </div>
            <div className="portfolio__link">
              <Link to="/gallery">
                <span>Eventy
                  <img className="portfolio__icon" src={nextIcon} alt="next icon" />
                </span>
                <img src={portfolioLink} alt="" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section id="about" className="about">
        <div className="wrapper">
          <div className="about__content">
            <h2 className="about__title">Michał Wroceński</h2>
            <p className="about__desc">
              Mam na imię <strong className="strong">Michał</strong>, a fotografia to moja największa pasja.
              Pasja, którą postanowiłem uczynić swoją profesją.
            </p>
            <p className="about__desc">
              Każde naciśnięcie migawki, każde <strong className="strong">"pstryk</strong> zrobione przez
              aparat to dla mnie wyjątkowy moment. Moment, w którym
              uwieczniłem na zdjęciu ułamek chwili.
            </p>
            <p className="about__desc">
              Czy to podczas pozowanej sesji, czy podczas tak ważnego dla Was wydarzenia
              jak Wasz ślub. <strong className="strong">Każde zdjęcie jest wyjątkowe, bo zatrzymuje chwilę</strong>, bo zatrzymuje chwilę.
              Będzie mi niezmierni miło, jeśli wybierzesz właśnie mnie,
              abym uwiecznił chwilę z Twojego życia na fotografii.
            </p>
          </div>
          <div className="about__image">
            <img src={aboutImg} alt="" />
          </div>
        </div>
      </section>
      <section id="services" className="services">
        <div className="wrapper">
          <h2 className="services__title">oferta</h2>
          <div className="services__boxs">
            <div className="services__box">
              <h3 className="services__heading">
                Sesje indywidualne
            </h3>
              <p className="services__desc">
                Podczas takiej sesji spotykamy się w plenerze lub w moim studio.
                Czas trwania sesji jest uzależniony od twoich oczekiwań i potrzeb. Jeśli będzie to twoja
                pierwsza sesja i czujesz lekką tremę - nic się nie przejmuj. Gwarantuję, że będziemy się
                dobrze bawić, a atmosfera podczas sesji będzie luźna. Jeśli natomiast jesteś profesjonalną
                modelką lub modelem to opisz mi swoje oczekiwania co do sesji najdokładniej jak tylko potrafisz.
                Postaram się spełnić je wszystkie.
            </p>
            </div>
            <div className="services__box">
              <h3 className="services__heading">
                Sesje rodzinne
            </h3>
              <p className="services__desc">
                Podobnie jak w przypadku sesji indywidualnych. W zależności od pory roku i pogody oraz waszych
                chęci, możemy spotkać się w studio lub w plenerze. Czas takiej sesji uzależniony
                jest cierpliwością dzieciaków. Proponuję, abyście zarezerwowali sobie na taką sesję
                od godziny do dwóch.
            </p>
            </div>
            <div className="services__box">
              <h3 className="services__heading">
                Sesje Narzeczeńskie
            </h3>
              <p className="services__desc">
                Sesje, które odbywają się jeszcze przed Waszym ślubem proponuję przeprowadzić w nietuzinkowych
                miejscach. Zaufajcie mi, znam kilka takich miejsc na Podlasiu. Jeśli macie własne pomysły
                co do realizacji - jestem otwarty.
            </p>
            </div>
            <div className="services__box">
              <h3 className="services__heading">
                Sesje eventowe
            </h3>
              <p className="services__desc">
                Wasz ślub to wyjątkowy dzień w waszym życiu. Wkładam całe swoje serce oraz doświadczenie w to,
                abyście mieli niezapomnianą pamiątkę. W tym wyjątkowym dla Was dniu, będę towarzyszył Wam na każdym
                kroku, zarówno podczas przygotować, później w świątyni, jak również niezapomnianej imprezy.
            </p>
            </div>
            <div className="services__box">
              <h3 className="services__heading">
                Sesje indywidualne
            </h3>
              <p className="services__desc">
                Podczas takiej sesji spotykamy się w plenerze lub w moim studio.
                Czas trwania sesji jest uzależniony od twoich oczekiwań i potrzeb. Jeśli będzie to twoja
                pierwsza sesja i czujesz lekką tremę - nic się nie przejmuj. Gwarantuję, że będziemy się
                dobrze bawić, a atmosfera podczas sesji będzie luźna. Jeśli natomiast jesteś profesjonalną
                modelką lub modelem to opisz mi swoje oczekiwania co do sesji najdokładniej jak tylko potrafisz.
                Postaram się spełnić je wszystkie.
            </p>
            </div>
          </div>
        </div>
      </section>
      <footer id="contact" className="contact">
        <div className="wrapper">
          <div className="socials">
            <h4>Kontakt</h4>
            <ul className="socials__list">
              <li className="socials__item">
                <a className="socials__link" href="tel:+18506484200">
                  tel 850-648-4200</a>
              </li>
              <li className="socials__item">
                <a className="socials__link" href="mailto:example@.com"> przykladowy@gmail.com</a>
              </li>
              <li className="socials__item">
                www.stonainternetowa.pl
              </li>
            </ul>
            <h4>znajdz mnie</h4>
            <ul className="socials__list socials__list--flex">
              <li className="socials__item socials__item--mr">
                <a className="socials__link" href="tel:+18506484200">
                  <img className="socials__icon" src={facebookIcon} alt="facebook icon" />
                </a>
              </li>
              <li className="socials__item socials__item--mr">
                <a className="socials__link" href="tel:+18506484200">
                  <img className="socials__icon" src={instagramIcon} alt="instagram icon" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="copyright">© 2020 P.L All Rights Reserved</p>
      </footer>
    </Layout >
  )
};


export default IndexPage


