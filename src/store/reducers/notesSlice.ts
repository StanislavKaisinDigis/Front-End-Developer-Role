import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface NotesState {
  note: string;
}

const initialState: NotesState = {
  note: "",
};

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    setNote: (state, action: PayloadAction<string>) => {
      state.note = action.payload;
    },
  },
});

export const { setNote } = notesSlice.actions;

export default notesSlice.reducer;
