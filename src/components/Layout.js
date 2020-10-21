import React from 'react'
import Navigation from './Navigation'
import 'normalize.css'
import './Layout.scss'



const Layout = ({ children }) => {
  return (
    <div>
      <div className="container">
        <Navigation />
      </div>
      {children}
    </div>
  )
}

export default Layout;