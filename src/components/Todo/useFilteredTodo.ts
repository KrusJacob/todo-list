import { ITodo } from "../../types/todo.types";
import { useFilterStore } from "../../store/filter";

const useFilteredTodo = (todos: ITodo[]) => {
  const activeFilter = useFilterStore((store) => store.activeFilter);

  switch (activeFilter) {
    case "all":
      return todos;
    case "active":
      return todos.filter((item) => !item.completed);
    case "completed":
      return todos.filter((item) => item.completed);
  }
};

export default useFilteredTodo;
