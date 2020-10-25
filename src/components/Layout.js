import React from 'react'
import { Helmet } from "react-helmet"
import Navigation from './Navigation'
import Footer from './Footer'
import 'normalize.css'
import './Layout.scss'



const Layout = ({ children }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="keywords" content="photography" />
        <title>Michał Wroceński</title>
        <link rel="canonical" href="https://michal-wrocenski.netlify.app/" />
        <meta name="Description" content="Strona poświecona fotografii. Michał Wroceński , fotograf z Białegostoku"></meta>
        <html lang="pl" />
      </Helmet>
      <Navigation />
      {children}
      <Footer />
    </div>
  )
}

export default Layout;