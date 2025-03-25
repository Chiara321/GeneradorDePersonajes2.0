// /components/ResultCard.tsx
import React from 'react';
import styled from 'styled-components';
import { Character } from '../types/character';

const CardContainer = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 20px auto 0 auto;
  background: #272727;
  border-radius: 20px;
  padding: 16px;
  color: #fff;
  font-family: 'Roboto Mono', monospace;
  font-style: italic;
  text-align: center;
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid #fff;
  margin: 10px 0;
`;

interface ResultCardProps {
  character: Character;
}

const ResultCard: React.FC<ResultCardProps> = ({ character }) => {
  return (
    <CardContainer>
      <h2>{character.nombre}</h2>
      <Divider />
      <p>{character.descripcion}</p>
    </CardContainer>
  );
};

export default ResultCard;



