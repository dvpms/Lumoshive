import React from "react";
import Markdown from "react-markdown";

export default function ChatMessage({ message, query }) {
  return (
    <>
    <div className="container chat-message-cstm">
      <div className="d-flex justify-content-end mb-3">
        <div className="p-3 border shadow-sm rounded-user-cstm bg-primary-subtle">
          <i className="bi bi-person-circle me-2"></i>
          <strong>Quesntion:</strong> {query}
        </div>
      </div>
      <div className="d-flex justify-content-start">
        <div className="p-3 border shadow-sm rounded-ai-cstm bg-primary-subtle ">
          <i className="bi bi-robot"></i>
          <strong>Answer:</strong>
          <div>
            <Markdown>{message}</Markdown>
          </div>
        </div>
      </div>
      </div>
      <div></div>
    </>
  );
}
