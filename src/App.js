import React from 'react';
import './style.css';
import Todo from './components/Todo';

export default function App() {
  return (
    <div className="card">
      <h1>Hello StackBlitz!</h1>
      <div>
        <Todo item="Brush your teeth" />
        <Todo item="Drink coffee" />
      </div>
      
    </div>
  );
}
