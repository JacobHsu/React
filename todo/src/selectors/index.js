export const getText = (state) => state.get("text") //state.text 改由Immutable api獲取
export const getFilter = (state) => state.get("filter")  

//類似於Selector函數的作用 通過獲取state的部分狀態 計算得到視圖層可見的待辦事項  所以遷移至selectors
export const getVisibleTodos = (state) => {
    const data = state.getIn(['todos', 'data']); //getIn api可以逐層遍歷對象每一層級屬性
    const filter = state.get('filter');
    //const {todos: {data}, filter} = state;
    switch (filter) {
      case "all":
        return data;
      case "completed":
        return data.filter(t => t.get('completed'));
      case "active":
        return data.filter(t => !t.get('completed'));
      default:
        return new Error("Unknown filter: " + filter);
    }
  };
  