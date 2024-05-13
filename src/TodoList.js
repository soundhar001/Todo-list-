import React from 'react';
import './App.css';

function TodoList({items , deleteList, handleChange,  handleClick, inputVal , handleKeyPress ,setInputVal}) {

  return (
    <div className="container">
        <ul>
        {items.map( item => 
          <li className="todo-item">
            <input
                type='checkbox'
                id={item.id}
                checked={item.checked}
                onChange={() => handleChange(item.id)}
            />
            <label>{item.value}</label>
            <button className="delete-button" onClick={() => deleteList(item.id)}>Delete</button>
          </li>
        )}
        </ul>
        <div className="add-item-container">
          <input 
              style={{padding:"10px"}}
              type="text"
              placeholder='Add list item'
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyUp={(e) => handleKeyPress(e,inputVal)}
          />
          <button onClick={() => handleClick(inputVal)}>Add item</button>
        </div>
    </div>
  );
}

export default TodoList;
