import React from "react";
import ReactLoading from "react-loading";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 50px auto;
`;
const Loader = ({ type, color }) => (
  <Wrapper>
    <ReactLoading type={type} color={color} height={"50px"} width={"50px"} />
  </Wrapper>
);

export default Loader;
