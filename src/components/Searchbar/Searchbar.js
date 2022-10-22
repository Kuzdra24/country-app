import React, { useState, useContext } from "react";
import { Input, Wrapper, InputWrapper, Button } from "./Serchbar.styles";
import { ReactComponent as Magnifier } from "../../assets/icons/magnifier.svg";
import { APIContext } from "../../context/context";

const Searchbar = () => {
  const [inputValue, setInputValue] = useState('');
  const [region, setRegion] = useState();

  const ctx = useContext(APIContext);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    if (inputValue !== undefined) {
      ctx.filterCoutries(inputValue);
    }
  };

  const handleSelectChange = (e) => {
    setRegion(e.target.value);
    if(region !== undefined) {
      ctx.filterByRegion(region);
    }
  };

  return (
    <Wrapper>
      <InputWrapper>
        <Button>
          <Magnifier className="mag" />
        </Button>

        <Input
          id="search"
          type="text"
          placeholder="Search for a country..."
          value={inputValue}
          onChange={handleInputChange}
        />
      </InputWrapper>
      <select id="search" value={region} onChange={handleSelectChange}>
        <option value="">Filter by region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
      
    </Wrapper>
  );
};

export default Searchbar;
