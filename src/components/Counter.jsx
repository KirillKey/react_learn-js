import React, { useState } from "react";

const Counter = function () {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("ИНПУТ ТЕКСТ");

  function increment() { setCount(count + 1) };
  function decrement() { setCount(count - 1) };

  return (
    <div className="">
      <h1>{count}</h1>
      <h1>{value}</h1>
      <input type="text" value={value}
        onChange={event => setValue(event.target.value)}>
      </input>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>

    </div>
  )
}

export default Counter;