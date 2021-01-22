import React from 'react'
import Img, { FluidObject } from 'gatsby-image'
//style
import Category from '../../styles/category.module.scss'

interface categoryKeyvisual {
  category: string
  img: FluidObject
}

export default (props: categoryKeyvisual) => {
  return (
    <div className={Category.keyvisual}>
      <h1 className={Category.keyvisual__title}>{props.category}</h1>
      <p className={Category.keyvisual__img}>
        <Img fluid={props.img} alt={props.category} />
      </p>
    </div>
  )
}
