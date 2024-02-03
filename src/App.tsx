import { useState } from "react";

import List from "@/src/components/List";
import Form from "@/src/components/Form";
import { Todo } from "@/src/types";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const removeTodo = (index: number) => {
    const newTodos = todos.filter((_todo: Todo, i: number) => i !== index);
    setTodos(newTodos);
  };

  const handleSubmit = (todo: Todo) => {
    setTodos([...todos, todo]);
  };

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
}

export default App;
