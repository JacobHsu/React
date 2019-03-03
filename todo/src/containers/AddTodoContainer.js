import { connect } from "react-redux";
import { setTodoText, addTodo } from "../actions";
import AddTodo from "../components/AddTodo";
import {getText} from "../selectors" //某天數據結構變化，不要到每個使用的text進行修改，去selectors修改即可

const mapStateToProps = state => ({
  text: getText(state) //state.text //不需透過對象屬性的形式去獲取text屬性 而是可以通過函數調用
});

const mapDispatchToProps = dispatch => ({
  setTodoText: text => dispatch(setTodoText(text)),
  addTodo: text => dispatch(addTodo(text))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTodo);
