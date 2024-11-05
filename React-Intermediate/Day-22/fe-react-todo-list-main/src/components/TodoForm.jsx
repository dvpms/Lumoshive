import React from "react";

function TodoForm({ addTodo, onChange, inputText }) {
  return (
    <form className="d-flex mb-3" onSubmit={addTodo}>
      <input
        type="text"
        name="text"
        value={inputText}
        className="form-control me-2"
        placeholder="Tambah todo..."
        onChange={onChange}
      />
      <button type="submit" className="btn btn-primary">
        Add
      </button>
    </form>
  );
}

export default TodoForm;
