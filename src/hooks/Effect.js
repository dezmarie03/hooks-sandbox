import { useState, useEffect } from "react";

const EffectComponent = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setTimeout(() => setTime(new Date()), 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div>
      <h2>useEffect</h2>
      <p><strong>{time.toLocaleTimeString()}</strong></p>
    </div>
  );
};

export default EffectComponent;
