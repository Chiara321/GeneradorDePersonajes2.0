// /components/Welcome.tsx
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const WelcomeContainer = styled.div`
  padding: 20px;
  /* Dejas ver el fondo degradado (sin fondo adicional) */
`;

const Title = styled.h1`
  font-size: 4rem;
  margin: 0 0 20px 0;
`;

const Paragraph = styled.p`
  font-size: 2rem;
  line-height: 1.4;
  margin: 0;
`;

function useTypedText(text: string, speed = 50) {
  const [typed, setTyped] = useState('');
  
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTyped(prev => prev + text.charAt(i));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return typed;
}

const Welcome: React.FC = () => {
  // Texto a tipear: incluimos un salto de línea (opcional) o separamos en dos llamadas
  const fullText = `Biienvenidos
  Esta es una herramienta de generación de personajes aleatorios. Aquí podrás encontrar un punto de partida para tu futuro proyecto.`;
  const typedText = useTypedText(fullText);

  // Dividimos en líneas para mostrar el salto de línea
  const lines = typedText.split('\n');

  return (
    <WelcomeContainer>
      {/* Primera línea como título, el resto como párrafo */}
      {lines.length > 1 ? (
        <>
          <Title>{lines[0]}</Title>
          <Paragraph>{lines.slice(1).join('\n')}</Paragraph>
        </>
      ) : (
        <Title>{typedText}</Title>
      )}
    </WelcomeContainer>
  );
};

export default Welcome;


