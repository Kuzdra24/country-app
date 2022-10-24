import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  width: 100%;
  max-width: 1200px;
  margin: 50px auto;
  color: ${({theme}) => theme.colors.font};
  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    /* flex-direction: column; */
    img {
      max-width: 400px;
      max-height: 300px;
      padding: 30px;
    }
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  p{
    width: 350px;
  }
`;

export const Border = styled.div`
  padding: 5px 10px;
  border: 1px solid ${({ theme }) => theme.colors.lightPurple};
  box-shadow: ${({theme }) => theme.boxShadow};
  margin: 5px;
`;

export const BorderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 700px;
  left: 0;
`;

export const Button = styled.button`
  padding: 8px 18px;
  border: none;
  color: ${({ theme }) => theme.colors.font};
  background-color: ${({ theme }) => theme.colors.elements};
  box-shadow: ${({theme }) => theme.boxShadow};
  margin: 5px;
  cursor: pointer;
`;