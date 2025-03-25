// /hooks/useUIState.ts
import { useState } from 'react';

export type UIState = 'none' | 'personaje' | 'imagen';

/**
 * Maneja el estado de la interfaz en la columna derecha.
 */
export function useUIState() {
  const [uiState, setUIState] = useState<UIState>('none');

  // Función para resetear a 'none' al hacer clic fuera
  const resetUI = () => setUIState('none');

  return { uiState, setUIState, resetUI };
}
