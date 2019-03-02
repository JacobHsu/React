// 把type抽象到一個常量當中，在reducer中會根據type的值，進行不同的邏輯處理
// action的處理器：reducer
import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_FILTER,
  SET_TODO_TEXT,
  FETCH_TODOS_REQUEST,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_FAILURE
} from "./actionTypes";

// action 的 json對象例
// var addTodoAction = {
//   type: 'ADD_TODO',
//   id: 1,
//   text: 'Learn React'
// }
// 實際開發會創建 action creator  //一個函數返回action //ex: export const addTodo

let nextTodoId = 0;

// 同步 action 不用導出 export 只會在 異步action 內使用  
// type值 從常量當中獲取  actionTypes
const fetchTodosRequest = () => ({
  type: FETCH_TODOS_REQUEST
});

const fetchTodosSuccess = (data) => ({
  type: FETCH_TODOS_SUCCESS,
  data //todo的列表數據
});

const fetchTodosFailure = (error) => ({
  type: FETCH_TODOS_FAILURE,
  error
});

// 異步 action 調用
// store 默認接收到的每個action必須是普通JS對象  dispatch fetchTodos 返回的是函數  預設無法處理 需借助redux middleware: redux-thunk  
export const fetchTodos = () => {
  return dispatch => {
    dispatch(fetchTodosRequest());
    return fetch("./mock/todos.json").then(
      response => {
        response.json().then(data => {
          dispatch(fetchTodosSuccess(data));
        });
      },
      error => {
        dispatch(fetchTodosFailure(error));
        console.log("An error occurred: " + error);
      }
    );
  };
};

/**
 * 新增待辦事項
 * @param {*} text
 */
export const addTodo = text => ({
  type: ADD_TODO, //"ADD_TODO",
  id: nextTodoId++,
  text
});

/**
 * 更改待辦事項狀態
 * @param {*} id
 */
export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id
});

/**
 * 設置過濾狀態
 * @param {*} filter
 */
export const setFilter = filter => ({
  type: SET_FILTER,
  filter
});

/**
 * 設置新增待辦事項的文本
 * @param {*} text
 */
export const setTodoText = text => ({
  type: SET_TODO_TEXT,
  text
});
