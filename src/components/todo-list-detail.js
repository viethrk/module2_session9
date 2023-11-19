const TodoListDetail = (props) => {
  const { index, todo } = props;
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <label>{index}</label>
      <label>{todo}</label>
    </div>
  );
};

export default TodoListDetail;
