import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 45vh;
  text-align: justify;
`;

const About = ({ Nome, Apelido, Idades, Estudo, children }) => {
  return (
    <Container>
      <h3>
        Me chamo {Nome}, mas todos me chamam de {Apelido}. Tenho {Idades} anos e
        estou sempre querendo aprender algo novo e agora estou estudando{" "}
        {Estudo}.
      </h3>
      {children}
    </Container>
  );
};

export default About;
