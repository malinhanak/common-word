import { FunctionComponent } from "react";
import { GlobalStyle } from "../theme/GlobalStyle";
import { ThemeProvider } from "./ThemeContext";

export interface Props {
  children: JSX.Element | [JSX.Element];
}

export const RootElement: FunctionComponent<Props> = ({ children }) => {
  return (
    <ThemeProvider>
      <>
        <GlobalStyle />
        {children}
      </>
    </ThemeProvider>
  );
};
