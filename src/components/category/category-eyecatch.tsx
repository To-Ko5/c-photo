import React from 'react'
import Img, { FluidObject } from 'gatsby-image'
//style
import Category from '../../styles/category.module.scss'

interface categoryeyecatch {
  title: string
  img: FluidObject
}

export default (props: categoryeyecatch) => {
  return (
    <div className={Category.eyecatch}>
      <p className={Category.eyecatch__img}>
        <Img fluid={props.img} alt={props.title} />
      </p>
    </div>
  )
}
