import React from 'react'
import { Link } from 'gatsby'
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
            <li className={Navigation.gnav__list}>
              <a
                href={`${process.env.GATSBY_PORTFOLIO_URL}/menu`}
                target="_blank"
                rel="noopener"
              >
                C-Portfolio
              </a>
            </li>
            <li className={Navigation.gnav__list}>
              <a
                href={`${process.env.GATSBY_PORTFOLIO_URL}/contact`}
                target="_blank"
                rel="noopener"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
