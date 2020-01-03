import React, { useState } from 'react';
import List from './List';
import Form from './Form';
import '../styles/style.scss';


const App = () => {
  const [todos, setTodos] = useState([]);

  const removeTodo = index => {
    const newTodos = todos.filter((todo, i) => {
      return i !== index;
    });
    setTodos(newTodos);
  }

  const handleSubmit = todo => {
    setTodos([...todos, todo]);
  }

  return (
    <div className="app">
      <header className="app_header">
        <h1>React Todo List</h1>
      </header>
      <main className="container">
        <List todoData={todos} removeTodo={removeTodo} />
        <Form handleSubmit={handleSubmit} />
      </main>
    </div>
  );
};

export default App;
