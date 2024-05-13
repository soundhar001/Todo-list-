import './App.css';
import { useState } from 'react';
// import State from './State';
import TodoList from './TodoList';

function App() {
  const arrayValues = [
    {
      "id" : 1,
      "checked" : true,
      "value" : "Gym"
    },
    {
      "id" : 2,
      "checked" : false,
      "value" : "Study"
    },
    {
      "id" : 3,
      "checked" : true,
      "value" : "Cooking"
    }
  ]
  // const [increase , setIncrease] = useState(0);
  const [items , setItems] = useState(arrayValues);
  const [inputVal , setInputVal] = useState('');
  
  function deleteList(id){
    const deleteItems = items.filter((item)  => (item.id !== id) ? item : null)
    setItems(deleteItems)
  }

  function handleChange(id){
    const updateCheck = items.map((item)  => (item.id === id) ?  { ...item, checked: !item.checked } : item)
    setItems(updateCheck)
  }

  const handleKeyPress = (e , val) => {
    if (e.key === 'Enter') {
      handleClick(val);
    }
  };

  function handleClick(val){
    if(val !== ''){
      const newItem = {
           "id" : items.length + 1,
           "checked" : false,
           "value" : val
      }
      setItems([...items , newItem])
      setInputVal('')
    }else{
      alert("Input Field is empty")
    }
  }

  // function colorChange(){
  //   let currentColor = document.getElementById('h1').style;
  //   (currentColor.color === 'green') ? currentColor.color = 'red' : currentColor.color = 'green';
  // }
  return (
    <div>
      {/* <State 
          increase={increase}
          setIncrease={setIncrease}
          colorChange={colorChange}
      /> */}
      <TodoList 
          items={items}
          setItems={setItems}
          deleteList={deleteList}
          handleChange={handleChange}
          handleClick={handleClick}
          inputVal={inputVal}
          setInputVal={setInputVal}
          handleKeyPress={handleKeyPress}
      />
    </div>
  );
}

export default App;
