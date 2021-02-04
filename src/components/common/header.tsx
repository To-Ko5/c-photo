import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
// components
import NavButton from './nav-button'
import Navigation from './navigation'
// style
import Header from '../../styles/header.module.scss'

export default () => {
  const [isLogo, setLocationName] = useState(true)
  useEffect(() => {
    const loc = window.location.pathname
    const locCategory = loc.split('/')
    if (locCategory[1] === 'category') {
      setLocationName(false)
    } else {
      setLocationName(true)
    }
  }, [])

  const [isNavigation, toggleNavigation] = useState(false)

  const clickNavigation = () => {
    toggleNavigation(!isNavigation)
    let body = document.body
    if (!isNavigation) {
      body.style.overflowY = 'hidden'
    } else {
      body.style.overflowY = 'auto'
    }
  }

  return (
    <header className={Header.header}>
      <div className={Header.header__flex}>
        {(() => {
          if (isLogo) {
            return (
              <p className={Header.logo}>
                <Link to={'/'} className={Header.logo__link}>
                  C-photo
                </Link>
              </p>
            )
          } else {
            return <div></div>
          }
        })()}
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
