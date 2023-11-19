import { createSlice } from "@reduxjs/toolkit";

const todoListReducer = createSlice({
  name: "todoListReducer",
  initialState: [],
  reducers: {
    addTodoList: (state, action) => {
      const { type, payload } = action;
      console.log(action);
      return [...state, payload];
    },

    deleteTodoList: (state, action) => {
      const { type, payload } = action;
      console.log(action);
      return [...state, payload];
    },
  },
});

export const { addTodoList } = todoListReducer.actions;
export default todoListReducer.reducer;
