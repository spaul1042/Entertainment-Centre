import React, { Component } from 'react';
import './LightApp.css';
import Board from './Board';


class LightApp extends Component {
  render(){
  
  return (
    <div> 
    <Board no_of_rows={4} no_of_cols={4}/>
    </div>

  );
  }
}

export default LightApp;