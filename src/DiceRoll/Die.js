import React, { Component } from 'react';
import './Die.css';

class Die extends Component {
  render(){
  return (
    <>
   <link rel ="stylesheet" href ="craps.css"/>
   <link rel = "stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"></link>
   <div>
      <i className ={`Die fas fa-dice-${this.props.die_num}`}></i>
   </div>
   </>
   
  );
  }
}

export default Die;