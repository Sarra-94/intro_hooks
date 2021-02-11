import React, { useEffect, useState } from "react";
import CounterHooks from "./CounterHooks";

const LifeCycle = () => {
  const [show, setShow] = useState(true);
  //   useEffect(() => {
  //     console.log("component did update");
  //   }, [show]);
  return (
    <div>
      <h2>Life Cycle</h2>
      <button onClick={() => setShow(!show)}>{show ? "hide" : "show"}</button>
      {show ? <CounterHooks /> : null}
    </div>
  );
};

export default LifeCycle;
