import styled, { withTheme, DefaultTheme } from "styled-components";
import { FunctionComponent } from "react";
import ModeToggle, { ToggleDark, ToggleLight } from "./ModeToggler";

interface HeaderProps {
  theme: DefaultTheme;
}

const Header: FunctionComponent<HeaderProps> = ({ theme }) => {
  return (
    <Style>
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
`;

const Icon = styled.div`
  margin: 1rem;
`;
