import logo from "./logo.svg";
import "./App.css";
import AddTodoList from "./components/add-todo-list";
import ShowTodoList from "./components/show-todo-list";

function App() {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "50%",
      }}
    >
      <AddTodoList />
      <ShowTodoList />
    </div>
  );
}

export default App;
