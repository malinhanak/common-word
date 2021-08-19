import { DefaultTheme } from "styled-components";

const lightTheme: DefaultTheme = {
  colors: {
    main: "white",
    secondary: "black",
    primary: "purple",
  },
};

const darkTheme: DefaultTheme = {
  colors: {
    main: "black",
    secondary: "white",
    primary: "lightgreen",
  },
};

export { lightTheme, darkTheme };
