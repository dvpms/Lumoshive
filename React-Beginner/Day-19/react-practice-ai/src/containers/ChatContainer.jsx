import React, { Component } from "react";
import ChatInput from "../components/ChatInput";
import ChatMessage from "../components/ChatMessage";
import Navbar from "../components/Navbar";
import { queryAI } from "../utils/api";

export default class ChatContainer extends Component {
  state = {
    messages: [],
    loading: false,
    error: null,
    query: "",
  };

  handleQuery = (e) => {
    e.preventDefault();
    const { query } = this.state;
    this.setState({ loading: true, error: null });

    queryAI({ query }, this.props.token)
      .then((res) => {
        this.setState({
          messages: [...this.state.messages, {query, data:res}],
          query: "",
        });
      })
      .catch((err) => {
        this.setState({
          error: err.message,
        });
      })
      .finally(() => {
        this.setState({
          loading: false,
        });
      });
  };

  handleChange = (e) => {
    this.setState({ query: e.target.value });
  };
  render() {
    return (
      <div>
        <Navbar setToken={this.props.setToken} />
        <ChatInput
          onSubmit={this.handleQuery}
          loading={this.state.loading}
          onChange={this.handleChange}
          query={this.state.query}
        />
        {this.state.messages.map((message, index) => (
          <ChatMessage
            key={index}
            message={message.data.data}
            query={message.query}
          />
        ))}
      </div>
    );
  }
}
