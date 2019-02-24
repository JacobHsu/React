import React, { Component } from "react";
import Todo from "./Todo";

class TodoList extends Component {
  render() {
    const { todos, toggleTodo } = this.props;
    return (
      <ul>
        {todos.map(todo => {
          return (
            // onClick 非真正監聽DOM的點擊事件 是 回調  真正監聽在todo組件內部
            <Todo
              key={todo.id}
              {...todo}
              onClick={() => {
                toggleTodo(todo.id);
              }}
            />
          );
        })}
      </ul>
    );
  }
}

export default TodoList;
