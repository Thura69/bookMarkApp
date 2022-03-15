import PropTypes from 'prop-types'
import React, { Component } from 'react'
import './Card.css'

 class Card extends Component {
  static propTypes = {}

  render() {
      const {header,description,button,img} = this.props
    return (
        <div className='home container'>
        <div className='home__container  section'>
         <div className='feature__img-container'>
         <img className='home__img' src={img} ></img>
         <div className='feature__decoration'>
          </div>
         </div>
         <div className='home__content'>
          <h1 className='home__header'>{header}</h1>
          <p className='home__description'>
          {description}
          </p>
          <div className='home__buttons'>
           <button className='home__button-1'>{button}</button>
          
   
   
          </div>
         </div>
         </div>
       </div>
    )
  }
}

export default Card