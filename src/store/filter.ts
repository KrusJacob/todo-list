import { create } from "zustand";
import { ITodo } from "../types/todo.types";
import { ITodoFilter } from "../types/filter.types";

type Store = {
  activeFilter: ITodoFilter;
  setActiveFilter: (filter: ITodoFilter) => void;
};

export const useFilterStore = create<Store>()((set) => ({
  activeFilter: "all",
  setActiveFilter: (filter) => set((state) => ({ activeFilter: filter })),
}));
