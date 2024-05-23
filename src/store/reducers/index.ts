import { combineReducers } from "redux";
import optionsReducer from "./optionsSlice";
import discountCodeReducer from "./discountSlice";
import noteReducer from "./notesSlice";

const rootReducer = combineReducers({
  options: optionsReducer,
  discountCode: discountCodeReducer,
  note: noteReducer,
});

export default rootReducer;
