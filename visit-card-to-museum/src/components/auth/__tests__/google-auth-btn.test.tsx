import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import GoogleAuthButton from "../google-auth-btn";

describe("GoogleAuthButton", () => {
  it("renders and can be clicked", () => {
    const onClick = jest.fn();
    render(<GoogleAuthButton onClick={onClick} />);
    const btn = screen.getByRole("button");
    expect(btn).toBeInTheDocument();
    fireEvent.click(btn);
  });
});
