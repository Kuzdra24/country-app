import React, { useContext } from "react";
import styled from "styled-components";
import { ReactComponent as Moon } from "../assets/icons/moon.svg";
import { ReactComponent as Sun } from "../assets/icons/sun.svg";
import { APIContext } from "../context/context";

const NavWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.elements};
  width: 100vw;
  color: ${({ theme }) => theme.colors.font};
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0 12%;
  align-items: center;
  box-shadow: ${({theme }) => theme.boxShadow};
  button {
    display: flex;
    align-items: center;
    border: none;
    color: ${({ theme }) => theme.colors.font};
    background-color: ${({ theme }) => theme.colors.elements};
    cursor: pointer;
    font-family: 'Kanit', sans-serif;
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
    <NavWrapper>
      <h1>Where in the world?</h1>
      <button
        onClick={() => {
          ctx.toggleTheme();
          console.log(ctx.theme.colors);
        }}
      >
        <Icon>
          {ctx.isDark ? <Moon/> : <Sun fill='#fff'/>}
        </Icon>
        <p>ChangeMode</p>
      </button>
    </NavWrapper>
  );
};
