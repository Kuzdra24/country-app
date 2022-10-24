import styled from "styled-components";

export const InputWrapper = styled.div`
  width: 100%;
  max-width: 300px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: ${({theme }) => theme.boxShadow};
  h1{
    display: flex;
    max-width: 400px;
  }
`;

export const Button = styled.button`
  width: 40px;
  height: 40px;
  background-color: ${({theme }) => theme.colors.elements};
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
export const Input = styled.input`
  width: 100%;
  height: 100%;
  background-color: ${({theme }) => theme.colors.elements};
  color: ${({theme }) => theme.colors.font};
  border: none;
  padding: 0 15px;
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 30px 50px;
  select {
    height: 40px;
    margin-left: 30px;
    background-color: ${({ theme }) => theme.colors.element}
  }
`;

export const Select = styled.select`
  color: ${({ theme }) => theme.colors.font};
  background-color: ${({ theme }) => theme.colors.elements};
  border: none;
  box-shadow: ${({theme }) => theme.boxShadow};
  padding: 5px 10px;
`
