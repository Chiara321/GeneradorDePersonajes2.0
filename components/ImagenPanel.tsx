// /components/ImagenPanel.tsx
import React, { useState } from 'react';
import styled from 'styled-components';
import { BlurContainer } from './BlurContainer';
import { generateImage } from '../services/cloudflare';
import SmallButton from '../components/SmallButton';
import Spinner from './Spinner';

const PanelContent = styled.div`
  z-index: 1;
  width: 100%;
  height: 400px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  font-family: 'Roboto Mono', monospace;
  justify-content: space-between;
`;

// Estados del panel
enum PanelState {
  TEXT = 'TEXT',
  LOADING = 'LOADING',
  IMAGE = 'IMAGE'
}

const StyledTextArea = styled.textarea`
  width: 80%;
  height: 400px;
  background-color: #272727;
  color:rgb(232, 232, 232);
  border-radius: 8px;
  border: none;
  padding: 10px;
  margin-bottom: 10px;
  font-family: 'Roboto Mono', monospace;
  align-self: center;
`;

const ButtonsRow = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
  aling-self: center;
  aling-items: center;
  justify-content: center;
`;

const LoadingContainer = styled.div`
  /* Aquí puedes poner tu animación de progreso */
  width: 100%;
  height: 100%;
  display: flex;
  text-align: center;
  align-self: center;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const ImageContainer = styled.div`
  margin-top: 10px;
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
`;

/* Ejemplo de imagen generada */
const GeneratedImage = styled.img`
  max-width: 80%;
  border-radius: 8px;
  border: 2px solid #272727;
`;

export default function ImagenPanel() {
  const [panelState, setPanelState] = useState<PanelState>(PanelState.TEXT);
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  // Botón para generar la imagen
  const handleGenerate = async () => {
    if (!description.trim()) {
      alert('Por favor, escribe una descripción para generar la imagen.');
      return;
    }
    try {
      // Pasamos al estado LOADING y limpiamos la imagen previa
      setPanelState(PanelState.LOADING);
      setImageUrl('');

      // Llamada a tu servicio/worker de Cloudflare
      const url = await generateImage(description);
      // Cuando termina, pasamos a IMAGE y guardamos la URL
      setImageUrl(url);
      setPanelState(PanelState.IMAGE);
    } catch (error) {
      console.error('Error generando la imagen:', error);
      alert('Ocurrió un error generando la imagen.');
      // Si hay error, volvemos al TEXT
      setPanelState(PanelState.TEXT);
    }
  };

  // Botón para refrescar (resetear)
  const handleRefresh = () => {
    setPanelState(PanelState.TEXT);
    setDescription('');
    setImageUrl('');
  };

  return (
    <BlurContainer>
      <PanelContent>
        {/* 1) Estado TEXT: mostramos el textarea para escribir la descripción */}
        {panelState === PanelState.TEXT && (
          <>
            <StyledTextArea
              placeholder="Escribe la descripción del personaje aquí..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </>
        )}

        {/* 2) Estado LOADING: ocultamos el textarea y mostramos una animación de carga */}
        {panelState === PanelState.LOADING && (
          <LoadingContainer>
            <Spinner />
          </LoadingContainer>
        )}

        {/* 3) Estado IMAGE: mostramos la imagen generada */}
        {panelState === PanelState.IMAGE && (
          <ImageContainer>
            <GeneratedImage src={imageUrl} alt="Imagen generada" />
          </ImageContainer>
        )}

        {/* Los botones se mantienen en la misma posición */}
        <ButtonsRow>
          <SmallButton type="submit" onClick={handleRefresh}>Refrescar</SmallButton>
          <SmallButton type="submit" onClick={handleGenerate}>Generar imagen</SmallButton>
        </ButtonsRow>
      </PanelContent>
    </BlurContainer>
  );
}


