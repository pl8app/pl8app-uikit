import styled from "styled-components";
import { StyledMenuItemProps } from "./types";

export const StyledMenuItemContainer = styled.div<StyledMenuItemProps>`
  position: relative;
  padding-right: 20px;

  ${({ $isActive, $variant, theme }) =>
    $isActive &&
    $variant === "subMenu" &&
    `
      &:before{
        content: "";
        position: absolute;
        bottom: 0;
        height: 4px;
        width: 100%;
        background-color: ${theme.colors.primary};
        border-radius: 2px 2px 0 0;
      }
    `};
`;

const StyledMenuItem = styled.a<StyledMenuItemProps>`
  position: relative;
  display: flex;

  color: ${({ theme, $isActive }) => ($isActive ? theme.colors.textSubtle : theme.colors.invertedContrast)};
  font-size: 20px;
  font-weight: ${({ $isActive }) => ($isActive ? "600" : "400")};

  &:hover {
    color: ${({ theme }) => (theme.colors.textSubtle)};
  }
`;

export default StyledMenuItem;
