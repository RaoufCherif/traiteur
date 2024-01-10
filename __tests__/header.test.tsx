import "@testing-library/jest-dom";

import React from "react";
import { getByText, render, within } from "@testing-library/react";
import Header from "./../src/app/components/Header";
import { HtmlContext } from "next/dist/server/future/route-modules/app-page/vendored/contexts/entrypoints";
import LogInButton from "@/app/components/LogInButton";


// Mock useRouter:
jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      prefetch: () => null,
    };
  },
}));

test("Header is rendered", () => {
  const parent =  render(<Header />);

 

  const header: any= document.querySelector(".header");
  expect(header).toBeInTheDocument();
  within(header().queryByTestId('logInButton'));

  expect(header.textContent).toContain("Accueil");
  expect(header.textContent).toContain("Repas");
  expect(header.textContent).toContain("Snacks");
  expect(header.textContent).toContain("Dessert");





});
