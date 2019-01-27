import React from 'react';

class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }
    handleDelete() {
        // 子組件調用父組件的handleDelete方法
        this.props.delete(this.props.index);
        console.log();
    }
     render() {
         const {content} = this.props;
         return (
             // 子組件透過props接受父組件傳遞過來的參數
             <div onClick={this.handleDelete}>{content}</div>
         )
     }
}

export default TodoItem;