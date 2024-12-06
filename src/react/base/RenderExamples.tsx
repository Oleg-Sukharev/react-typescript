import { Button } from "@radix-ui/themes";
import { useState } from "react";

// Strict Mode: re-render extra time,re-runs effects an extra time, and checks for deprecated APis
// Rendering process: component->snapshot(props,states,event handlers)->view

const RenderExample = () => {
  return (
    <div className="flex flex-col space-y-4">
      <Status />
      <Counter1 />
      <Counter2 />
    </div>
  );
};

const Status = () => {
  const [status, setStatus] = useState("clean");

  const handleClick = () => {
    setStatus("unclean");
    alert(status); // === clean
  };

  return <Button onClick={handleClick}>{status}</Button>;
};

const Counter1 = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(1);
    setCount(3);
    setCount(5);
    //rendering one
    //Batching make all updates at once
  };

  return <Button onClick={handleClick}>{count}</Button>;
};

const Counter2 = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(1);
    setCount((c) => c + 3);

    //overwriting prev state
    setCount(5);
    setCount((c) => c + 1);
    //=> 6

    // setCount(1);
    // setCount((c) => c + 1);
    // setCount((c) => c + 1);
    //=> 3
  };

  return <Button onClick={handleClick}>{count}</Button>;
};

export default RenderExample;
