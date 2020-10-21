import React from "react"
import Layout from "../components/Layout"
import '../template/style.scss';
import introBg from "../assets/intro-img.jpg"



const IndexPage = () => {
  return (
    <Layout>
      <div className="intro">
        <header className="intro__content">
          <h1 className="intro__title">Witam cie na mojej stronie</h1>
          <p className="intro__desc">Mam na imię Michał, a fotografia to moja najwieksza pasja.</p>
          <a className="intro__btn" href="#">Portfolio</a>
        </header>
        <div className="intro__image">
          <img src={introBg} alt="" />
        </div>
      </div>
    </Layout>
  )
};


export default IndexPage
