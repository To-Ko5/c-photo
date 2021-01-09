import React from 'react'

import Header from '../components/header'
import Footer from '../components/footer'

import '../styles/style.scss'

export default ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      {children}
      <Footer />
    </React.Fragment>
  )
}
