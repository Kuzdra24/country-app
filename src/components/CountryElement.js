import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #fff;
  margin: 10px;
  display: flex;
  flex-direction: column;
  box-shadow: 7px 8px 16px -12px rgba(187, 187, 187, 1);
  width: 100%;
  max-width: 250px;
  border-radius: 15px;
  img {
    height: 180px;
  }
  .name {
    font-size: 20px;
    margin: 10px 20px 0;
  }
`;
const InfoWrapper = styled.div`
  padding: 20px;
  p{
    margin: 5px;
    font-size: 15px;
  }
`;

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
