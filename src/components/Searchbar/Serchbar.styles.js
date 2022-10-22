import styled from "styled-components";

export const InputWrapper = styled.div`
  width: 100%;
  max-width: 300px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 7px 8px 16px -12px rgba(187, 187, 187, 1);
`;

export const Button = styled.button`
  width: 40px;
  height: 40px;
  background-color: white;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
export const Input = styled.input`
  width: 100%;
  height: 100%;
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
  }
`;
