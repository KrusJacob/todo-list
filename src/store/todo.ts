import { create } from "zustand";
import { ITodo } from "../types/todo.types";

const initialTodos: ITodo[] = [
  {
    id: "1",
    name: "Сделать тестовое задания",
    completed: true,
  },
  {
    id: "2",
    name: "Оставить отклик",
    completed: true,
  },
  {
    id: "3",
    name: "Дождаться ответа",
    completed: false,
  },
];

type Store = {
  todos: ITodo[];
  addTodo: (todo: ITodo) => void;
  removeTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
  clearCompletedTodo: () => void;
};

export const useTodoStore = create<Store>()((set) => ({
  todos: initialTodos,
  addTodo: (newTodo) => set((state) => ({ todos: [...state.todos, newTodo] })),
  removeTodo: (id) => set((state) => ({ todos: state.todos.filter((todo) => todo.id !== id) })),
  toggleTodo: (id) =>
    set((state) => ({
      todos: state.todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)),
    })),
  clearCompletedTodo: () => set((state) => ({ todos: state.todos.filter((todo) => !todo.completed) })),
}));
