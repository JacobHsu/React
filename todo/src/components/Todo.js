import React, { Component } from "react";

class Todo extends Component {
  render() {
    const { completed, text, onClick } = this.props;
    return (
      // 真正監聽todo組件內部 DOM的點擊事件 
      <li
        onClick={onClick}
        style={{
          textDecoration: completed ? "line-through" : "none"
        }}
      >
        {text}
      </li>
    );
  }
}

export default Todo;
