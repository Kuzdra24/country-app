import React from "react";
import { useAPI } from "../context/context";
import CountryElement from "./CountryElement";
import Loader from "./Loader";

const List = () => {
  // Grab data from useAPI in global context
  const { data, isLoading } = useAPI();

  if (!isLoading) {
    return data.map(({ name, capital, region, population, flag }) => (
      <CountryElement
        name={name}
        capital={capital}
        region={region}
        population={population}
        flag={flag}
      />
    ));
  } else {
    return <Loader color="#303030" type="spokes"/>;
  }
};
export default List;
