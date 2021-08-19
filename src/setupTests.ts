// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
import { ReactNode } from "react";

type element = ReactNode | JSX.Element | JSX.Element[] | null | false;

jest.mock("react-dom", () => {
  return {
    ...jest.requireActual("react-dom"),
    createPortal: (element: element, target: HTMLElement) => {
      return element;
    },
  };
});
