import { Sun } from "react-feather";
import { withTheme } from "styled-components";

export const ToggleLight = withTheme(({ darkMode, toggleDarkMode, theme }) => {
  return darkMode ? <Sun color={theme.colors.secondary} onClick={toggleDarkMode} /> : null;
});
