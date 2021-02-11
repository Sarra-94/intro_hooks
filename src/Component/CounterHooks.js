import React, { useState, useEffect } from "react";

const CounterHooks = () => {
  const [count, setCount] = useState(0);
  const [timer, setTimer] = useState(0);

  const Increment = () => {
    setCount(count + 1);
  };
  useEffect(() => {
    console.log("counter is mounted");
    return () => {
      console.log("component counter will unmount");
    };
  }, []);

  return (
    <div>
      <h2>Counter with hooks</h2>
      <button onClick={Increment}>+</button>
      <span>{timer}</span>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
};

export default CounterHooks;
