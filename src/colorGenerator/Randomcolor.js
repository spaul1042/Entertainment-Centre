import React, { Component } from 'react';
import Box from './Box';
import './Randomcolor.css';

class Randomcolor extends Component {
  static defaultProps={
    numboxes:18
  };

  render(){
  let allcolors=["purple","blue","violet","green","pink","orange","red"];
  const x = Array.from({length:this.props.numboxes}).map( () =>{ return <Box initialcolor ={allcolors[Math.floor(Math.random()*7)]}/> ;}  );

  return (
   <div className="OuterDiv">
     {x}
   </div>
   
  );
  }
}

export default Randomcolor;
