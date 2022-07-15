import React, { Component } from 'react';
import TodoList from './TodoList';
import './TodoApp.css';
// TodoList contains ( Todoform and list of Todos )
class TodoApp extends Component {
  render(){
  
  return (
   <div className="appMain"> 
      <TodoList />  
   </div>
   
  );
  }
}

export default TodoApp;
