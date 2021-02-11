import { useState } from "react";
import "./App.css";
import CounterClass from "./Component/CounterClass";
import CounterHooks from "./Component/CounterHooks";
import Form from "./Component/Form";
import LifeCycle from "./Component/LifeCycle";

function App() {
  const [data, setData] = useState({});
  const handleData = (data) => {
    setData(data);
  };
  return (
    <div className="App">
      <h2>workshop Hooks</h2>
      {/* <CounterClass />
      <CounterHooks /> */}
      {/* <Form handleData={handleData} />
      <h2>Name : {data.name} </h2>
      <h2>LastNames: {data.lastName}</h2> */}
      <LifeCycle />
    </div>
  );
}

export default App;
