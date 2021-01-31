import React from 'react'
// style
import Header from '../../styles/header.module.scss'

interface navigation {
  isNavigation: boolean
  clickNavigation: () => void
}

export default (props: navigation) => {
  const menuText = props.isNavigation ? 'Close' : 'Menu'

  return (
    <div className={Header.nav_button}>
      <a
        className={Header.nav_button__link}
        onClick={() => props.clickNavigation()}
      >
        <span>{menuText}</span>
      </a>
    </div>
  )
}
