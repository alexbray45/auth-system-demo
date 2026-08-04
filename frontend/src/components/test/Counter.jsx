import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount((previousCount) => previousCount + 1)}>
        Increase
      </button>
      <button onClick={() => setCount((previousCount) => previousCount - 1)}>
        Decrease
      </button>
      <button onClick={() => setCount(0)}>Reset</button>
    </>
  );
}

export default Counter;
