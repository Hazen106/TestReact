import React,{ useState} from "react";

function TodoInput({ addItem}) {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleAddItem = () => {
        if (inputValue.trim() !== ''){
            addItem(inputValue);
            setInputValue('');
        }
    };

    
    return (
        <div>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Thêm công việc"
            />
            <button onClick={handleAddItem}>Thêm</button>
        </div>
    );
}

export default TodoInput;