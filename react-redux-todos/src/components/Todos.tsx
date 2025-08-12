import { useAppSelector } from "../hooks";
import AddTodo from "./AddTodo";
import TodosList from "./TodosList";

const Todos = () => {
  const todos = useAppSelector((state) => state.todos.items);

  return (
    <>
      <h2>Todos: {todos.length}</h2>
      <AddTodo />
      <TodosList />
    </>
  );
};

export default Todos;
