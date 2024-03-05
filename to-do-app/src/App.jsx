import React from "react";
import AppName from "./component/AppName";
import AddTodo from "./component/AddTodo";
// import TodoItems from "./component/TodoItems";
import ItemsContainer from "./component/ItemsContainer";

import './App.css'


export default function App() {

  let todoItems = [
    {
      product: "Butter-Milk",
      date: "05/03/2023",
    },
    {
      product: "Milk",
      date: "05/03/2023",
    },
    {
      product: "Curd",
      date: "05/03/2023",
    },
    {
      product: "Paneer",
      date: "05/03/2023",
    },
    {
      product: "lassi",
      date: "06/03/2024"
    }
  ];
  return (
    <div>
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <ItemsContainer todoItems={todoItems}/>
      </center>
    </div>
  );
}
