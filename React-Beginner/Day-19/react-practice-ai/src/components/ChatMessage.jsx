import React from "react";

export default function ChatMessage() {
  return (
    <>
    <div className="container chat-message-cstm">
      <div className="d-flex justify-content-end mb-3">
        <div className="p-3 border shadow-sm rounded-user-cstm bg-primary-subtle">
          <i className="bi bi-person-circle me-2"></i>
          <strong>Quesntion:</strong> How to create website?
        </div>
      </div>
      <div className="d-flex justify-content-start">
        <div className="p-3 border shadow-sm rounded-ai-cstm bg-primary-subtle ">
          <i className="bi bi-robot"></i>
          <strong>Answer:</strong>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam eos ad
            minima mollitia molestias. Dignissimos reiciendis animi obcaecati
            inventore enim libero. Sed dignissimos deleniti minima earum aliquid
            nulla quae sapiente.
          </div>
        </div>
      </div>
      </div>
      <div></div>
    </>
  );
}
