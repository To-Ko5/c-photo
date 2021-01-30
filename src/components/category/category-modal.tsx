import React from 'react'
import Img, { FluidObject } from 'gatsby-image'
//style
import Modal from '../../styles/modal.module.scss'

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
    <div className={Modal.modal} onClick={() => props.toggleModal(null)}>
      <div className={Modal.modal__inner}>
        <p className={Modal.modal__img}>
          <Img fluid={props.img} alt={props.title} />
        </p>
        <p>{props.title}</p>
        <p>{props.description}</p>
      </div>

      {isNext && (
        <div className={`${Modal.switching} ${Modal.switching__next}`}>
          <a
            className={Modal.switching__link}
            onClick={(e) => clickSwitching(e, props.index + 1)}
          >
            Next
          </a>
        </div>
      )}
      {isPrev && (
        <div className={`${Modal.switching} ${Modal.switching__prev}`}>
          <a
            className={Modal.switching__link}
            onClick={(e) => clickSwitching(e, props.index - 1)}
          >
            Prev
          </a>
        </div>
      )}
    </div>
  )
}
