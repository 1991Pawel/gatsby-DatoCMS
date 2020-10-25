import React from "react"
import { Link, graphql } from 'gatsby'
import Img from "gatsby-image"
import Layout from "../components/Layout"
import '../pages/index.scss';
import portfolioLink from '../assets/portfolio-link.jpg'
import { AnchorLink } from "gatsby-plugin-anchor-links";
import nextIcon from '../assets/next.svg'
import { motion } from "framer-motion"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <div id="intro" className="intro">
        <div className="wrapper">
          <motion.div
            initial={{ opacity: 0, x: '4vw', }}
            animate={{ opacity: 1, x: 0, }}
            transition={{ delay: 1, duration: .5 }}


            className="intro__content">
            <h1 className="intro__title">Witam cie na mojej stronie</h1>
            <p className="intro__desc">Mam na imię <strong className="strong">Michał</strong>, a fotografia to moja najwieksza pasja.</p>
            <AnchorLink className="intro__btn" to="/#portfolio" title="Portfolio" />

          </motion.div>
          <motion.div
            className="intro__image"
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, }}
          >
            <Img fluid={data.file.childImageSharp.fluid} alt="" />
            <motion.div className="animation"
              initial={{ scale: 5, zIndex: 1, }}
              animate={{ scale: 1, zIndex: -1, }}
              transition={{ delay: .5, ease: "easeOut", duration: .8 }}
            />
          </motion.div>
        </div>
      </div>
      <section id="portfolio" className="portfolio">
        <div className="wrapper">
          <h2 className="portfolio__title">Galeria</h2>
          <div className="portfolio__option">
            <div className="portfolio__link">
              <Link
                state={{ query: 'wedding' }}
                to="/gallery/">
                <span>Wesela
                  <img className="portfolio__icon" src={nextIcon} alt="next icon" />
                </span>
                <Img fluid={data.galleryOne.childImageSharp.fluid} src={portfolioLink} placeholderStyle={{ visibility: "hidden" }} alt="" />
              </Link>
            </div>
            <div className="portfolio__link">
              <Link
                state={{ query: 'portrait' }}
                to="/gallery/">
                <span>Portrety
                  <img className="portfolio__icon" src={nextIcon} alt="next icon" />
                </span>
                <Img fluid={data.galleryOne.childImageSharp.fluid} src={portfolioLink} alt="" />
              </Link>
            </div>
            <div className="portfolio__link">
              <Link state={{ query: 'event' }} to="/gallery/">
                <span>Eventy
                  <img className="portfolio__icon" src={nextIcon} alt="next icon" />
                </span>
                <Img fluid={data.galleryOne.childImageSharp.fluid} src={portfolioLink} alt="" />
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
            <Img fluid={data.about.childImageSharp.fluid} alt="" />
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
    </Layout >
  )
};

export const query = graphql`
  query {
    file(relativePath: { eq: "intro-img.jpg" }) {
      childImageSharp {
        fluid(quality:95,maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    about: file(relativePath: { eq: "about-img.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    galleryOne: file(relativePath: { eq: "portfolio-link.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    galleryTwo:  file(relativePath: { eq: "portfolio-link.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    galleryThree: file(relativePath: { eq: "portfolio-link.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }`

export default IndexPage


