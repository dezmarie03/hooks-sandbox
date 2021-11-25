import Callback from "./hooks/Callback";
import Context from "./hooks/Context";
import DebugValue from "./hooks/DebugValue";
import Effect from "./hooks/Effect";
import ImperativeHandle from "./hooks/ImperativeHandle";
import LayoutEffect from "./hooks/LayoutEffect";
import Memo from "./hooks/Memo";
import Reducer from "./hooks/Reducer";
import Ref from "./hooks/Ref";
import State from "./hooks/State";

function App() {
  return (
    <div className="App">
      <Callback />
      <hr />
      <Context />
      <hr />
      <DebugValue />
      <hr />
      <Effect />
      <hr />
      <ImperativeHandle />
      <hr />
      <LayoutEffect />
      <hr />
      <Memo />
      <hr />
      <Reducer />
      <hr />
      <Ref />
      <hr />
      <State />
    </div>
  );
}

export default App;
