import {
  useState,
  useLayoutEffect,
  useRef,
} from "react";

const LayoutEffectComponent = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const el = useRef();

  useLayoutEffect(() => {
    setWidth(el.current.clientWidth);
    setHeight(el.current.clientHeight);
  });

  return (
    <div>
      <h2>useLayoutEffect</h2>
      <p>Width: {width}px / Height: {height}px</p>
      <textarea
        onClick={() => setWidth(0)}
        ref={el}
      />
    </div>
  );
};

export default LayoutEffectComponent;
