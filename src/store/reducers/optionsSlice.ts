import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface OptionsState {
  selectedOption: string;
}

const initialState: OptionsState = {
  selectedOption: "",
};

const optionsSlice = createSlice({
  name: "options",
  initialState,
  reducers: {
    setSelectedOption(state, action: PayloadAction<string>) {
      state.selectedOption = action.payload;
    },
  },
});

export const { setSelectedOption } = optionsSlice.actions;
export default optionsSlice.reducer;
