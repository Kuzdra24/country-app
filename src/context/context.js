import React, { useContext, useState, useEffect, createContext } from "react";
import { lightTheme } from "../assets/styles/lightTheme";
import { darkTheme } from "../assets/styles/darkTheme";
import axios from "axios";

export const APIContext = createContext({
  countries: [],
  isLoading: true,
  theme: lightTheme,
  isDark: true,
  toggleTheme: () => {},
  filterCoutries: () => {},
  filterByRegion: () => {},
});

function APIContextProvider({ children }) {
  // Initialize state
  const [allCoutries, setAllCoutries] = useState();
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isDark, setIsDark] = useState(true);
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    isDark ? setTheme(darkTheme) : setTheme(lightTheme);
    setIsDark(!isDark);
  };

  const filterCoutries = (inputValue) => {
    const filterCountries = allCoutries.filter(({ name }) =>
      name.toLowerCase().includes(inputValue.toLowerCase().trim())
    );
    setData(filterCountries);
  };

  const filterByRegion = (option) => {
    if(option){
      const filterData = allCoutries.filter(
        ({ region }) => region.toLowerCase() === option.toLowerCase()
      );
      setData(filterData);
    }
    else{
      setData(allCoutries)
    }
    
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
        theme,
        isDark,
        toggleTheme,
        filterCoutries,
        filterByRegion,
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

