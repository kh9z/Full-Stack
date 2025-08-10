import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import GithubAuthButton from "../github-auth-btn";

describe("GithubAuthButton", () => {
  it("renders and can be clicked", () => {
    const onClick = jest.fn();
    render(<GithubAuthButton onClick={onClick} />);
    const btn = screen.getByRole("button");
    expect(btn).toBeInTheDocument();
    fireEvent.click(btn);
  });
});
