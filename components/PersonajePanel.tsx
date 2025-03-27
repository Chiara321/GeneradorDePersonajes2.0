// /components/PersonajePanel.tsx
import React, { useState } from 'react';
import { Character } from '../types/character';
import SelectionForm from './SelectionForm';
import ResultCard from './ResultCard';
import { BlurContainer } from './BlurContainer';
import Spinner from './Spinner';

export default function PersonajePanel() {
  const [character, setCharacter] = useState<Character>({
    nombre: 'Nombre',
    descripcion: 'Descripcion del personaje según los parámetros seleccionados.',
  });
  const [loading, setLoading] = useState(false);

  const handleGenerateCharacter = async (gender: string, genre: string) => {
    try {
      setLoading(true);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/personajes?gender=${encodeURIComponent(gender)}&genre=${encodeURIComponent(genre)}`
      );
      if (!response.ok) throw new Error('Error al obtener personaje');
      const data: Character = await response.json();
      setCharacter(data);
    } catch (error) {
      console.error(error);
      alert('Error al obtener personaje');
    } finally {
      setLoading(false);
    }
  };

  return (
    <BlurContainer>
      <SelectionForm onGenerate={handleGenerateCharacter} />
      {loading ? <Spinner /> : <ResultCard character={character} />}
    </BlurContainer>
  );
}



