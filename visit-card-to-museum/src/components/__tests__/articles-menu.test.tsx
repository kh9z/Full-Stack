import React from "react";
import { render, screen } from "@testing-library/react";
import { ArticlesMenu } from "../articles-menu";

describe("ArticlesMenu", () => {
  it("renders create and favorite links", () => {
    render(<ArticlesMenu />);
    expect(screen.getByText(/Articles create/)).toBeInTheDocument();
    expect(screen.getByText(/Articles favorite/)).toBeInTheDocument();
  });
});
