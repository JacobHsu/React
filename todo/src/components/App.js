import React, { Component } from "react";
import AddTodoContainer from "../containers/AddTodoContainer";
import TodoListContainer from "../containers/TodoListContainer";
import FooterContainer from "../containers/FooterContainer";

// 原先的App組件維護很多狀態 並且 定義很多修改狀態的方法 提供子組件使用 這些方法與狀態 邏輯移到redux2當中
// 將三個container尹素 並在render使用
class App extends Component {

  render() {
    return (
      <div>
        <AddTodoContainer />
        <TodoListContainer/>
        <FooterContainer/>
      </div>
    );
  }

}

export default App;
