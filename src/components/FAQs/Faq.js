import React, { Component, useRef } from 'react'
import './Faq.css'

 class Faq extends Component {
 constructor(props) {
   super(props)
 
   this.slectRef = React.createRef('')
   this.iconRef  = React.createRef('')
 }

  componentDidMount(){
       const ok = this.slectRef.current.getElementsByClassName('faq__questions__container__item')
       const iTag = this.slectRef.current.getElementsByTagName('i');
       const faqArray = [...ok];
       const iTagArray = [...iTag];


       faqArray.forEach(e=>{
        
       

        e.addEventListener("click",()=>{
        faqArray.forEach(e=>{
           
        e.classList.remove('active')
        })


            e.classList.add('active')
            faqArray.forEach(e=>{
                if(e.classList.contains('active')){
                    iTag[e.id].classList.add('bx-rotate-180')
                 }else{
                    iTag[e.id].classList.remove('bx-rotate-180')
                 }
            })
        })
       })

      


  }

  render() {
    return (
      <div className='section'>
      <div className='faq container'>
      <div className='faq__content'>
      <h2 className='faq__header'>Frequently Asked Questions</h2>
      <p className='faq__description'>Here are some of our FAQs.If you have any other questions you'd like answered please feel free to email us.</p>
      </div>
      <div className='faq__questions__container' ref={this.slectRef} >
      <div className='faq__questions__container__item' id='0'>
      <div className='questions'>
       <h4 className='questions__header'>What is Bookmark?</h4>
       <i className='bx bx-chevron-down'></i>
      </div>
      <div className='answer '>
      <p>Book mark is something.</p>
      </div>
      </div>

      <div className='faq__questions__container__item ' id='1'>
      <div className='questions'>
       <h4 className='questions__header'>How can I request a new browser?</h4>
       <i className='bx bx-chevron-down'></i>
      </div>
      <div className='answer '>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
      </div>
      </div>

      <div className='faq__questions__container__item ' id='2'>
      <div className='questions'>
       <h4 className='questions__header'>Is there a mobile app?</h4>
       <i className='bx bx-chevron-down'></i>
      </div>
      <div className='answer '>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
      </div>
      </div>

      <div className='faq__questions__container__item' id='3'>
      <div className='questions'>
       <h4 className='questions__header'>What about other Chromium browsers?</h4>
       <i className='bx bx-chevron-down'></i>
      </div>
      <div className='answer '>
      <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
      </div>
      </div>
      </div>
      <button className='home__button-1'>More info</button>
      </div>
 
     
      </div>
    )
  }
}

export default Faq