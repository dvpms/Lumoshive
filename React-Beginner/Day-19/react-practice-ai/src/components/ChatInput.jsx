import React from "react";

export default function ChatInput() {
    return (
        <form action="" className="fixed-bottom p-3 bg-primary-subtle border-top shadow container">
            <div className="input-group">
                <input type="text" name="" id=""  placeholder="Type your message" className="form-control border border primary"/>
                <button type="submit" className="btn btn-primary"><i className="bi bi-arrow-bar-up"></i></button>
            </div>
        </form>
    );
}