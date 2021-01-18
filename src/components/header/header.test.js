import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./index";

const setup = (props = {}) => {
  const component = render(<Header {...props} />);
  return component;
};

describe("Header Component", () => {
  let component;
  beforeEach(() => {
    component = setup();
  });

  test("should render header text", () => {
    const wrapper = screen.getByTestId("headerText");
    expect(wrapper).toHaveTextContent("Todos");
  });
});
