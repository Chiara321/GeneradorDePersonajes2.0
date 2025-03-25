// /pages/api/descripciones.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { queryDB } from '../../services/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  const gender = typeof req.query.gender === 'string' ? req.query.gender : undefined;
  const genre = typeof req.query.genre === 'string' ? req.query.genre : undefined;

  if (!gender || !genre) {
    return res.status(400).json({ error: 'Los parámetros "gender" y "genre" son obligatorios' });
  }

  try {
    const data = await queryDB(
      'SELECT description FROM descriptions WHERE gender = ? AND genre = ? ORDER BY RANDOM() LIMIT 1',
      [gender, genre]
    );

    if (data.length === 0) {
      return res.status(404).json({ error: 'No se encontraron descripciones' });
    }

    res.status(200).json({ description: data[0].description });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener la descripción' });
  }
}
