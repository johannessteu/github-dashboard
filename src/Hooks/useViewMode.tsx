import React, { useContext, createContext, useState } from 'react';

export type ViewMode = 'user' | 'kiosk';

export const allModes: ViewMode[] = ['user', 'kiosk'];

interface ViewContextInterface {
  mode: ViewMode;
  setMode(mode: ViewMode): void;
}

const ViewModeContext = createContext<ViewContextInterface | undefined>(undefined);

interface ViewModeProviderProps {
  value?: ViewContextInterface;
  children: React.ReactNode;
}
const ViewModeProvider = (props: ViewModeProviderProps) => {
  const [mode, setMode] = useState<ViewMode>('kiosk');

  const value = React.useMemo(() => {
    return {
      mode,
      setMode
    };
  }, [mode]);

  return <ViewModeContext.Provider value={value} {...props} />;
};

const useViewMode = () => {
  const context = useContext(ViewModeContext);

  if (!context) {
    throw new Error('useViewMode must be used within a ViewModeProvider');
  }

  return { mode: context.mode, setMode: context.setMode };
};

export { ViewModeProvider, useViewMode };
