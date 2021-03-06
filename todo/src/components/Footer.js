import React, { Component } from "react";

class Footer extends Component {
  render() {
    // container 當中footer傳入到props的方法名為 setFilter 所以重命名 讓後可以繼續使用setVisibilityFilter
    const { filter, setFilter: setVisibilityFilter } = this.props;
    return (
      <div>
        <span>Show:</span>
        <button disabled={filter === "all"} 
          onClick={
            () => setVisibilityFilter("all")
          }> All</button>
        <button disabled={filter === "active"} onClick={
            () => setVisibilityFilter("active")
          }>Active</button>
        <button disabled={filter === "completed"} onClick={
            () => setVisibilityFilter("completed")
          }>Completed</button>
      </div>
    );
  }
}

export default Footer;
