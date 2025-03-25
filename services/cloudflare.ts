// /services/cloudflare.ts
export const generateImage = async (prompt: string): Promise<string> => {
  const url = `${process.env.NEXT_PUBLIC_CLOUDFLARE_WORKER_URL}?prompt=${encodeURIComponent(prompt)}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Error generando la imagen');
  }

  // Convertir la respuesta en blob y generar una URL local
  const blob = await response.blob();
  return URL.createObjectURL(blob);
};
