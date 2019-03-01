import { createStore } from 'redux'
import rootReducer from './reducers' //將合併後的reducer 作為rootReducer
import { addTodo, toggleTodo, setFilter, setTodoText } from './actions' //將項目會用到的各個actoin引入

const store = createStore(rootReducer);
//初始state
console.log(store.getState());
//訂閱state的變化
const unsubscrible = store.subscribe(() => {
    console.log(store.getState() )
})

//發送actions
store.dispatch(addTodo('Learn about actions'));
store.dispatch(toggleTodo(0));  //發送更改todo項目的action 0:更改todo項目的id
store.dispatch(setFilter('active'));
store.dispatch(setTodoText('Learn'));

//取消訂閱
unsubscrible()

export default store;