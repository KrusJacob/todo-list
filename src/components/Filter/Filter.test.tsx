import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Filter from "./Filter";

describe("Filter", () => {
  it("should change the active filter", () => {
    render(<Filter />);
    const allFilter = screen.getByLabelText("All");
    const activeFilter = screen.getByLabelText("Active");
    const completedFilter = screen.getByLabelText("Completed");

    expect(allFilter).toBeChecked();
    fireEvent.click(activeFilter);
    expect(activeFilter).toBeChecked();
    fireEvent.click(completedFilter);
    expect(completedFilter).toBeChecked();
  });
});
