import useCreateTodo from "./useCreateTodo";

const CreateTodoForm = () => {
  const { value, setValue, createHandler } = useCreateTodo();

  return (
    <form onSubmit={createHandler} className="flex gap-4 justify-between ">
      <input
        required
        className="px-4 py-2 border w-full rounded text-2xl"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="New todo"
        type="text"
      />
      <button className="border px-4 py-2 rounded bg-sky-600 text-white text-xl hover:bg-sky-500 duration-200">
        Добавить
      </button>
    </form>
  );
};

export default CreateTodoForm;
