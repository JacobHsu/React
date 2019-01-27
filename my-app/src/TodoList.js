import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem'

class TodoList extends Component {
  constructor(props){
    super(props);
    this.state = {
       list: [
         'learn react',
         'learn english'
       ],
       inputValue:''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleInputChange(e) {
    //console.log(e.target.value);
    this.setState({
      inputValue: e.target.value
    })
  }
  handleBtnClick() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue:''
    })
  }
  handleItemClick(index) {
    const list = [...this.state.list]; //拷貝複本操作
    list.splice(index, 1)
    this.setState({
      list //list: list 同名簡寫
    })
  }
  handleDelete(index) {
    console.log('handleDelete', index);
    this.handleItemClick(index);
  }
  getTodoItem() {
    return (
      this.state.list.map( (item, index) => { 
        return (
          <TodoItem 
            key={index} 
            content={item} 
            index={index}  
            delete={this.handleDelete}
          />
        );
        //return <li key={index} onClick={this.handleItemClick.bind(this,index)}>{item}</li>
      })
    )
  }
  render() {
    return (
      <Fragment>
        <input value={this.state.inputValue} onChange={this.handleInputChange}/>
        <button className="btn" onClick={this.handleBtnClick}>add</button>
          <ul>
            {this.getTodoItem()}
          </ul>
      </Fragment>
    );
  }
}

export default TodoList;

