import { cleanup, fireEvent, screen, render } from "@testing-library/react";
import ListItem from "../ListItem";

describe("ListItem", () => {
  it("should render todo text", () => {
    const todo = { text: "mimi" };
    render(<ListItem todo={todo} />);
    expect(screen.getByText("mimi")).toBeTruthy();
  });

  it("should flag todo as completed class", () => {
    const todo = { text: "mimi", completed: true };
    const { container } = render(<ListItem todo={todo} />);
    expect(container.querySelector(".completed")).toBeTruthy();
  });

  it("should trigger completed action", () => {
    const completedHandler = jest.fn(() => {});
    const todo = { text: "mimi" };
    const { container } = render(
      <ListItem todo={todo} onCompleteHandler={completedHandler} />
    );
    fireEvent.click(container.querySelector("#complete-btn"));
    expect(completedHandler).toBeCalled();
  });

  it("should trigger deleted action", () => {
    const deleteHandler = jest.fn(() => {});
    const todo = { text: "mimi" };
    const { container } = render(
      <ListItem todo={todo} onDeleteHandler={deleteHandler} />
    );
    fireEvent.click(container.querySelector("#delete-btn"));
    expect(deleteHandler).toBeCalled();
  });
});
