import React from "react";

export default function ChatInput({onSubmit, loading, onChange, query}) {
  return (
    <form
      onSubmit={onSubmit}
      className="fixed-bottom p-3 bg-primary-subtle border-top shadow container"
    >
      <div className="input-group">
        <input
          type="text"
          placeholder="Type your message"
          className="form-control border border primary"
          disabled={loading}
          onChange={onChange}
          value={query}
        />
        <button type="submit" className="btn btn-primary" disabled={loading}>
          <i className="bi bi-arrow-bar-up"></i>
        </button>
      </div>
    </form>
  );
}
