import React, {useContext} from "react";
import { GlobalStyle } from "../assets/styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { useAPI } from "../context/context";
import List from "../components/List";
import styled from "styled-components";
import { Navbar } from "../components/Navbar";
import Searchbar from "../components/Searchbar/Searchbar";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CountryDetails from "../components/Details/Details";
import Loader from "../components/Loader";
import { APIContext } from "../context/context";

const CountryWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
`;

const App = () => {
  const { data, isLoading } = useAPI();
  const ctx = useContext(APIContext);

  const countries = [
    {
      path: "/",
      element: (
        <CountryWrapper>
          <Searchbar />
          <List data={data} isLoading={isLoading} />
        </CountryWrapper>
      ),
    },
  ];

  if (!isLoading) {
    data.forEach(
      ({
        name,
        nativeName,
        population,
        region,
        subregion,
        capital,
        topLevelDomain,
        currencies,
        languages,
        borders,
        flag,
      }) => {
        countries.push({
          path: `/${name
            .split("")
            .filter((e) => e.trim().length)
            .join("")}`,
          element: (
            <CountryDetails
              name={name}
              nativeName={nativeName}
              population={population}
              region={region}
              subregion={subregion}
              capital={capital}
              topLevelDomain={topLevelDomain}
              currencies={currencies}
              languages={languages}
              borders={borders}
              flag={flag}
            />
          ),
        });
      }
    );
  }

  const router = createBrowserRouter(countries);

  return (
    <ThemeProvider theme={ctx.theme}>
      <GlobalStyle />
      <Navbar />
      {!isLoading ? (
        <RouterProvider router={router} />
      ) : (
        <CountryWrapper>
          <Loader color="#303030" type="spokes" />
        </CountryWrapper>
      )}
    </ThemeProvider>
  );
};

export default App;
