import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import FavoriteArticle from "../favorite-article";

describe("FavoriteArticle", () => {
  it("renders article title and id", () => {
    render(
      <FavoriteArticle article={{ id: 1, title: "Test", body: "Body" }} />
    );
    expect(screen.getByText(/1 Test/)).toBeInTheDocument();
  });
  it("renders with different article data", () => {
    render(
      <FavoriteArticle article={{ id: 2, title: "Another", body: "Body2" }} />
    );
    expect(screen.getByText(/2 Another/)).toBeInTheDocument();
  });
});
