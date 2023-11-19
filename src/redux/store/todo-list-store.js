import { configureStore } from "@reduxjs/toolkit";
import todoListReducer from "../reducer/todo-list-reducer";

export default configureStore({
  reducer: {
    todoListStatee: todoListReducer,
  },
});
