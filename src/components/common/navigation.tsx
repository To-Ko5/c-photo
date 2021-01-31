import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
// style
import Navigation from '../../styles/navigation.module.scss'

interface navigation {
  isNavigation: boolean
  clickNavigation: () => void
}

export default (props: navigation) => {
  return (
    <div
      className={`${Navigation.navigation}
    ${props.isNavigation ? Navigation.navigation__active : ''}
  `}
    >
      <div
        className={Navigation.navigation__wrapper}
        onClick={() => props.clickNavigation()}
      >
        <nav className={Navigation.nav}>
          <ul className={Navigation.gnav}>
            <li className={Navigation.gnav__list}>
              <Link
                to={'/'}
                className={Navigation.gnav__link}
                activeClassName={Navigation.gnav__link__active}
              >
                Top
              </Link>
            </li>
            <li className={Navigation.gnav__list}>
              <Link
                to={'/about'}
                className={Navigation.gnav__link}
                activeClassName={Navigation.gnav__link__active}
              >
                About
              </Link>
            </li>
            <li className={Navigation.gnav__list}>C-Portfolio</li>
            <li className={Navigation.gnav__list}>Contact</li>
            <li className={Navigation.gnav__list}>
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
