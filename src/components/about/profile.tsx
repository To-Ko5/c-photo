import React from 'react'
import Img, { FluidObject } from 'gatsby-image'
//style
import About from '../../styles/about.module.scss'

interface profile {
  name: string
  description: string
  img: FluidObject
}

export default (props: profile) => {
  return (
    <div className={About.profile}>
      <div className={About.profile__inner}>
        <p className={About.profile__img}>
          <Img fluid={props.img} alt={props.name} />
        </p>
        <h1 className={About.profile__name}>{props.name}</h1>
        <p className={About.profile__description}> {props.description}</p>
      </div>
    </div>
  )
}
