import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #fff;
  margin: 30px;
  display: flex;
  flex-direction: column;
  box-shadow: 7px 8px 16px -12px rgba(187, 187, 187, 1);
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