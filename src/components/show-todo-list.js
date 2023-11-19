import { useSelector } from "react-redux";
import TodoListDetail from "./todo-list-detail";

const ShowTodoList = () => {
  const todoList = useSelector((state) => state.todoListStatee);

  return (
    <div>
      <h3>Todo List</h3>
      {todoList.map((element, index) => {
        return (
          <>
            <TodoListDetail index={index} todo={element} />
          </>
        );
      })}
    </div>
  );
};

export default ShowTodoList;
