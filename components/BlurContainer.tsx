// /components/BlurContainer.tsx
import styled from 'styled-components';

export const BlurContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-self: center;
  width: clamp(300px, 40vw, 700px);
  /* Ajusta la altura según necesites */
  border-radius: 25px;
  padding: 20px;
  color: #fff;
  font-family: 'Roboto Mono', monospace;
  background: rgba(0, 0, 0, 0.3);
  margin-top: 20px;

  /* --- Borde blanco real --- */
  border: 3px solid #fff;
  box-sizing: border-box;

  /* --- Efecto difuminado detrás --- */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    /* Este borde difuminado es visualmente más grande que el real */
    border: 6px solid #fff;
    filter: blur(4px);
    opacity: 0.8;
    border-radius: 25px;
    z-index: -1;
  }
`;