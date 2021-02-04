import React from 'react'
// components
import Header from './common/header'
import Footer from './common/footer'
// style
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
