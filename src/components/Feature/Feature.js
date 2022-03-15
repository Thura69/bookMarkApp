import React, { PureComponent } from 'react'
import './Feature.css'
import Slide from './Slide';
export class Feature extends PureComponent {
  constructor(props) {
    super(props)
    this.loopRef = React.createRef('');
    this.state = {
      id:'1'
    }
  }

  handelClick = (e)=>{
  
  }
 
   
 componentDidMount(){
  const aTag = this.loopRef.current.getElementsByTagName('a')

  const realATag = [...aTag];
  
  
  realATag.forEach(e=>{
    e.addEventListener('click',()=>{
    realATag.forEach(e=>{
      e.classList.remove('active')
    })
    e.classList.add('active')
     this.setState({
       id:e.id
     })
    })
  })

 
 }


  render() {
    return (
      <section className='section'>
      <div className='Feature container'>
      <div className='Feature__description'>
      <h2 className='Feature__header'>Features</h2>
      <p className='Feature__content'>Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access theme on the go.</p>
      </div>
      <div className='Feature__slide'>
      <ul className='Feature__slide__item' ref={this.loopRef}>
      <li className='Feature__slide__links' ><a className='active'  id='1' onClick={(e)=>{this.handelClick(e)}}>Simple Bookmarking</a></li>
      <li className='Feature__slide__links' ><a id='2' onClick={(e)=>{this.handelClick(e)}}>Speedy Searching</a></li>
      <li className='Feature__slide__links' ><a id='3' onClick={(e)=>{this.handelClick(e)}}>Easy Sharing</a></li>
      </ul>
      <span className="Feature__life__line"></span>
      </div>
      <Slide value={this.state.id}/>
      </div>
      </section>
    )
  }
}

export default Feature