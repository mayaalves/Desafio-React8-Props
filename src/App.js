import React from "react";
import About from "./Components/About";
import Carousel from "react-elastic-carousel";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  background-color: #fbefd0;
}
`;
const Box = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #ee9a86;
`;
const Botao = styled.button`
  padding: 1vh;
  margin: 1vh;
  cursor: pointer;
  font-size: 3vh;
  border: none;
  border-radius: 15px;
  background-color: #d9afd9;
  background-image: linear-gradient(72deg, #d9afd9 0%, #97d9e1 100%);
  color: #ffffff;
  &:hover {
    transform: scale(1.1);
    background-color: #d9afd9;
    background-image: linear-gradient(293deg, #d9afd9 0%, #97d9e1 100%);
  }
`;
const BoxSepara = styled.div`
  margin: 3vh;
  padding: 3vh;
  border: 6px solid #f8d472;
  border-radius: 30px;
`;

const App = () => {
  return (
    <Box>
      <GlobalStyle />
      <BoxSepara>
        <About Nome="Mayara" Apelido="May" Idades="30" Estudo="React">
          <Botao>Saiba mais</Botao>
        </About>
      </BoxSepara>
      <BoxSepara>
        <About Nome="Mariana" Apelido="Mari" Idades="15" Estudo="na faetec" />
      </BoxSepara>
      <BoxSepara>
        <About Nome="Douglas" Apelido="Doug" Idades="31" Estudo="Mkt digital" />
      </BoxSepara>
    </Box>
  );
};

export default App;
