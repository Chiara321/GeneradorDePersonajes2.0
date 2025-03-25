// /services/db.ts - Conexión a Turso
import { createClient } from '@libsql/client';

const db = createClient({
  url: process.env.TURSO_DB_URL!,
  authToken: process.env.TURSO_AUTH_TOKEN!
});

// Definir que params es un array de valores permitidos (string, number, null, etc.)
export const queryDB = async (sql: string, params: (string | number | boolean | null)[] = []) => {
  try {
    const result = await db.execute({ sql, args: params });
    return result.rows;
  } catch (error) {
    console.error('Error en la consulta:', error);
    throw new Error('Error en la base de datos');
  }
};
