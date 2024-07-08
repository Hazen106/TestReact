import React from "react";

function TodoItem({ item, index, toggleComplete, removeItem}) {
    return(
        <li style={{textDecoration: item.completed ? 'line-through' : 'none'}}>
            {item.text}
            <button onClick={() => toggleComplete(index)}>
                {item.completed ? 'Undo' : 'Complete'}
            </button>
            <button onClick={() => removeItem(index)}>Xóa</button>
        </li>
    );
}

export default TodoItem;