import React, { useState } from 'react'
import Img, { FluidObject } from 'gatsby-image'
// style
import Category from '../../styles/category.module.scss'
// services
import { firstUpperCase } from '../../services/first-uppercase'

interface categoryKeyvisual {
  category: string
  img: FluidObject
}

export default (props: categoryKeyvisual) => {
  const no_filter = {
    filter: 'none'
  }

  const [blur, blurToggle] = useState(false)

  const changeBlur = () => {
    blurToggle(!blur)
  }
  return (
    <div className={Category.keyvisual}>
      <h1 className={Category.keyvisual__title}>
        {firstUpperCase(props.category)}
      </h1>
      <p
        className={Category.keyvisual__img}
        style={blur ? no_filter : undefined}
        onClick={() => changeBlur()}
      >
        <Img fluid={props.img} alt={props.category} />
      </p>
    </div>
  )
}
