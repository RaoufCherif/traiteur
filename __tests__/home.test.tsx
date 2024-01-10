import "jest";
import "@testing-library/jest-dom";
import { getByText, render, screen } from "@testing-library/react";
import Home from "@/app/page";


// Mock useRouter:
jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      prefetch: () => null,
    };
  },
}));


describe("Home page", () => {
  it("renders the main header", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", { level: 1 });

    // expect(heading).toBeInTheDocument();
    // expect(heading).toHaveTextContent("Five");
    // expect(navigator).toBeInTheDocument();
  });
});
