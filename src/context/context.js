import React, { useContext, useState, useEffect, createContext } from "react";
import axios from "axios";

export const APIContext = createContext({
  countries: [],
  isLoading: true,
  isDark: false,
  changeMode: () => {},
  filterCoutries: () => {},
  filterByRegion: () => {},
});

function APIContextProvider({ children }) {
  // Initialize state
  const [data, setData] = useState();
  const [allCoutries, setAllCoutries] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isDark, setIsDark] = useState(false);

  const filterCoutries = (inputValue) => {
    setData(allCoutries);
    console.log(data);
    const filterCountries = data.filter(({ name }) =>
      name.toLowerCase().includes(inputValue.toLowerCase().trim())
    );
    setData(filterCountries);
  };

  const filterByRegion = (option) => {
    setData(allCoutries);
    console.log(data);
    const filterData = data.filter(
      ({ region }) => region.toLowerCase() === option.toLowerCase()
    );
    setData(filterData);
  };

  const changeMode = () => {
    setIsDark(!isDark);
  };

  // Fetch data
  useEffect(() => {
    let url = "https://restcountries.com/v2/all";
    axios
      .get(url)
      .then(function (response) {
        setAllCoutries(response.data);
        setData(response.data);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <APIContext.Provider
      value={{
        data,
        isLoading,
        isDark,
        filterCoutries,
        filterByRegion,
        changeMode,
      }}
    >
      {children}
    </APIContext.Provider>
  );
}

export default APIContextProvider;

export function useAPI() {
  const context = useContext(APIContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
}

export function useMode() {
  const context = useContext(APIContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context.isDark;
}
