import {
  ADD_TODO,
  TOGGLE_TODO,
  FETCH_TODOS_REQUEST,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_FAILURE
} from "../actions/actionTypes";
import Immutable from "immutable";

const initialState = {
  isFetching: false, //當前請求是否正在進行
  error: null, //當前請求是否有錯誤
  data: [] //放置原本的todo時數據
};

//將一個JS對象 創建成不可變的對象
const reducer = (state = Immutable.fromJS(initialState), action) => {
  switch (action.type) {
    case FETCH_TODOS_REQUEST:
      return state.set("isFetching", true);
    case FETCH_TODOS_SUCCESS:
      // merge可以修改多個屬性
      return state.merge({
        isFetching: false,
        data: Immutable.fromJS(action.data) //原本是數組 Immutable.fromJS 轉不可變對象
      });
    case FETCH_TODOS_FAILURE:
      return state.merge({
        isFetching: false,
        error: action.error //本身是string本就是不可變對象 不需轉
      });
    default:
      const data = state.get("data");
      return state.set("data", todos(data, action));
  }
};

// 因拆分 這裡初始值 不再是完整的全局state 而是一部分狀態(todos的)的對應的初始值 也就是空陣列
// 返回值只需要關注 todos的狀態 不需要關注其他的狀態(例text)
const todos = (state = Immutable.fromJS([]), action) => {
  switch (action.type) {
    case ADD_TODO:
      const newTodo = Immutable.fromJS({
        id: action.id,
        text: action.text,
        completed: false
      });
      return state.push(newTodo); // 與數組的push不同 返回新的不可變list對象
    case TOGGLE_TODO:
      return state.map(todo =>
        todo.get("id") === action.id
          ? todo.set("completed", !todo.get("completed"))
          : todo
      );
    default:
      return state;
  }
};

export default reducer; //todos  導出更改為reducer todos含在內
