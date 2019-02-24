import React, { Component } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import Footer from "./Footer";

class App extends Component {
  //todos TodoList與AddTodo都用 state上移至App
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          text: "learn js",
          completed: true
        },
        {
          id: 2,
          text: "learn react",
          completed: false
        },
        {
          id: 3,
          text: "learn vue",
          completed: false
        }
      ],
      filter: "all"
    };
    this.nextTodoId = 0;
  }
  render() {
    // 滿足過濾條件的才會傳至TodoList中
    const todos = this.getVisibleTodos();
    //filter來源 從state解析出來
    const { filter } = this.props;
    return (
      <div>
        <AddTodo addTodo={this.addTodo} />
        <TodoList todos={todos} toggleTodo={this.toggleTodo}/>
        <Footer filter={filter} setVisibilityFilter={this.setVisibilityFilter}/>
      </div>
    );
  }

  getVisibleTodos = () => {
    const currentFilter = this.state.filter;
    return this.state.todos.filter(item => {
      if (currentFilter === "active") {
        return !item.completed;
      } else if (currentFilter === "completed") {
        return item.completed;
      } else {
        return true;
      }
    });
  };

  addTodo = text => {
    const todo = {
      id: this.nextTodoId++,
      text,
      completed: false
    };
    const newTodos = [todo, ...this.state.todos];
    this.setState({
      todos: newTodos
    });
  };

  toggleTodo = id => {
    const newTodos = this.state.todos.map(item => {
      return item.id === id ? { ...item, completed: !item.completed } : item;
    });
    this.setState({
      todos: newTodos
    })
  };

  setVisibilityFilter = filter => {
    this.setState({
      filter
    })
  }
}

export default App;
