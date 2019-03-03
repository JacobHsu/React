export const getText = (state) => state.text
export const getFilter = (state) => state.filter  

//類似於Selector函數的作用 通過獲取state的部分狀態 計算得到視圖層可見的待辦事項  所以遷移至selectors
export const getVisibleTodos = (state) => {
    const {todos: {data}, filter} = state;
    switch (filter) {
      case "all":
        return data;
      case "completed":
        return data.filter(t => t.completed);
      case "active":
        return data.filter(t => !t.completed);
      default:
        return new Error("Unknown filter: " + filter);
    }
  };
  