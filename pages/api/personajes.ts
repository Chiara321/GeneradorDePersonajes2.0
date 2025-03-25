// /pages/api/personajes.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { queryDB } from '../../services/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    // Obtener parámetros de la query
    const gender = typeof req.query.gender === 'string' ? req.query.gender : null;
    const genre = typeof req.query.genre === 'string' ? req.query.genre : null;

    if (!gender || !genre) {
      return res.status(400).json({ error: 'Parámetros "gender" y "genre" son obligatorios' });
    }

    // Mapa para convertir el valor de gender a un id
    const genderMap: { [key: string]: number } = {
      femenino: 1,
      masculino: 2,
      "no binario": 3,
    };

    const genderId = genderMap[gender.toLowerCase()];
    if (!genderId) {
      return res.status(400).json({ error: 'El parámetro "gender" es inválido' });
    }

    try {
      // Consulta para obtener un nombre aleatorio según el sexo elegido
      const nombreData = await queryDB(
        `SELECT nombre FROM nombres
         WHERE sexo_id = ?
         ORDER BY RANDOM()
         LIMIT 1`,
        [genderId]
      );

      // Consulta para obtener una descripción aleatoria según el género literario elegido
      const descripcionData = await queryDB(
        `SELECT d.descripcion 
         FROM descripciones d
         JOIN generoliterarios g ON d.generoLiterario_id = g.id
         WHERE g.nombre = ?
         ORDER BY RANDOM()
         LIMIT 1`,
        [genre]
      );

      // Combinar resultados en un solo objeto
      const resultado = {
        nombre: nombreData.length > 0 ? nombreData[0].nombre : null,
        descripcion: descripcionData.length > 0 ? descripcionData[0].descripcion : null,
      };

      return res.status(200).json(resultado);
    } catch (error) {
      console.error('Error en la consulta:', error);
      return res.status(500).json({ error: 'Error interno del servidor' });
    }
  } else {
    return res.status(405).json({ error: 'Método no permitido' });
  }
}
