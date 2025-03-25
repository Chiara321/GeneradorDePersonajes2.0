// /components/SmallButtonImagen.tsx
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  margin-top: 20px;
  border: 3px solid #fff;
  border-radius: 25px;
  background: transparent;
  font-family: 'Roboto Mono', monospace;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 66%;
  border-radius: 25px;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border: 6px solid #fff;
    filter: blur(4px);
    opacity: 0.8;
    border-radius: 25px;
    z-index: -1;
  }
`;

const Text = styled.span`
  font-size: 1rem;
  color: #fff;
  margin: 10px 10px 10px 10px;
`;

const Icon = styled.span`
  display: inline-block;
  width: 20px;
  height: 20px;
  background: url('/arrow-icon.svg') no-repeat center / contain;
`;

interface SmallButtonImagenProps {
  onClick: () => void;
}

export const SmallButtonImagen: React.FC<SmallButtonImagenProps> = ({ onClick }) => {
  return (
    <Container onClick={onClick}>
      <Text>Creemos una imagen</Text>
      <Icon />
    </Container>
  );
};

