import React, { useState } from "react";
import { useTodoStore } from "../../store/todo";
import { ITodo } from "../../types/todo.types";
import { v4 as uuidv4 } from "uuid";

const useCreateTodo = () => {
  const [value, setValue] = useState("");
  const addTodo = useTodoStore((state) => state.addTodo);

  const createHandler: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (value) {
      const newTodo: ITodo = {
        id: uuidv4(),
        name: value.trim(),
        completed: false,
      };
      addTodo(newTodo);

      setValue("");
    }
  };

  return { value, setValue, createHandler };
};

export default useCreateTodo;
