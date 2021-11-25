import { useState, useEffect, useCallback, memo } from "react";

const ExpensiveComputationComponent = memo(({ compute, count }) => {
  return (
    <div>
      <p>Fibonnaci of {count} is <strong>{compute(count)}</strong></p>
      <p>Last re-render {new Date().toLocaleTimeString()}</p>
    </div>
  );
});

export const fibonacci = n => {
  if (n <= 1) {
    return 1;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
};

const CallbackComponent = () => {
  const [time, setTime] = useState(new Date());
  const [count, setCount] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => setTime(new Date()), 1000);
    return () => clearTimeout(timer);
  });

  return (
    <div>
      <h2>useCallback</h2>
      <ExpensiveComputationComponent
        compute={useCallback(fibonacci, [])}
        count={count}
      />
      <p>Current time is {time.toLocaleTimeString()}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};

export default CallbackComponent;
