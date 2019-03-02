import React, { Component } from 'react';
// state的維護可以移除 可以通過props獲取redux當中的狀態 this.state.text -> this.props.text
class AddTodo extends Component {
    render() {
        return (
            <div>
               <input value={this.props.text} onChange={this.handleChange}/>
               <button onClick={this.handleClick}>Add</button> 
            </div>
        );
    } 

    handleChange = (e) => {
        // 調用action的方式 將修改後的text文本訊息 同步到redux的狀態層
        this.props.setTodoText(e.target.value) 
    }
    
    handleClick = () => {
        this.props.addTodo(this.props.text)
    }
}

export default AddTodo;