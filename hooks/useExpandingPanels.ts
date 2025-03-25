// /hooks/useExpandingPanels.ts
import { useState } from 'react';

export type ActivePanel = 'none' | 'personaje' | 'imagen';

/**
 * Maneja cuál panel está activo:
 * - 'none': ambos botones se muestran en tamaño normal
 * - 'personaje': se oculta el botón de personaje y se muestra el panel
 * - 'imagen': se oculta el panel y se muestra el botón imagen grande
 */
export function useExpandingPanels() {
  const [activePanel, setActivePanel] = useState<ActivePanel>('none');

  return { activePanel, setActivePanel };
}

