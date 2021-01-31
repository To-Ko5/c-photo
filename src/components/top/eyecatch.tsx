import React from 'react'
import { Link } from 'gatsby'
import Img, { FluidObject } from 'gatsby-image'
// style
import Footer from '../../styles/footer.module.scss'
import Top from '../../styles/top.module.scss'
// services
import { firstUpperCase } from '../../services/first-uppercase'

interface eyecatch {
  category: string
  eyecatchImg: FluidObject
}

export default (props: eyecatch) => {
  return (
    <div className={Top.eyecatch}>
      <Link to={`${'/category/' + props.category}`}>
        <p className={Top.eyecatch__category}>
          {firstUpperCase(props.category)}
        </p>
        <Img fluid={props.eyecatchImg} alt={props.category} />
      </Link>
    </div>
  )
}
