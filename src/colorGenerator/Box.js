import React, { Component } from 'react';
import './Box.css';
import {initialcolor} from './choice';

class Box extends Component {

  static defaultProps={
    allcolors:["purple","blue","violet","green","pink","orange","red"]
  }
  constructor(props){
    super(props);
    this.state={
      color:{initialcolor}
    };
    this.handleclick = this.handleclick.bind(this);
  }

handleclick(){

  let x;
  do{
    x = this.props.allcolors[Math.floor(Math.random()*7)];
  }while(x=== this.state.color);

  this.setState({color:x});
}
 render(){
 return (
   <>
   {/* Important How ro define styling inside JSX Tags */}
   
    <div className ="Box" style={{backgroundColor: this.state.color}} onClick={this.handleclick}></div>
   </>
   
  );
  }
}

export default Box;
