// /components/BigButtonImagen.tsx (similar)
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  border: 3px solid #fff;
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: clamp(300px, 50vw, 700px);
  height: clamp(150px, 25vh, 300px);
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
  font-size: 1.5rem;
  color: #fff;
  margin-right: 10px;
`;

const Icon = styled.span`
  display: inline-block;
  width: 40px;
  height: 40px;
  background: url('/arrow-icon.svg') no-repeat center / contain;
`;

interface BigButtonImagenProps {
  onClick: () => void;
}

export const BigButtonImagen: React.FC<BigButtonImagenProps> = ({ onClick }) => {
  return (
    <Container onClick={onClick}>
      <Text>Creemos una imagen</Text>
      <Icon />
    </Container>
  );
};