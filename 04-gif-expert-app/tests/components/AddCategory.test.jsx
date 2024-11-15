import { render, screen, fireEvent } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe("AddCategory tests", () => {
  test("should change value of the text box", () => {
    render(<AddCategory onNewCategory={() => {}} />);
    const input = screen.getByRole("textbox");

    fireEvent.input(input, { target: { value: "Luffy" } });
    // screen.debug();
  });

  test("should call onNewCategory if the input have a value", () => {
    const inputValue = "Luffy";
    const onNewCategory = jest.fn();
    //TODO:

    render(<AddCategory onNewCategory={onNewCategory} />);

    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);
    // screen.debug();
    expect(input.value).toBe("");

    expect(onNewCategory).toHaveBeenCalled();
    // Call only one time the function
    expect(onNewCategory).toHaveBeenCalledTimes(1);
    // Validate value of the function
    expect(onNewCategory).toHaveBeenCalledWith(inputValue);
  });

  test(`shouldn't call the function if the input is empty`, () => {
    const onNewCategory = jest.fn();
    render(<AddCategory onNewCategory={onNewCategory} />);
    const form = screen.getByRole("form");

    fireEvent.submit(form);

    expect(onNewCategory).toHaveBeenCalledTimes(0);
    expect(onNewCategory).not.toHaveBeenCalledTimes(1);
  });
});
