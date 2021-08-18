import { FunctionComponent, createContext, useContext, useCallback } from "react";
import { ThemeProvider as BaseThemeProvider } from "styled-components";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { darkTheme, lightTheme } from "./theme";

interface Props {
  children: JSX.Element | [JSX.Element];
}

interface Context {
  darkMode: boolean;
  setDarkMode: any;
}
const ThemeContext = createContext<Context | null>(null);

const ThemeProvider: FunctionComponent<Props> = ({ children }) => {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode");
  const isDarkMode = darkMode ? darkTheme : lightTheme;
  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <BaseThemeProvider theme={isDarkMode}>{children}</BaseThemeProvider>
    </ThemeContext.Provider>
  );
};

function useDarkMode() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useDarkMode must be used within a ThemeProvider");

  const { darkMode, setDarkMode } = context;
  const toggleDarkMode = useCallback(() => {
    setDarkMode((prevMode: boolean) => !prevMode);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [darkMode]);

  return {
    darkMode,
    toggleDarkMode,
  };
}

export { ThemeProvider, useDarkMode };
