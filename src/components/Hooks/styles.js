import styled from 'styled-components';

export const Container = styled.div`
  h1 {
    padding: 10px;
  }

  button {
    width: 200px;
    height: 40px;
    background: #ff4500;
    color: #fff;
    font-size: 15px;

    &:hover {
      background: #ff8c00;
    }
  }
`;

export const Text = styled.p`
  padding: 10px;
  font-size: 20px;
  color: #4f4f4f;
`;
