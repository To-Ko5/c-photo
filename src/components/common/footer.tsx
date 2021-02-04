import React, { useState, useEffect } from 'react'
// style
import Footer from '../../styles/footer.module.scss'

export default () => {
  const [isFooter, setLocationName] = useState(true)
  useEffect(() => {
    const loc = window.location.pathname
    const locCategory = loc.split('/')
    if (locCategory[1] === 'category') {
      setLocationName(false)
    } else {
      setLocationName(true)
    }
  }, [])
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
