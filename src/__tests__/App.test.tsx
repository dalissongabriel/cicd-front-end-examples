import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

describe("App component", () => {
  it("renders button", () => {
    render(<App />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  it("renders initial text", () => {
    render(<App />);
    const text = screen.getByText(/agora/i);
    expect(text).toBeInTheDocument();
  });

  it("should hidde text when click on hidde button", async () => {
    render(<App />);
    const button = screen.getByRole("button");

    userEvent.click(button);
    const text = screen.queryByText(/agora/i);
    expect(text).not.toBeInTheDocument();
  });

  it("should show again the text when click on hidde button again", async () => {
    render(<App />);
    const button = screen.getByRole("button");

    userEvent.click(button);
    userEvent.click(button);
    const text = screen.queryByText(/agora/i);
    expect(text).toBeInTheDocument();
  });
});
