import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

import Header from '../../styles/header.module.scss'

interface navigation {
  isNavigation: boolean
  clickNavigation: () => void
}

export default (props: navigation) => {
  return (
    <div
      className={`${Header.navigation}
    ${props.isNavigation ? Header.navigation__active : ''}
  `}
    >
      <div
        className={Header.navigation__wrapper}
        onClick={() => props.clickNavigation()}
      >
        <nav className={Header.nav}>
          <ul className={Header.gnav}>
            <li className={Header.gnav__list}>
              <Link to={'/'} className={Header.gnav__link}>
                Top
              </Link>
            </li>
            <li className={Header.gnav__list}>
              <Link to={'/about'} className={Header.gnav__link}>
                About
              </Link>
            </li>
            <li className={Header.gnav__list}>C-Portfolio</li>
            <li className={Header.gnav__list}>Contact</li>
            <li className={Header.gnav__list}>
              <a>
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a>
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
