import React from "react";
import AppName from "./component/AppName";
import AddTodo from "./component/AddTodo";
import TodoItem1 from "./component/TodoItem1";
import TodoItem2 from "./component/TodoItem2";

import './App.css'

export default function App() {
  return (
    <div>
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <div className="item-containers">
          <TodoItem1 />
          <TodoItem2 />
        </div>
      </center>
    </div>
  );
}
