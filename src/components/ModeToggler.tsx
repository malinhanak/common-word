import React, { PropsWithChildren, ReactElement } from "react";
import { Sun, Moon } from "react-feather";
import { DefaultTheme, withTheme } from "styled-components";
import { useDarkMode } from "./ThemeContext";

interface EnrichedChildren {
  darkMode: boolean;
  toggleDarkMode: () => void;
  theme?: DefaultTheme;
}

const ModeToggle = ({ children }: any) => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <>
      {React.Children.map(children, (child: ReactElement<PropsWithChildren<EnrichedChildren>>) => {
        return React.cloneElement(child, { darkMode, toggleDarkMode });
      })}
    </>
  );
};

export const ToggleLight = withTheme(({ darkMode, toggleDarkMode, theme }) => {
  return darkMode ? <Sun color={theme.colors.secondary} onClick={toggleDarkMode} /> : null;
});

export const ToggleDark = withTheme(({ darkMode, toggleDarkMode, theme }) => {
  return darkMode ? null : <Moon color={theme.colors.secondary} onClick={toggleDarkMode} />;
});

export default ModeToggle;
