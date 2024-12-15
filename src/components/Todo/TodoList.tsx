import TodoItem from "./TodoItem";
import { useTodoStore } from "../../store/todo";
import useFilteredTodo from "./useFilteredTodo";

const TodoList = () => {
  const todos = useTodoStore((store) => store.todos);

  const filteredTodos = useFilteredTodo(todos);

  return (
    <ul className="flex flex-col gap-1 min-h-[280px]">
      {filteredTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
      {filteredTodos.length <= 0 && <p className="text-center my-6">Todos not found</p>}
    </ul>
  );
};

export default TodoList;
