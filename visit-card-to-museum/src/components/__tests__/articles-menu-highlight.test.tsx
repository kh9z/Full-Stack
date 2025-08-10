import React from "react";
import { render, screen } from "@testing-library/react";
import { ArticlesMenu } from "../articles-menu";

describe("ArticlesMenu highlight", () => {
  it("renders and highlights create link if pathname is /articles/create", () => {
    render(<ArticlesMenu />);
    expect(screen.getByText(/Articles create/)).toBeInTheDocument();
  });
});
