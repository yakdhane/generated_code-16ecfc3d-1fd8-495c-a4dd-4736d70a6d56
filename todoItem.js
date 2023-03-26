import React from 'react';

const TodoItem = ({ todo, handleComplete, handleDelete }) => {
  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <li className="todo">{todo.text}</li>
      <button className="complete-btn" onClick={() => handleComplete(todo)}>
        <i className="fas fa-check"></i>
      </button>
      <button className="trash-btn" onClick={() => handleDelete(todo)}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default TodoItem;