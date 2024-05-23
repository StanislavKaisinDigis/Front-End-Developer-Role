import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface DiscountState {
  code: string;
}

const initialState: DiscountState = {
  code: "",
};

const discountSlice = createSlice({
  name: "discount",
  initialState,
  reducers: {
    setDiscountCode(state, action: PayloadAction<string>) {
      state.code = action.payload;
    },
  },
});

export const { setDiscountCode } = discountSlice.actions;
export default discountSlice.reducer;
