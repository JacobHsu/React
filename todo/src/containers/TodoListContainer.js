import { connect } from "react-redux";
import { toggleTodo, fetchTodos } from "../actions";
import TodoList from "../components/TodoList";
import {getVisibleTodos} from "../selectors"


//返回被連接組件的state
const mapStateToProps = state => ({
  todos: getVisibleTodos(state)
});

//返回被連接組件的對象 對象的每個屬性都是一個函數 對應redux的action 被連接的組件就能通過調用這些actoin修改state
const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
  fetchTodos: () => dispatch(fetchTodos() )  //在todoList組件中可以調用此action獲取 todo列表的初始數據  
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps 
)(TodoList);
