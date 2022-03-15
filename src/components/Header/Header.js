import React, { useRef, useState } from 'react'
import logoImg from './../../img/logo-bookmark.svg'
import ReactDOM from 'react-dom'

import './Header.css'

function Header() {
 const toggleRef = useRef('');
 const toggleIcon = useRef('');
 const onOffRef = useRef('');


 const handelClick = ()=>{
 toggleRef.current.classList.toggle("toggle__active")
toggleIcon.current.classList.toggle('bx-x')

onOffRef.current.classList.toggle('active')
 }

  return (
    <div className='header__container'>
    <header className='header container' ref={toggleRef}>
   <div className='header__part'>
   <div className='header__logo'>
   <img src={logoImg} className="header__logo__img"></img>
     </div>
     <i className='bx bx-menu header__toggle' ref={toggleIcon} onClick={handelClick}></i>
     <div className='header-part__nav'>
      <ul className='header-part__item'>
      <li className='header-part__links'><a>FEATURES</a></li>
     <li className='header-part__links'><a>PRICING</a></li>
     <li className='header-part__links'><a>CONTACT</a></li>
     <li className='header-part__links'><a>LOGIN</a></li>  
      </ul>
     </div>


   </div>
   {ReactDOM.createPortal(
     <>
      <div className='header__nav' ref={onOffRef}>
     <ul className='header__item'>
     <li className='header__links'><a>FEATURES</a></li>
     <li className='header__links'><a>PRICING</a></li>
     <li className='header__links'><a>CONTACT</a></li>
     <li className='header__links'><a>LOGIN</a></li>

     </ul>
     <div className='header__socials'>
     <i className='bx bxl-facebook-square'></i>
     <i className='bx bxl-twitter' ></i>
     </div>
     </div> 
     </>,document.getElementById('portal')
   )}
    </header>
    </div>
  )
}

export default Header