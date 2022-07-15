import React, { Component } from 'react';
import RollDice from './RollDice';
import './DiceApp.css';

class DiceApp extends Component {
  render(){
  
  return (
   <div >
   <div className="Container">
      <RollDice/>
   </div>
   </div>
   
  );
  }
}

export default DiceApp;