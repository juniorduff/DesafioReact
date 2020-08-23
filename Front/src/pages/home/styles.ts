import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 48px;
  color: brown;
  max-width: 450px;
  margin-top: 80px;
`;
export const Form = styled.form`
  margin-top: 40px;
  max-width: 700px;
  display: flex;

  button {
    width: 210px;
    height: 70px;
  }
`;

export const Linha = styled.div`
  margin-top: 10px;
  display: flex;
  width: 80%;
`;

export const InputFilhos = styled.div`
  margin: 20px 20px;
  width: 200px;
  margin-left: 10px;
  background: white;
  border-radius: 5px;
  border: solid 1px;
  transition: transform 0.2s;
`;
export const Box = styled.div`
  display: flex;
  width: 800px;
  flex-flow: row wrap;
  background: darkgray;
  border-radius: 5px;
  border: solid 1px;
  flex-shrink: 1;
  margin: 40px auto;
`;
export const BoxFilhas = styled.div`
  margin: 20px 20px;
  width: 200px;
  background: white;
  border-radius: 5px;
  border: solid 1px;
  transition: transform 0.2s;
  h4 {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin-left: 10px;
    font-family: Roboto, sans-serif;
    width: 180px;
    color: brown;
  }
  button {
    margin-left: 10px;
  }

  ul li {
    display: flex;
    flex-wrap: wrap;
    margin: 15px;
    margin-bottom: 15px;
    margin-left: 15px;
    margin-right: 25px;
    max-width: 125px;
    list-style: none;
    display: flex;
    width: 100vg;
  }
  &:hover {
    border: solid 2px red;
    transform: translateX(10px);
  }
`;
