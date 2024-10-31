import React, { Component } from "react";
import ChatInput from "../components/ChatInput";
import ChatMessage from "../components/ChatMessage";
import Navbar from "../components/Navbar";

export default class ChatContainer extends Component {
    render() {
        return (
            <div>
                <Navbar setToken={this.props.setToken} />
                <ChatInput />
                <ChatMessage />
            </div>
        )
    }
}