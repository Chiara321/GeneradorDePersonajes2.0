import React, { useState } from 'react';
import styled from 'styled-components';
import { generateImage } from '../services/cloudflare';

const GeneratorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TextArea = styled.textarea`
  width: 80%;
  height: 100px;
  margin-top: 20px;
  border-radius: 8px;
  padding: 10px;
  border: 1px solid #ccc;
`;

const GenerateButton = styled.button`
  margin-top: 10px;
  background-color: #6A0F8C;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #A8DADC;
  }
`;

interface ImageGeneratorProps {
  onImageGenerated: (imageUrl: string) => void;
  setLoading: (loading: boolean) => void;
}

const ImageGenerator: React.FC<ImageGeneratorProps> = ({ onImageGenerated, setLoading }) => {
  const [description, setDescription] = useState('');

  const handleGenerateImage = async () => {
    if (!description.trim()) {
      alert('Por favor, escribe una descripción para generar la imagen.');
      return;
    }

    try {
      setLoading(true);
      const imageUrl = await generateImage(description);
      onImageGenerated(imageUrl);
    } catch (error) {
      console.error('Error generando la imagen:', error);
      alert('Ocurrió un error generando la imagen.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <GeneratorContainer>
      <TextArea 
        placeholder="Escribe una descripción del personaje aquí..."
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
      <GenerateButton onClick={handleGenerateImage}>Generar Imagen</GenerateButton>
    </GeneratorContainer>
  );
};

export default ImageGenerator;

