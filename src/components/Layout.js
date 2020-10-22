import React from 'react'
import Navigation from './Navigation'
import 'normalize.css'
import './Layout.scss'



const Layout = ({ children }) => {
  return (
    <div>
      <Navigation />
      {children}
    </div>
  )
}

export default Layout;