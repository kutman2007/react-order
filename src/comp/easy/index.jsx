import React, { useState } from 'react';
export const Example=()=> {
  const [count, setCount] = useState(0);

  return (
    <div className='one'>
    <div className='btn'>
      <button onClick={() => setCount(count + 1)}>
          +
      </button>
      <p> {count} </p>
      <button onClick={()=> setCount(count - 1)}>-</button>
    </div>
    <div className='btn'>
      <button onClick={() => setCount(count + 1)}>
          +
      </button>
      <p> {count} </p>
      <button onClick={()=> setCount(count - 1)}>-</button>
    </div>
    <div className='btn'>
      <button onClick={() => setCount(count + 1)}>
          +
      </button>
      <p> {count} </p>
      <button onClick={()=> setCount(count - 1)}>-</button>
    </div>
    </div>
  );
}