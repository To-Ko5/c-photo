import React from 'react'

import Header from './common/header'
import Footer from './common/Footer'

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
