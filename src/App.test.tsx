import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders PDC Todo header", () => {
  render(<App />);
  const element = screen.getByText(/PDC Todo/i);
  expect(element).toBeInTheDocument();
});
