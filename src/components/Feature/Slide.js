import React, { Component } from 'react'
import Card from './Card'
import Bookmark from './../../img/illustration-features-tab-1.svg';
import Intelligent from './../../img/illustration-features-tab-2.svg';
import Share from './../../img/illustration-features-tab-3.svg'

export class Slide extends Component {
 constructor(props) {
   super(props)
 
  
 }

  render() {
     const{value} = this.props
  if(value == 1){
      return ( <><Card header="Bookmark in one click" description="Organize your bookmarks however you line.Our simple drag-and-dropn interface gives you complete control over how you manage your favourite sites." button="More info" img={Bookmark}/></>)
  }else if(value == 2 ){
      return (<Card header="Intelligent search" description="Our powerful search feature will help you find saved sites in no time at all.No need to trawl through all of your bookmarks." button="More info" img={Intelligent}/>)
  }else if(value == 3){
      return (<Card header="Share your bookmarks" description="Easily share your bookmarks and collections with others.Create a shareable link that you can send at the click of a button" button="More info" img={Share}/>)
  }
  }
}

export default Slide