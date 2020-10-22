import React from "react"
import Layout from "../components/Layout"
import '../pages/index.scss';
import introBg from "../assets/intro-img.jpg"



const IndexPage = () => {
  return (
    <Layout>
      <div className="wrapper">
        <div className="intro">
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
    </Layout>
  )
};


export default IndexPage
