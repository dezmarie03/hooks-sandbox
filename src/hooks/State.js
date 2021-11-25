import { useState } from "react";

const StateComponent = () => {
  const [isPurple, setIsPurple] = useState(true);

  return (
    <div>
      <h2
        style={{
          color: isPurple ? "rebeccapurple" : "crimson"
        }}
      >
        useState
      </h2>
      <button onClick={() => setIsPurple(!isPurple)}>
        Click me
      </button>
    </div>
  );
};

export default StateComponent;
