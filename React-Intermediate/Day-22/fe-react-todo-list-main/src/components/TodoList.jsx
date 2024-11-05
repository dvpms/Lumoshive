import React from "react";

function TodoList({ todos, deleteTodo, completeTodo }) {
  
  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className={`list-group-item d-flex justify-content-between align-items-center ${
            todo.completed ? "list-group-item-success" : ""
          }`}
        >
          <span
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              cursor: "pointer",
            }}
          >
            {todo.text}
          </span>

          <div className="btn-task">
          <button
              className="btn btn-primary btn-sm me-2"
              onClick={() => completeTodo(todo.id)}
            >
              Complete
            </button>

            <button
              className="btn btn-danger btn-sm"
              onClick={() => deleteTodo(todo.id)}
            >
              Delete
            </button>

          </div>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
