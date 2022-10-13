import React from "react";
import { GlobalStyle } from "../assets/styles/GlobalStyles";
import APIContextProvider from "../context/context";
import List from "../components/List";
import styled from "styled-components";

const CountryWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  max-width:1400px;
  margin: 0 auto;
`;

function App() {
  return (
    <APIContextProvider>
      <GlobalStyle />
      <h1>
        Hello
        <br />
        World!
      </h1>
      <CountryWrapper>
        <List />
      </CountryWrapper>
    </APIContextProvider>
  );
}

export default App;
