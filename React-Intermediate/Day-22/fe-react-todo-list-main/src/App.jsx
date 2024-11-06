import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([
      { id: 1730787481212, text: "Kerjakan praktek React", completed: false },
  ]);
  const [inputText, setInputText] = useState("");

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const addTodo = (e) => {
    e.preventDefault();
    if (inputText.trim() !== "") {
      setTodos([...prevTodos, { id: Date.now(), text: inputText, completed: false }]);
      setInputText("");
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const completeTodo = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: true };
      }
      return todo;
    });

    setTodos(updatedTodos);
  };   

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Todo List</h1>
      <TodoForm addTodo={addTodo} onChange={handleInputChange} inputText={inputText} />
      <TodoList todos={todos} deleteTodo={deleteTodo} completeTodo={completeTodo}/>
    </div>
  );
}

export default App;

