// /hooks/usePanelState.ts
import { useState } from 'react';

export function usePanelState() {
  const [isPersonajeOpen, setIsPersonajeOpen] = useState(false);

  return { isPersonajeOpen, setIsPersonajeOpen };
}

