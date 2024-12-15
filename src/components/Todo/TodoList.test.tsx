import { render, screen, fireEvent } from "@testing-library/react";
import { useTodoStore } from "../../store/todo";
import Filter from "../Filter/Filter";
import TodoList from "./TodoList";

describe("TodoList", () => {
  beforeEach(() => {
    useTodoStore.setState({
      todos: [
        { id: "1", name: "Task 1", completed: false },
        { id: "2", name: "Task 2", completed: true },
        { id: "3", name: "Task 3", completed: false },
      ],
    });
  });
  it("should display all todos by default", () => {
    render(
      <>
        <Filter />
        <TodoList />
      </>
    );
    const todos = screen.getAllByRole("listitem");
    expect(todos).toHaveLength(3);
  });
  it("should display only active todos when filter is set to active", () => {
    render(
      <>
        <Filter />
        <TodoList />
      </>
    );
    const activeFilter = screen.getByLabelText("Active");
    fireEvent.click(activeFilter);
    const todos = screen.getAllByRole("listitem");
    expect(todos).toHaveLength(2);
    expect(todos[0]).toHaveTextContent("Task 1");
    expect(todos[1]).toHaveTextContent("Task 3");
  });
  it("should display only completed todos when filter is set to completed", () => {
    render(
      <>
        <Filter />
        <TodoList />
      </>
    );
    const completedFilter = screen.getByLabelText("Completed");
    fireEvent.click(completedFilter);
    const todos = screen.getAllByRole("listitem");
    expect(todos).toHaveLength(1);
    expect(todos[0]).toHaveTextContent("Task 2");
  });
});
