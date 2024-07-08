import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ items, toggleComplete, removeItem}){
    return(
        <ul>
            {items.map((item,index) => (
                <TodoItem
                key={index}
                item={item}
                index={index}
                toggleComplete={toggleComplete}
                removeItem={removeItem}
              />
            ))}
        </ul>
    );
}

export default TodoList;