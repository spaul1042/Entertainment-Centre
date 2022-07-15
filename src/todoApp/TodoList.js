import React, { Component } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
// import uuid from '../node_modules/uuid/dist/v4';
import { v4 as uuidv4 } from 'uuid';
import './TodoList.css';

// TodoList contains ( Todoform and list of Todos )
class TodoList extends Component {
  constructor(props){
        super(props);
        this.state={
            my_todos:[]
        }
        this.addtodo = this.addtodo.bind(this);
        this.deletetodo = this.deletetodo.bind(this);
      
  }

  addtodo(newtodo){
  let new_todolist = this.state.my_todos;
  new_todolist.push({Dtodo:newtodo, Did:uuidv4()});
  this.setState({my_todos:new_todolist});
  }
  deletetodo(Did){
  let new_todolist = this.state.my_todos;
  new_todolist = new_todolist.filter( (todo)=> {return (todo.Did !== Did)}  );
  this.setState({my_todos:new_todolist});
  }

  render(){
  let todos = this.state.my_todos.map(
      (todo)=>{return ( <Todo  func1={this.deletetodo} Did={todo.Did} Dtodo={todo.Dtodo}/>  );}
  );
  return (
   <>
   <div className="mainContainer">
      <div ><TodoForm func={this.addtodo}/></div>
      <h1>Todo List</h1>
      <div className="todoConatiner">
      <div ClassName="todoList">{todos}</div> 
      </div>
    </div>
   </>
   
  );
  }
}


export default TodoList;