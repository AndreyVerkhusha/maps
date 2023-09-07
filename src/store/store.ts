import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "./reducers/mainReducer";
const store = configureStore({
  reducer: mainReducer
});
export type RootState = ReturnType<typeof store.getState>

export default store;