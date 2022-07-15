import React, { Component } from 'react';
import './Pokedox.css';
import Pokecard from'./Pokecard'

//const y = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
class Pokedox extends Component {
  
  render(){
    let sum =0;
    let i=0;
    while(i<6){
      sum = sum + this.props.pokeman[i].exp;
      i++;
    }
    function boolean(sum){
      if(sum>1500)
        return true;
      else 
        return false;
    }
    let iswinner = boolean(sum);
    
  return (
    <>
  {
    iswinner?
    <h1>Congratulations!! You are a winner!!</h1>:
    <h1>Sorry, You lose!! Try Next Time!!</h1>
  
  }
    <div className="Pokedox-main">
  
    {
    
    this.props.pokeman.map((x) => {
      return(
      
      <Pokecard id= {x.id} name ={x.name} type ={x.type} exp={ x.exp} />

      );
    
    })
    
    }
    
    </div>

  
  </>
  );
  }
}

export default Pokedox;
