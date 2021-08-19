import React, { PropsWithChildren, ReactElement } from "react";
import { DefaultTheme } from "styled-components";
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

export default ModeToggle;
