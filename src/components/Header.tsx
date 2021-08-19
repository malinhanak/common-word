import styled, { withTheme, DefaultTheme } from "styled-components";
import { FunctionComponent } from "react";
import ModeToggle, { ToggleDark, ToggleLight } from "./ModeToggler";

interface HeaderProps {
  theme: DefaultTheme;
}

const Header: FunctionComponent<HeaderProps> = ({ theme }) => {
  return (
    <Style>
      <PageTitle>Vilket är det vanligaste order?</PageTitle>
      <Icon>
        <ModeToggle>
          <ToggleLight />
          <ToggleDark />
        </ModeToggle>
      </Icon>
    </Style>
  );
};

export default withTheme(Header);

const Style = styled.header`
  display: flex;
  justify-content: space-between;
  align-self: stretch;
`;

const Icon = styled.div`
  margin: 1rem 1.5rem;
  cursor: pointer;
`;

const PageTitle = styled.h1`
  margin: 0 0 0 1.5rem;
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.secondary};
`;
