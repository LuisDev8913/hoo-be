'use client';

import { useLoadTransitions } from '@/utils/use-load-transitions';

export const TransitionsLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useLoadTransitions();

  return <>{children}</>;
};
