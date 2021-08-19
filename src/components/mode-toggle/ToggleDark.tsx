import { Moon } from "react-feather";
import { withTheme } from "styled-components";

export const ToggleDark = withTheme(({ darkMode, toggleDarkMode, theme }) => {
  return darkMode ? null : <Moon color={theme.colors.secondary} onClick={toggleDarkMode} />;
});
