import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
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
`;

export const Border = styled.div`
  padding: 5px 10px;
  border: 1px solid ${({ theme }) => theme.colors.lightPurple};
  box-shadow: 7px 8px 16px -12px rgba(187, 187, 187, 1);
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
  padding: 6px 14px;
  border: 1px solid ${({ theme }) => theme.colors.lightPurple};
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 7px 8px 16px -12px rgba(187, 187, 187, 1);
  margin: 5px;
  cursor: pointer;
`;