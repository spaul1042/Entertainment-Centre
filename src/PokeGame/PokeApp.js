import React, { Component } from 'react';
import './PokeApp.css';
import Pokedox from './Pokedox';

class PokeApp extends Component {
  render(){

  return (
    <div className="App-main">
    <div>
    <h3>Try Refreshing the page </h3>
    <h4>If total experience of your pokecards is greater than 1500, YOU WIN otherwise YOU LOSE</h4>
    </div>
    <Pokedox
     pokeman = {[
       { id:(Math.floor(Math.random() * 10)+1)  , name:"Bulbasaur" ,type:"peaceful" ,exp: (20*Math.floor(Math.random() * 10)) } ,
       { id:(Math.floor(Math.random() * 10)+1) , name:"Big Bulba" ,type:"peaceful" ,exp: (30*Math.floor(Math.random() * 10)) } ,
       { id:(Math.floor(Math.random() * 10)+1) , name:"Charmander" ,type:"peaceful" ,exp: (40*Math.floor(Math.random() * 10)) } ,
       { id:(Math.floor(Math.random() * 10)+1) , name:"Water Lizard" ,type:"peaceful" ,exp: (50*Math.floor(Math.random() * 10)) } ,
       { id:(Math.floor(Math.random() * 10)+1) , name:"Pikachu" ,type:"peaceful" ,exp: (60*Math.floor(Math.random() * 10)) } ,
       { id:(Math.floor(Math.random() * 10)+1) , name:"Squirtle" ,type:"peaceful" ,exp: (70*Math.floor(Math.random() * 10)) } 
     
     ]}
     />
     

    </div>
  );

  }
}

export default PokeApp;