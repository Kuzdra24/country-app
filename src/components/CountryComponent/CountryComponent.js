import React from "react";
import {Wrapper, InfoWrapper} from "./CountryComponent.styles";


const CountryElement = ({ name, capital, region, population, flag }) => {
  return (
    <Wrapper>
      <img src={flag} alt="flag" />
      <strong className="name">{name}</strong>
      <InfoWrapper>
        <p>
          <strong>Capital: </strong>
          {capital}
        </p>
        <p>
          <strong>Region: </strong>
          {region}
        </p>
        <p>
          <strong>Population: </strong>
          {population}
        </p>
      </InfoWrapper>
    </Wrapper>
  );
};

export default CountryElement;
