import React from 'react'
import Img, { FluidObject } from 'gatsby-image'
//style
import Category from '../../styles/category.module.scss'

interface categoryModal {
  title: string
  img: FluidObject
  description: string
  toggleModal: (num: number) => void
}

export default (props: categoryModal) => {
  return (
    <div className={Category.modal} onClick={() => props.toggleModal(null)}>
      <div className={Category.modal__inner}>
        <p className={Category.modal__img}><Img fluid={props.img} alt={props.title}/></p>
        <p>{props.title}</p>
        <p>{props.description}</p>
      </div>
    </div>
  )
}
