import React, { Suspense } from 'react';

import { useViewMode } from './Hooks/useViewMode';
import KioskView from './Views/Kiosk';
import UserView from './Views/User';

const App: React.FC = () => {
  const { mode } = useViewMode();

  if (mode === 'user') {
    return <UserView />;
  }

  return (
    <Suspense fallback={<p>Lade Daten...</p>}>
      <KioskView />
    </Suspense>
  );
};

export default App;
