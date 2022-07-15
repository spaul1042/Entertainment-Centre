import React, { Component } from 'react';
import './Pokecard.css';

const y = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
class Pokecard extends Component {
  render(){
  let imgsrc = `${y}${this.props.id}.png` ;
  return (
    <div className="Pokecard-main">
    <h2>Card Id-{this.props.id}</h2>
    <img className="Pokecard-image" src ={imgsrc} alt="Loading"/> 
    <p>Card Name- {this.props.name}</p>
    <p>Card Type {this.props.type}</p>
    <p>Experience - {this.props.exp}</p>
    </div>
   
  );
  }
}

export default Pokecard;
