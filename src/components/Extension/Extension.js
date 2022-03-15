import React, { Component } from 'react'
import Card from './Card'
import Chrome from './../../img/logo-chrome.svg'
import FireFox from './../../img/logo-firefox.svg'
import Opera  from './../../img/logo-opera.svg'
import theme__img from './../../img/bg-dots.svg'
import './Extension.css'


 class Extension extends Component {
  static propTypes = {}

  render() {
    return (
      <div className='container extension '>
      <div className='extension__content'>
      <h2 className='extension__header'>Download the extension</h2>
      <p className='extension__description'>
       We've got more browsers in the pipeline.Please do let us know if you've got a favourite you'd like us to proritize.
      </p>
      </div>
      <div className='card__container'>
      <Card header="Add to Chrome" img={Chrome} version="Minimum version 62" theme__img={theme__img} />
      <Card header="Add to Firefox" img={FireFox} version="Minimum version 55" theme__img={theme__img} />
      <Card header="Add to Opera" img={Opera} version="Minimum version 46" theme__img={theme__img} />
      </div>
      </div>
    )
  }
}

export default Extension