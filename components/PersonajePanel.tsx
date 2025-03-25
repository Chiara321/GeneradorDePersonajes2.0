// /components/PersonajePanel.tsx
import React, { useState } from 'react';
import { Character } from '../types/character';
import SelectionForm from './SelectionForm';
import ResultCard from './ResultCard';
import { BlurContainer } from './BlurContainer';

export default function PersonajePanel() {
  const [character, setCharacter] = useState<Character>({
    nombre: 'Nombre',
    descripcion: 'Descripcion del personaje según los parámetros seleccionados.',
  });

  const handleGenerateCharacter = async (gender: string, genre: string) => {
    try {
      const response = await fetch(
        `/api/personajes?gender=${encodeURIComponent(gender)}&genre=${encodeURIComponent(genre)}`
      );
      if (!response.ok) throw new Error('Error al obtener personaje');
      const data: Character = await response.json();
      setCharacter(data);
    } catch (error) {
      console.error(error);
      alert('Error al obtener personaje');
    }
  };

  return (
    <BlurContainer>
      <SelectionForm onGenerate={handleGenerateCharacter} />
      <ResultCard character={character} />
    </BlurContainer>
  );
}




