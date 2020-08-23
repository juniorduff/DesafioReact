import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;

  h2 {
    margin-bottom: 10px;
  }
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center;
  input {
    border-radius: 12px;
    border: solid 2px;
    padding: 16px;
    width: 100%;

    & + input {
      margin-top: 8px;
    }
  }
  input:focus {
    border: solid 2px blueviolet;
  }
  button {
    background: black;
    height: 46px;
    border: 0;
    padding: 0 16px;
    color: white;
    border-radius: 18px;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
  }
  button:hover {
    border: 2px solid orange;
    color: black;
    background: white;
  }
`;
