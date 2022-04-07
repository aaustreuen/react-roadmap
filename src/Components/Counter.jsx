import React from "react";
import { useState } from "react";
import './Counter/Counter.css'

const Counter = ()=>{
    const [count, setCount] = useState(0);
    return (
      <div className="counter">
         <button className="button" onClick={() => setCount(count - 1)}>-1</button>
         <p className="button-name">Счётчик: {count}</p>
         <button className="button" onClick={() => setCount(count + 1)}>+1</button>
      </div>
    );
}

export default Counter

