import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { NavMenu } from "../nav-menu";

describe("NavMenu", () => {
  it("renders without crashing", () => {
    render(<NavMenu />);
    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });
});
