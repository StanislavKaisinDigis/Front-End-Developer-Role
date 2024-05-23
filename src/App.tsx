import React from "react";

import { increment, decrement } from "./store/reducers/counterSlice.ts";
import { useAppDispatch, useAppSelector } from "./store/hooks.ts";
import RadioButtons from "./components/OptionsRadioButtons.tsx";
import { setSelectedOption } from "./store/reducers/optionsSlice.ts";
import DiscountCodeInput from "./components/DiscountCodeInput.tsx";
import DiscountCodeGenerator from "./components/DiscountCodeGenerator.tsx";
import NoteField from "./components/NoteField.tsx";

const options = [
  {
    label: "Option A",
    value: "Option A",
  },
  {
    label: "Option B",
    value: "Option B",
  },
  {
    label: "Option C",
    value: "Option C",
  },
];

function App() {
  const sore = useAppSelector((state) => state);
  console.log("Diplay sore to demonstrate it :>> ", sore);

  const dispatch = useAppDispatch();

  const changeOptions = (value: string) => {
    dispatch(setSelectedOption(value));
  };
  return (
    <>
      <div className="min-h-screen bg-gray-100 p-4 flex flex-col items-center justify-start  space-y-4">
        <div className="grid sm:grid-cols-1 gap-4 shadow-md rounded-md p-4 bg-white">
          <RadioButtons options={options} onChange={changeOptions} />
          <NoteField />
          <DiscountCodeInput />
        </div>
        <div className="grid sm:grid-cols-1 gap-4 shadow-md rounded-md p-4 bg-white">
          <DiscountCodeGenerator />
        </div>
      </div>
    </>
  );
}

export default App;
