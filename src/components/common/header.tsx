import React, { useState } from 'react'
import { Link } from 'gatsby'

import NavButton from './nav-button'

import Header from '../../styles/header.module.scss'

export default () => {
  const [isNavigation, toggleNavigation] = useState(false)

  const clickNavigation = () => {
    toggleNavigation(!isNavigation)
    console.log(isNavigation)
  }

  return (
    <header className={Header.header}>
      <div className={Header.header__flex}>
        <p className={Header.logo}>
          <Link to={'/about'} className={Header.logo__link}>
            C-photo
          </Link>
        </p>
        <NavButton clickNavigation={clickNavigation} />
      </div>
    </header>
  )
}
