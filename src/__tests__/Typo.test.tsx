import { render, screen } from "@testing-library/react";
import Typo from "../components/Typo";

describe("Typo component", () => {
  it("renders children correctly", async () => {
    render(<Typo>Example</Typo>);

    expect(screen.getByText(/Example/i)).toBeInTheDocument();
  });
});
