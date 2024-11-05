import React, { useState } from "react";
import AuthContainer from "./containers/AuthContainer";
import ChatContainer from "./containers/ChatContainer";


export default function App() {
  const [token, setToken] = useState(null);
  const handleSetToken = (token) => {
    setToken(token);
  };

  return token ? (
    <ChatContainer token={token} setToken={handleSetToken} />
  ) : (
    <AuthContainer setToken={handleSetToken} />
  );
}
