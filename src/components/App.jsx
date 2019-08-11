import React, { Component } from 'react';
import List from './List';
import Form from './Form';
import '../styles/style.scss';


class App extends Component {
  state = {
    todos: [],
  }

  removeTodo = index => {
    const { todos } = this.state;

    this.setState({
      todos: todos.filter((todo, i) => {
        return i !== index;
      }),
    })
  }

  handleSubmit = todo => {
    this.setState({ todos: [...this.state.todos, todo] });
  }
  
  render () {
    const { todos } = this.state;

    return (
      <div className="app">
        <header className="app_header">
          <h1>React Todo List</h1>
        </header>
        <main className="container">
          <List todoData={todos} removeTodo={this.removeTodo} />
          <Form handleSubmit={this.handleSubmit} />
        </main>
      </div>
    );
  }
}

export default App;
