import { useEffect } from 'react';

export function useLoadTransitions() {
  useEffect(() => {
    document.body.classList.remove('preload');
  }, []);
}
