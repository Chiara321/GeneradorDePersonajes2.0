// /services/api.ts
export const getRandomName = async (gender: string) => {
  if (!gender) throw new Error('El parámetro "gender" es obligatorio');

  const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/nombres?gender=${gender}`);
  if (!response.ok) throw new Error('Error al obtener el nombre');

  return response.json();
};

export const getRandomDescription = async (gender: string, genre: string) => {
  if (!gender || !genre) throw new Error('Los parámetros "gender" y "genre" son obligatorios');

  const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/nombres?gender=${gender}`);
  if (!response.ok) throw new Error('Error al obtener la descripción');

  return response.json();
};

export const saveCharacter = async (name: string, description: string, gender: string, genre: string) => {
  if (!name || !description || !gender || !genre) {
    throw new Error('Todos los campos son obligatorios');
  }

  const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/personajes`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, description, gender, genre })
  });

  if (!response.ok) throw new Error('Error al guardar el personaje');

  return response.json();
};
