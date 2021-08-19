import { FunctionComponent, ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { RootElement } from "./components/RootElements";

const AllTheProviders: FunctionComponent<any> = ({ children }) => {
  return <RootElement>{children}</RootElement>;
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, "wrapper">) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
