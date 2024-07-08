import React, {useState} from "react";
import './App.css';
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App(){
  const [items, setItems] = useState([]);

  const addItem = (text) => {
    const newItem = {text, completed: false};
    setItems([...items,newItem]);
  };

  const toggleComplete = (index) => {
    const newItems = [...items];
    newItems[index].completed = !newItems[index].completed;
    setItems(newItems);
  };

  const removeItem = (index) => {
    const newItems = items.filter((item, i) => i !== index);
    setItems(newItems);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Danh sách công việc</h1>
        <TodoInput addItem={addItem} />
        <TodoList
          items={items}
          toggleComplete={toggleComplete}
          removeItem={removeItem}
        />
      </header>
    </div>
  );
}

export default App;