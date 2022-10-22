import React from "react";
import { Link } from "react-router-dom";
import {Wrapper, Button, InfoWrapper, Border, BorderWrapper} from './Details.styles'


const CountryDetails = ({
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

  const displayArrayElements = (array) => {
    let str = "";
    array.forEach(({ name }, i) => {
      if (i + 1 === array.length) {
        str += `${name} `;
      } else {
        str += `${name}, `;
      }
    });

    return str;
  };

  return (
    <Wrapper>
      <Link to={"/"}>
        <Button>Back</Button>
      </Link>
      <div>
        <img src={flag} alt="flag_photo" />
        <div>
          <InfoWrapper>
            <h1>{name}</h1>
            <p>
              <strong>Native name: </strong>
              {nativeName}
            </p>
            <p>
              <strong>Population: </strong>
              {population}
            </p>
            <p>
              <strong>Region: </strong>
              {region}
            </p>
            <p>
              <strong>Sub Region: </strong>
              {subregion}
            </p>
            <p>
              <strong>Capital: </strong>
              {capital}
            </p>
          </InfoWrapper>
          <InfoWrapper>
            <p>
              <strong>Top Level Domain: </strong>
              {topLevelDomain.map((domain) => `${domain} `)}
            </p>
            <p>
              <strong>Currencies: </strong>
              {displayArrayElements(currencies)}
            </p>
            <p>
              <strong>languages: </strong>
              {displayArrayElements(languages)}
            </p>
          </InfoWrapper>
        </div>
      </div>
      <BorderWrapper>
        <strong>Border Countries:</strong>
        {borders
          ? borders.map((border, i) => <Border key={i}>{border}</Border>)
          : ""}
      </BorderWrapper>
    </Wrapper>
  );
};

export default CountryDetails;
