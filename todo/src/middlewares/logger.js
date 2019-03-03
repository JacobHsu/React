/**
 * 打印 action , state 
 * @param {*} param0 
 */
const logger = ({getState, dispatch}) => next => action => {
    console.group(action.type);
    console.log('dispatching: ', action );
    const result = next(action); //透過next函數傳給下一個中間件
    console.log('next state: ', getState());
    console.groupEnd();
    return result;

}

export default logger;