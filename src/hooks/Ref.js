import { useState, useRef } from "react";

const RefComponent = () => {
  const [stateNumber, setStateNumber] = useState(0);
  const numRef = useRef(0);

  function incrementAndDelayLogging() {
    setStateNumber(stateNumber + 1);

    numRef.current++;

    setTimeout(
      () => alert(`State: ${stateNumber} | ref: ${numRef.current}`), 1000
    );
  }

  return (
    <div>
      <h2>useRef</h2>
      <p>State: <strong>{stateNumber}</strong></p>
      <p>Ref: <strong>{numRef.current}</strong></p>
      <button onClick={incrementAndDelayLogging}>
        Click me
      </button>
    </div>
  );
};

export default RefComponent;
