import {
  useState,
  useEffect,
  useDebugValue,
} from "react";

const useIsRaining = () => {
  const [isRaining, setIsRaining] = useState(false);

  useEffect(() => {
    setIsRaining(Math.random() > 0.5);
  }, []);

  useDebugValue(isRaining ? "It's raining" : "It isn't raining");

  return isRaining;
};

const DebugValueComponent = () => {
  const isRaining = useIsRaining();

  return (
    <div>
      <h2>useDebugValue</h2>
      <p>Do you need an umbrella today? <strong>{isRaining ? "Yes!" : "Maybe."}</strong></p>
    </div>
  );
};

export default DebugValueComponent;
