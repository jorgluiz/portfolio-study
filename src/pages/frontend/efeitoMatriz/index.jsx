import React, { useEffect, useState } from "react";
import styled, { createGlobalStyle, keyframes } from "styled-components";

// Animação para os caracteres individuais
const rainAnimation = keyframes`
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translateY(100%);
    opacity: 0;
  }
`;

// Contêiner principal
const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: #000;
`;

// Cada coluna de texto
const Column = styled.div`
  position: absolute;
  left: ${(props) => props.left}%;
  top: 0;
  font-size: ${(props) => props.fontSize}px;
  color: #00ff00;
  animation: none;
`;

// Cada caractere da coluna
const Character = styled.div`
  animation: ${rainAnimation} ${(props) => props.duration}s linear infinite;
  animation-delay: ${(props) => props.delay}s;
  opacity: 0;
`;

const EfeitoMatriz = () => {
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    // Gera a lista de colunas com configurações
    const generateColumns = () => {
      const cols = [];
      const columnCount = Math.floor(window.innerWidth / 20); // Número de colunas baseado na largura da tela
      for (let i = 0; i < columnCount; i++) {
        cols.push({
          left: (i / columnCount) * 100, // Posição horizontal da coluna
          fontSize: Math.random() * 15 + 10, // Tamanho aleatório da fonte
          duration: Math.random() * 2 + 1, // Velocidade da queda
        });
      }
      setColumns(cols);
    };

    generateColumns();
    window.addEventListener("resize", generateColumns);
    return () => window.removeEventListener("resize", generateColumns);
  }, []);

  // Função para gerar caracteres aleatórios
  const randomCharacter = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    return chars[Math.floor(Math.random() * chars.length)];
  };

  return (
    <>
      <Container>
        {columns.map((col, index) => (
          <Column key={index} left={col.left} fontSize={col.fontSize}>
            {Array(30)
              .fill()
              .map((_, charIndex) => (
                <Character
                  key={charIndex}
                  duration={col.duration}
                  delay={charIndex * 0.2} // Atraso para cada caractere
                >
                  {randomCharacter()}
                </Character>
              ))}
          </Column>
        ))}
      </Container>
    </>
  );
};

export default EfeitoMatriz;
