import React, { useState, useContext } from "react";
import { Input, Wrapper, InputWrapper, Button, Select } from "./Serchbar.styles";
import { ReactComponent as Magnifier } from "../../assets/icons/magnifier.svg";
import { APIContext } from "../../context/context";

const Searchbar = () => {
  const [querry, setQuerry] = useState("");
  const [region, setRegion] = useState('');

  const ctx = useContext(APIContext);

  const handleInputChange = (e) => {
    setQuerry(e.target.value);
    if (querry !== undefined) {
      ctx.filterCoutries(e.target.value);
    }
  };

  const handleSelectChange = (e) => {
    setRegion(e.target.value);
    if (region !== undefined) {
      ctx.filterByRegion(e.target.value);
    }
  };

  return (
    <Wrapper>
      <InputWrapper>
        <Button>
          {ctx.isDark ? <Magnifier/> : <Magnifier fill="#fff"/>}
        </Button>

        <Input
          id="search"
          type="text"
          placeholder="Search for a country..."
          value={querry}
          onChange={handleInputChange}
        />
      </InputWrapper>
      <Select id="search" value={region} onChange={handleSelectChange}>
        <option value="">Filter by region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </Select>
    </Wrapper>
  );
};

export default Searchbar;
