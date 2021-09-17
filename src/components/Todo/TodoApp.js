import React from 'react';
import './App.css';
import TodoList from './components/TodoList';

const TodoApp = () => {
  return (
    <div className='todo-app'>
      <TodoList />
    </div>
  );
}

export default TodoApp;
