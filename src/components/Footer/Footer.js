import React, { Component } from 'react'
import './Footer.css'
import logo from './../../img/logo-bookmark.svg'
import facebook from './../../img/icon-facebook.svg'
import twitter from './../../img/icon-twitter.svg'

export class Footer extends Component {
  static propTypes = {}

  render() {
    return (
      <footer>
      <div className='footer__description'>
      <p>35.000 + ALREADY JOINED</p>
       <h1>Stay up-to-date with what we're doing</h1>
       <div className='footer__login'>
       <form>
       <input type="email" placeholder='example@gmail.com'></input>
       <button type='submit' className='footer__button'>Contact us</button>
       </form>
       </div>
      </div>
      <div className='footer__nav'>
      <div className='footer__part'>
      <img src={logo}></img>
      <div className='footer__nav__item'>
      <ul>
      <li>FEATURES</li>
      <li>PRICING</li>
      <li>CONTACT</li>

      
      </ul>
      </div>
      </div>
      <div className='footer__social'>
       <img src={facebook}></img>
       <img src={twitter}></img>

      </div>
      </div>
      </footer>
    )
  }
}

export default Footer