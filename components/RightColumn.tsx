// /components/RightColumn.tsx
import React, { MouseEvent } from 'react';
import styled from 'styled-components';
import { useUIState } from '../hooks/useUIState';
import { BigButtonPersonaje } from './BigButtonPersonaje';
import { BigButtonImagen } from './BigButtonImagen';
import PersonajePanel from './PersonajePanel';
import ImagenPanel from './ImagenPanel';
import { SmallButtonImagen } from './SmallButtonImagen';
import { SmallButtonPersonaje } from './SmallButtonPersonaje';

const ColumnContainer = styled.div`
  flex: 1.5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export default function RightColumn() {
  const { uiState, setUIState, resetUI } = useUIState();

  // Para evitar que el click en un panel o botón resetee la UI,
  // usamos un handler en el contenedor principal y paramos propagación
  const handleClickColumn = (e: MouseEvent<HTMLDivElement>) => {
    // Si das clic directamente en ColumnContainer, resetea
    // Pero si das clic en un panel o botón, paramos la propagación
    if (e.target === e.currentTarget) {
      resetUI(); // Vuelve a 'none'
    }
  };

  return (
    <ColumnContainer onClick={handleClickColumn}>
      {uiState === 'none' && (
        <>
          <BigButtonPersonaje onClick={() => setUIState('personaje')} />
          <BigButtonImagen onClick={() => setUIState('imagen')} />
        </>
      )}

      {uiState === 'personaje' && (
        <>
          {/* Panel grande */}
          <PersonajePanel />
          {/* Botón pequeño para cambiar a imagen */}
          <SmallButtonImagen onClick={() => setUIState('imagen')} />
        </>
      )}

      {uiState === 'imagen' && (
        <>
          {/* Botón pequeño para cambiar a personaje */}
          <SmallButtonPersonaje onClick={() => setUIState('personaje')} />
          {/* Panel grande */}
          <ImagenPanel />
        </>
      )}
    </ColumnContainer>
  );
}
