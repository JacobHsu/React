import { connect } from "react-redux";
import { toggleTodo, fetchTodos } from "../actions";
import TodoList from "../components/TodoList";
import {getVisibleTodos} from "../selectors";
import {toJS} from "../HOCs/toJS";


//返回被連接組件的state
//當redux store發生改變時，每一個容器型組件 中的mapStateToProps 都會重新去執行
//對於 todos 是否發生改變(變成新對象) 若改變會導致 TodoList 展示型組件重新渲染
//缺點: toJS每次會返回新的todos對象即使內容沒有改變 -> redux調用時發現是新對象 每次都導致 TodoList 重新渲染 
const mapStateToProps = state => ({
  todos: getVisibleTodos(state).toJS() //toJS 將Immutable的對象 轉成 普通JS的對象  
});

//返回被連接組件的對象 對象的每個屬性都是一個函數 對應redux的action 被連接的組件就能通過調用這些actoin修改state
const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
  fetchTodos: () => dispatch(fetchTodos() )  //在todoList組件中可以調用此action獲取 todo列表的初始數據  
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps 
)(toJS(TodoList));
