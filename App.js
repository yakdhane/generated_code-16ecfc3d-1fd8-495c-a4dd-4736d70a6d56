import React, { useState } from 'react';
import './App.css';
import Form from './components/form';
import TodoList from './components/todoList';

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
      <Form todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;