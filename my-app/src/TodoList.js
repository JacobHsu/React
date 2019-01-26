import React, { Component } from 'react';

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
  render() {
    return (
      <div>
        <input value={this.state.inputValue} onChange={this.handleInputChange.bind(this)}/>
        <button onClick={this.handleBtnClick.bind(this)}>add</button>
          <ul>
            {
              this.state.list.map( (item, index) => { 
                 return <li key={index} onClick={this.handleItemClick.bind(this,index)}>{item}</li>
              })
            }
          </ul>
      </div>
    );
  }
}

export default TodoList;

