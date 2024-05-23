import React from "react";

import { increment, decrement } from "./store/reducers/counterSlice.ts";
import { useAppDispatch, useAppSelector } from "./store/hooks.ts";

function App() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };
  return (
    <>
      <div>
        <button
          onClick={handleIncrement}
          className="text-3xl font-bold underline"
        >
          Increment
        </button>
        <button
          onClick={handleDecrement}
          className="text-3xl font-bold underline"
        >
          Decrement
        </button>
        {count}
      </div>
    </>
  );
}

export default App;
