import React from 'react'
import Img, { FluidObject } from 'gatsby-image'
// style
import Top from '../../styles/top.module.scss'

interface topKeyvisual {
  title: string
  keyvisual: FluidObject
}

export default (props: topKeyvisual) => {
  return (
    <div className={Top.keyvisual}>
      <h1 className={Top.keyvisual__title}>{props.title}</h1>
      <div className={Top.keyvisual__img}>
        <Img fluid={props.keyvisual} alt={props.title} />
      </div>
    </div>
  )
}
