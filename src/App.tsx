import React from "react";

import { useAppDispatch } from "./store/hooks.ts";
import RadioButtons from "./components/OptionsRadioButtons.tsx";
import { setSelectedOption } from "./store/reducers/optionsSlice.ts";
import DiscountCodeInput from "./components/DiscountCodeInput.tsx";
import DiscountCodeGenerator from "./components/DiscountCodeGenerator.tsx";
import NoteField from "./components/NoteField.tsx";
import { options } from "./utilities/constants.ts";

function App() {
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
