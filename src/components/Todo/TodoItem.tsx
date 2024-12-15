import { ITodo } from "../../types/todo.types";
import { useTodoStore } from "../../store/todo";

const TodoItem = ({ todo }: { todo: ITodo }) => {
  const toggleTodo = useTodoStore((store) => store.toggleTodo);

  return (
    <li
      onClick={() => toggleTodo(todo.id)}
      className="px-4 py-2 flex justify-between gap-6 border text-2xl group cursor-pointer bg-white animate-show"
    >
      <p className={`${todo.completed ? "opacity-40 line-through" : ""} group-hover:translate-x-2 duration-200`}>
        {todo.name}
      </p>
      <p>{todo.completed ? `✔` : ""}</p>
    </li>
  );
};

export default TodoItem;
