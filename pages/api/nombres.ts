// /pages/api/nombres.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { queryDB } from '../../services/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  const gender = typeof req.query.gender === 'string' ? req.query.gender : undefined;

  if (!gender) {
    return res.status(400).json({ error: 'El parámetro "gender" es obligatorio' });
  }

  try {
    const data = await queryDB(
      'SELECT name FROM names WHERE gender = ? ORDER BY RANDOM() LIMIT 1',
      [gender]
    );

    if (data.length === 0) {
      return res.status(404).json({ error: 'No se encontraron nombres' });
    }

    res.status(200).json({ name: data[0].name });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el nombre' });
  }
}
