import TodoList from "./components/Todo/TodoList";
import CreateTodoForm from "./components/Form/CreateTodoForm";
import Filter from "./components/Filter/Filter";
import { useTodoStore } from "./store/todo";

function App() {
  const clearCompletedTodo = useTodoStore((store) => store.clearCompletedTodo);

  return (
    <main>
      <h1 className="text-6xl text-center my-8 font-bold">Todos</h1>
      <div className="border max-w-[800px] w-full m-auto p-2 bg-[var(--mainColor)] shadow-md">
        <CreateTodoForm />
        <Filter />
        <TodoList />

        <br />
        <button className="bg-white px-2 py-1 rounded" onClick={clearCompletedTodo}>
          Clear completed
        </button>
      </div>
    </main>
  );
}

export default App;
