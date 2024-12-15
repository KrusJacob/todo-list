import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import CreateTodoForm from "./CreateTodoForm";
import { useTodoStore } from "../../store/todo";

describe("CreateTodoForm", () => {
  it("should add a new todo", async () => {
    render(<CreateTodoForm />);

    const input = screen.getByPlaceholderText("New todo");
    const button = screen.getByText("Добавить");

    await userEvent.type(input, "Test new Todo");
    await userEvent.click(button);

    const todos = useTodoStore.getState().todos;
    const todosLength = todos.length;

    expect(todos).toHaveLength(todosLength);
    expect(todos[todosLength - 1]).toEqual({
      id: expect.any(String),
      name: "Test new Todo",
      completed: false,
    });
  });
});
