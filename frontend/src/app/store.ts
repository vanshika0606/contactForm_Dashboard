import { configureStore } from "@reduxjs/toolkit";
import UserIdReducer from "../features/UserId";

export const store = configureStore({
  reducer: {
    userId: UserIdReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
