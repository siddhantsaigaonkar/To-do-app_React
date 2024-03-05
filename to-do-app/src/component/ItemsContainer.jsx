import React from 'react'
import TodoItems from './TodoItems';
export default function ItemsContainer({todoItems}) {
  return (
    <div className="item-containers">
      {todoItems.map((item) => (
        <TodoItems todoName={item.product} todoDate={item.date} />
      ))}
    </div>
  );
}
