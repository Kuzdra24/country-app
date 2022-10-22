import React, { useContext } from "react";
import styled from "styled-components";
import { ReactComponent as Moon } from "../assets/icons/moon.svg";
import { APIContext } from "../context/context";

const NavWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  width: 100vw;
  color: ${({ theme, isDark }) =>
    isDark ? theme.colors.white : theme.colors.veryDarkBlue};
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0 12%;
  align-items: center;
  box-shadow: 7px 8px 16px -12px rgba(187, 187, 187, 1);
  button {
    display: flex;
    align-items: center;
    border: none;
    color: ${({ theme, isDark }) =>
      isDark ? theme.colors.white : theme.colors.veryDarkBlue};
    background-color: ${({ theme, isDark }) =>
      isDark ? theme.colors.darkBlue : theme.colors.white};
    cursor: pointer;
  }
`;

const Icon = styled.div`
  width: 30px;
  height: 30px;
  margin-right: 8px;
`;

export const Navbar = () => {
  const ctx = useContext(APIContext);

  return (
    <NavWrapper isDark={ctx.isDark}>
      <h1>Where in the world?</h1>
      <button>
        <Icon>
          <Moon />
        </Icon>
        <p>DarkMode</p>
      </button>
    </NavWrapper>
  );
};
