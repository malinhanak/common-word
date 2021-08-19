import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.colors.main};
    font-size: 16px;
    font-family: "Poppins";
    font-weight: 200;
  }

  #root {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
