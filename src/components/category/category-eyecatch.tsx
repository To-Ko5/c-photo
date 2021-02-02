import React from 'react'
import Img, { FluidObject } from 'gatsby-image'
// style
import Category from '../../styles/category.module.scss'

interface categoryEyecatch {
  title: string
  img: FluidObject
  index: number
  toggleModal: (num: number) => void
}

export default (props: categoryEyecatch) => {
  return (
    <div
      className={Category.eyecatch}
      onClick={() => props.toggleModal(props.index)}
    >
      <div className={Category.eyecatch__img}>
        <Img fluid={props.img} alt={props.title} />
      </div>
    </div>
  )
}
