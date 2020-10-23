import React from 'react'
import Navigation from './Navigation'
import Footer from './Footer'
import 'normalize.css'
import './Layout.scss'



const Layout = ({ children }) => {
  return (
    <div>
      <Navigation />
      {children}
      <Footer />
    </div>
  )
}

export default Layout;