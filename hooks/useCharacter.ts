// /hooks/useCharacter.ts
import { useState } from 'react';
import { generateImage } from '../services/cloudflare';
import { Character } from '../types/character';

export const useCharacter = () => {
  const [character, setCharacter] = useState<Character | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchCharacter = async (gender: string, genre: string) => {
    setLoading(true);
    setError(null);
    setCharacter(null);
    setImageUrl(null);

    try {
      // Llamada al endpoint para obtener nombre y descripción basados en gender y genre
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/personajes?gender=${encodeURIComponent(gender)}&genre=${encodeURIComponent(genre)}`);
      if (!response.ok) throw new Error('Error al obtener el personaje');
      const data: Character = await response.json();
      setCharacter(data);

      // Llamada al worker de Cloudflare para generar la imagen usando la descripción obtenida
      const imgUrl = await generateImage(data.descripcion);
      setImageUrl(imgUrl);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return { character, imageUrl, fetchCharacter, loading, error };
};

