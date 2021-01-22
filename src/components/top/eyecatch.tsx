import React from 'react'
import { Link } from 'gatsby'
import Img, { FluidObject } from 'gatsby-image'

import Footer from '../../styles/footer.module.scss'
import Top from '../../styles/top.module.scss'

interface eyecatch {
  category: string
  eyecatchImg: FluidObject
}

export default (props: eyecatch) => {
  return (
    <div className={Top.eyecatch}>
      <Link to={`${'/category/' + props.category}`}>
        <p className={Top.eyecatch__category}> {props.category}</p>
        <Img fluid={props.eyecatchImg} alt={props.category} />
      </Link>
    </div>
  )
}
