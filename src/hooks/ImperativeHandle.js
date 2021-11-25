import {
  useState,
  useRef,
  useImperativeHandle,
  forwardRef,
} from "react";

const ElaborateInput = forwardRef(
  ({ hasError, placeholder, value, update }, ref) => {
    const inputRef = useRef();

    useImperativeHandle(ref, () => {
      return {
        focus() {
          inputRef.current.focus();
        }
      }
    });

    return (
      <input
        ref={inputRef}
        value={value}
        onChange={event => update(event.target.value)}
        placeholder={placeholder}
        style={{
          appearance: "none",
          padding: ".25rem 1rem",
          borderWidth: "1px",
          borderStyle: "solid",
          borderColor: hasError ? "crimson" : "#333",
          margin: "0 1rem",
          boxShadow: "0 none",
        }}
      />
    );
  }
);

const ImperativeHandleComponent = () => {
  const [city, setCity] = useState("San Francisco");
  const [state, setState] = useState("CA");
  const [error, setError] = useState("");
  const cityEl = useRef();
  const stateEl = useRef();

  function validate() {
    if (
      !/^([a-zA-Z\u0080-\u024F]+(?:. |-| |'))*[a-zA-Z\u0080-\u024F]+$/.test(
        city
      )
    ) {
      setError("city");
      cityEl.current.focus();
      return;
    }

    if (!/^[A-Z]{2}$/.test(state)) {
      setError("state");
      stateEl.current.focus();
      return;
    }

    setError("");
  }

  return (
    <div>
      <h2>useImperativeHandle</h2>
      <ElaborateInput
        hasError={error === "city"}
        placeholder={"City"}
        value={city}
        update={setCity}
        ref={cityEl}
      />
      <ElaborateInput
        hasError={error === "state"}
        placeholder={"State"}
        value={state}
        update={setState}
        ref={stateEl}
      />
      <button onClick={validate}>Test</button>
    </div>
  );
};

export default ImperativeHandleComponent;
