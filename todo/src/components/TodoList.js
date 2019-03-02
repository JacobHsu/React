import React, { Component } from "react";
import Todo from "./Todo";
// 數據都源於 props 不需修改
class TodoList extends Component {

  componentDidMount() {
    this.props.fetchTodos(); //掛載時調用異步action  
  }

  render() {  
    const { todos, toggleTodo } = this.props;
    return (
      <ul>
        {
          todos.map(todo => {
            // onClick 非真正監聽DOM的點擊事件 是 回調  真正監聽在todo組件內部
            return <Todo key={todo.id} {...todo} onClick={() => { toggleTodo(todo.id)}}/>
          })
        }
      </ul>
    );
  }
}

export default TodoList;
