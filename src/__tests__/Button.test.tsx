import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "../components/Button";

describe("Button component", () => {
  it("renders children correctly", async () => {
    const mockFn = jest.fn();
    render(<Button onClick={mockFn}>Example</Button>);

    expect(screen.getByText(/Example/i)).toBeInTheDocument();
  });

  it("user can click on button", () => {
    const mockFn = jest.fn();
    render(<Button onClick={mockFn}>Example</Button>);

    userEvent.click(screen.getByRole("button"));

    expect(mockFn).toBeCalled();
  });

  it("renders button disabled", () => {
    render(<Button disabled>Example</Button>);

    expect(screen.getByRole("button")).toBeDisabled();
  });

  it("should have data-testid correctly", () => {
    render(<Button data-testid="test-id">Example</Button>);

    expect(screen.getByTestId("test-id")).toBeInTheDocument();
  });

  it("renders with contained styles", () => {
    render(<Button variant="contained">Example</Button>);

    expect(screen.getByRole("button")).toHaveStyle({
      padding: "6px 12px",
      color: "white",
      backgroundColor: "blue",
      fontWeight: 500,
      textTransform: "uppercase",
      border: "2px solid blue",
    });
  });
});
