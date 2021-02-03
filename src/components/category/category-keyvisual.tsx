import React, { useState } from 'react'
import Img, { FluidObject } from 'gatsby-image'
// style
import Category from '../../styles/category.module.scss'
// services
import { firstUpperCase } from '../../services/first-uppercase'

interface categoryKeyvisual {
  category: string
  img: FluidObject
  isBlur: boolean
}

export default (props: categoryKeyvisual) => {
  const no_filter = {
    filter: 'none'
  }

  return (
    <div className={Category.keyvisual}>
      <h1 className={Category.keyvisual__title}>
        {firstUpperCase(props.category)}
      </h1>
      <div
        className={Category.keyvisual__img}
        style={props.isBlur ? no_filter : undefined}
      >
        <Img fluid={props.img} alt={props.category} />
      </div>
    </div>
  )
}
