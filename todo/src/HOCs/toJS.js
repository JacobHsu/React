//toJS 高階組件本質上是一個函數
//containers/TodoListContainer 缺點: toJS每次會返回新的todos對象即使內容沒有改變 -> redux調用時發現是新對象 每次都導致 TodoList 重新渲染
//好的做法: 在高階組件中 完成Immutable類型類像 到 普通JS對象 的轉化
//展示型組件要盡可能減少對第三方庫的依賴
import React from "react";
import { Iterable } from "immutable";
export const toJS = WrappedComponent  => wrappedComponentProps => {
  const KEY = 0;
  const VALUE = 1;
  const propsJS = Object.entries(wrappedComponentProps).reduce(
    (newProps, wrappedComponentProps) => {
      newProps[wrappedComponentProps[KEY]] = Iterable.isIterable(
        wrappedComponentProps[VALUE]
      )
        ? wrappedComponentProps[VALUE].toJS()
        : wrappedComponentProps[VALUE];
        return newProps;
    },
    {}
  );
  return <WrappedComponent {...propsJS} />
};
