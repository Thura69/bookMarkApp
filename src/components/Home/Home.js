import React, { Component } from 'react'
import './Home.css'
import homeImg from './../../img/illustration-hero.svg'

 class Home extends Component {

  render() {
    return (
    <div className='home container'>
     <div className='home__container  section'>
      <div className='home__img-container'>
      <img className='home__img' src={homeImg}></img>
      <div className='home__decoration'>
       </div>
      </div>
      <div className='home__content'>
       <h1 className='home__header'>A Simple Bookmark <br/> Manager</h1>
       <p className='home__description'>
        A clean and simple interface to organize your favourite websites.Open a new browser tab and see your sites load instantly.Try it for free.
       </p>
       <div className='home__buttons'>
        <button className='home__button-1'>Get it on Chrome</button>
        <button className='home__button-2'>Get it on Firefox</button>


       </div>
      </div>
      </div>
    </div>
    )
  }
}

export default Home