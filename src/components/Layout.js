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
        <title>Michal wrocenski</title>
        <link rel="canonical" href="https://michal-wrocenski.netlify.app/" />
        <html lang="pl" />
      </Helmet>
      <Navigation />
      {children}
      <Footer />
    </div>
  )
}

export default Layout;