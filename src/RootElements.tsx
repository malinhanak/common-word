import { FunctionComponent } from "react";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "./ThemeContext";

interface Props {
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
