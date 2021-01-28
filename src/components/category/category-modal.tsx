import React from 'react'
import Img, { FluidObject } from 'gatsby-image'
//style
import Category from '../../styles/category.module.scss'

interface categoryModal {
  title: string
  img: FluidObject
  description: string
  index: number
  categoryLength: number
  toggleModal: (num: number) => void
}

export default (props: categoryModal) => {
  const clickSwitching = (e, index: number) => {
    e.stopPropagation()
    props.toggleModal(index)
  }

  let isPrev = true
  if (!props.index) {
    isPrev = false
  }

  let isNext = true
  if (props.index >= props.categoryLength - 1) {
    isNext = false
  }

  return (
    <div className={Category.modal} onClick={() => props.toggleModal(null)}>
      <div className={Category.modal__inner}>
        <p className={Category.modal__img}>
          <Img fluid={props.img} alt={props.title} />
        </p>
        <p>{props.title}</p>
        <p>{props.description}</p>
      </div>

      {isNext && (
        <div className={`${Category.switching} ${Category.switching__next}`}>
          <a
            className={Category.switching__link}
            onClick={(e) => clickSwitching(e, props.index + 1)}
          >
            Next
          </a>
        </div>
      )}
      {isPrev && (
        <div className={`${Category.switching} ${Category.switching__prev}`}>
          <a
            className={Category.switching__link}
            onClick={(e) => clickSwitching(e, props.index - 1)}
          >
            Prev
          </a>
        </div>
      )}
    </div>
  )
}
