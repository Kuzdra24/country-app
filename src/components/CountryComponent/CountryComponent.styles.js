import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${({theme}) => theme.colors.element};
  margin: 30px;
  display: flex;
  flex-direction: column;
  box-shadow: ${({theme}) => theme.boxShadow};
  width: 100%;
  max-width: 250px;
  border-radius: 5px;
  img {
    height: 180px;
    border-radius: 5px 5px 0 0;
  }
  .name {
    font-size: 20px;
    margin: 10px 20px 0;
  }
`;
export const InfoWrapper = styled.div`
  padding: 20px;
  p {
    margin: 5px;
    font-size: 15px;
  }
`;