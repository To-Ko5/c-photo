import React from 'react'

import Footer from '../../styles/footer.module.scss'

export default () => {
  const loc = window.location.pathname
  const locCategory = loc.split('/')
  let isFooter = true
  if (locCategory[1] === 'category') {
    isFooter = false
  } else {
    isFooter = true
  }
  return (
    <React.Fragment>
      {isFooter && (
        <footer className={Footer.footer}>
          <p className={Footer.footer__text}>
            <small>C-photo</small>
          </p>
        </footer>
      )}
    </React.Fragment>
  )
}
