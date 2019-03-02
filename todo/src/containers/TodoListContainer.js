import { connect } from "react-redux";
import { toggleTodo } from "../actions";
import TodoList from "../components/TodoList";


const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case "all":
      return todos;
    case "completed":
      return todos.filter(t => t.completed);
    case "active":
      return todos.filter(t => !t.completed);
    default:
      return new Error("Unknown filter: " + filter);
  }
};

//返回被連接組件的state
const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.filter)
});

//返回被連接組件的對象 對象的每個屬性都是一個函數 對應redux的action 被連接的組件就能通過調用這些actoin修改state
const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps 
)(TodoList);
