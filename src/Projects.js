import React, { Component } from 'react';



export default class Projects extends Component{

state = {
  hovered: false
}


  handleHover=()=>{
    this.setState({
      hovered: true
    })
  }

  mouseLeave=()=>{
    this.setState({
      hovered: false
    })
  }




  render(){
    if (this.state.hovered === true){
      return (
        <div className='hover' onMouseLeave = {this.mouseLeave}>
        <iframe width="450" height="350" src="https://www.youtube.com/embed/8H_S9hPYpXA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe width="450" height="350" src="https://www.youtube.com/embed/lRnOAxW6lCU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe width="450" height="350" src="https://www.youtube.com/embed/Ks10yM6HF54" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe width="450" height="350" src="https://www.youtube.com/embed/WJy3Uix1sJM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      )
    } else {
    return(
      <div className='hover' onClick = {this.handleHover}>
      <h3>Projects</h3>
      </div>
    )
  }
}
}
