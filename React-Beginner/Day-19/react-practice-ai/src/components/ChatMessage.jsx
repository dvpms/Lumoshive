import React, { useEffect, useRef, useState } from 'react';
import Markdown from 'react-markdown';

export default function ChatMessage({ message, query }) {
  const [typedMessage, setTypedMessage] = useState('');
  const textElement = useRef(null);
  const cursorElement = useRef(null);

  useEffect(() => {
    const typingSpeed = 10; // kecepatan mengetik dalam milidetik
    let index = 0;

    function typeText() {
      if (index < message.length) {
        setTypedMessage(message.substring(0, index + 1));
        index++;
        setTimeout(typeText, typingSpeed);
      }
    }

    typeText();
  }, [message]);

  return (
    <>
      <div className="container chat-message-cstm">
        <div className="d-flex justify-content-end mb-3">
          <div className="p-3 border shadow-sm rounded-user-cstm bg-primary-subtle">
            <i className="bi bi-person-circle me-2"></i>
            <strong>Question:</strong> {query}
          </div>
        </div>
        <div className="d-flex justify-content-start">
          <div className="p-3 border shadow-sm rounded-ai-cstm bg-primary-subtle ">
            <i className="bi bi-robot"></i>
            <strong>Answer:</strong>
            <div>
              <Markdown children={typedMessage} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}