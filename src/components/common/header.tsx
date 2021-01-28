import React, { useState } from 'react'
import { Link } from 'gatsby'

import NavButton from './nav-button'
import Navigation from './navigation'

import Header from '../../styles/header.module.scss'

export default () => {
  const loc = window.location.pathname
  const locCategory = loc.split('/')
  let isLogo = {}
  if (locCategory[1] === 'category') {
    isLogo = {
      opacity: '0',
      pointerEvents: 'none'
    }
  } else {
    isLogo = {
      opacity: '1'
    }
  }

  const [isNavigation, toggleNavigation] = useState(false)

  const clickNavigation = () => {
    toggleNavigation(!isNavigation)
  }

  return (
    <header className={Header.header}>
      <div className={Header.header__flex}>
        <p className={Header.logo} style={isLogo}>
          <Link to={'/'} className={Header.logo__link}>
            C-photo
          </Link>
        </p>
        <NavButton
          isNavigation={isNavigation}
          clickNavigation={clickNavigation}
        />
      </div>
      <Navigation
        isNavigation={isNavigation}
        clickNavigation={clickNavigation}
      />
    </header>
  )
}
