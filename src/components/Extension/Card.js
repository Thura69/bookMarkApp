import React from 'react'

function Card(props) {
    const{img,header,version,theme__img} = props

  return (
    <div className='card'>
    <img className='card__img' src={img}></img>
    <h2 className='card__header'>{header}</h2>
    <p className='card__version'>{version}</p>
    <img className='card__theme__img' src={theme__img}></img>
    <button className='home__button-1'>Add & Install Extension</button>
    </div>
  )
}

export default Card