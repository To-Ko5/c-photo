import React from 'react'
import { Link } from 'gatsby'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

export default () => {
  return (
    <div>
      <p>
        C-photo
        <Link to={'/about'}>
          <FontAwesomeIcon icon={faBars} />
        </Link>
        <FontAwesomeIcon icon={faTwitter} />
      </p>
    </div>
  )
}
