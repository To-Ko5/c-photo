import React from 'react'
import Img, { FluidObject } from 'gatsby-image'
//style
import Category from '../../styles/category.module.scss'

interface categoryeyecatch {
  title: string
  img: FluidObject
  index: number
  toggleModal: (num: number) => void
}

export default (props: categoryeyecatch) => {
  return (
    <div
      className={Category.eyecatch}
      onClick={() => props.toggleModal(props.index)}
    >
      <p className={Category.eyecatch__img}>
        <Img fluid={props.img} alt={props.title} />
      </p>
    </div>
  )
}
