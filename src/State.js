import React from 'react';
import './App.css';

function State({increase , setIncrease , colorChange}) {
 
  return (
    <div>
      <h1 id='h1'>Hello {increase} !!</h1>
      <button onClick={() => setIncrease(increase + 1)}>Increase</button>
      <button onClick={() => setIncrease(increase - 1)}>Decrease</button>
      <button onClick={colorChange}>change</button>
    </div>
  );
}

export default State;
