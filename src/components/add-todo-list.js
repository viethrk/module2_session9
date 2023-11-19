import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addTodoList } from "../redux/reducer/todo-list-reducer";

const AddTodoList = () => {
  const dispath = useDispatch();
  const inputRef = useRef("");

  return (
    <div>
      <input ref={inputRef} />
      <br />
      <button
        onClick={() => dispath(addTodoList(inputRef?.current?.value || ""))}
      >
        AddTodoList
      </button>
    </div>
  );
};

export default AddTodoList;
