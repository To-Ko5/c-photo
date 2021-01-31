import React from 'react'
import Img, { FluidObject } from 'gatsby-image'
//style
import Category from '../../styles/category.module.scss'

interface categoryKeyvisual {
  category: string
  img: FluidObject
}

export default (props: categoryKeyvisual) => {
  const firstUpperCase = (title: string) => {
    const upperCaseTitle = title.charAt(0).toUpperCase() + title.slice(1)
    return upperCaseTitle
  }
  return (
    <div className={Category.keyvisual}>
      <h1 className={Category.keyvisual__title}>
        {firstUpperCase(props.category)}
      </h1>
      <p className={Category.keyvisual__img}>
        <Img fluid={props.img} alt={props.category} />
      </p>
    </div>
  )
}
