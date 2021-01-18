import React from 'react'

import Header from '../../styles/header.module.scss'

export default (props: { clickNavigation: () => void }) => {
  return (
    <div className={Header.nav_button}>
      <a
        className={Header.nav_button__link}
        onClick={() => props.clickNavigation()}
      >
        Menu
      </a>
    </div>
  )
}
