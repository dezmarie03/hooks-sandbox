import { useState, useMemo } from "react";

export const fibonacci = n => {
  if (n <= 1) {
    return 1;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
};

const MemoComponent = () => {
  const [num, setNum] = useState(1);
  const [isPurple, setIsPurple] = useState(true);
  const fib = useMemo(() => fibonacci(num), [num]);

  return (
    <div>
      <h2
        onClick={() => setIsPurple(!isPurple)}
        style={{ color: isPurple ? "rebeccapurple" : "black" }}
      >
        useMemo
      </h2>
      <p>Fibonnaci of {num} is <strong>{fib}</strong></p>
      <button onClick={() => setNum(num + 1)}>+</button>
    </div>
  );
};

export default MemoComponent;
