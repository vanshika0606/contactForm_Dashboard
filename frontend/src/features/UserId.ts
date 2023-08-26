import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

export type initial = {
  id: id;
  firstName: string;
  lastName: string;
  status: string;
};

const initialState: initial = {
  id: "",
  firstName: "",
  lastName: "",
  status: "",
};

const UserIdSlice = createSlice({
  name: "userId",
  initialState,
  reducers: {
    readId(state, action) {
      const { id } = action.payload;

      state.id = id;
    },
    readDataForUpdate(state, action) {
      const { _id, firstName, lastName, status } = action.payload;
      console.log(_id);
      state.id = _id;
      state.firstName = firstName;
      state.lastName = lastName;
      state.status = status;
    },
  },
});

export const getId = (state: RootState) => state.userId.id;
export const getData = (state: RootState) => state.userId;

export default UserIdSlice.reducer;

export const { readId, readDataForUpdate } = UserIdSlice.actions;
