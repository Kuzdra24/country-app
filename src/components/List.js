import React from "react";
import { useAPI } from "../context/context";
import CountryElement from "./CountryComponent/CountryComponent";
import Loader from "./Loader";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CountryLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.font};
`;

const List = () => {
  // Grab data from useAPI in global context
  const { data, isLoading } = useAPI();

  if (!isLoading) { 
    return data.map(({ name, capital, region, population, flag }, i) => (
      <CountryLink to={`/${name.split('').filter(e => e.trim().length).join('')}`} key={i}>
        <CountryElement
          name={name}
          capital={capital}
          region={region}
          population={population}
          flag={flag}
        />
      </CountryLink>
    ));
  } else {
    return <Loader color="#303030" type="spokes" />;
  }
};
export default List;
