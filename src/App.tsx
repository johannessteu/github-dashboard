import React, { Suspense } from 'react';

import { useViewMode } from './Hooks/useViewMode';
import IndexView from './Views/Index';
import KioskView from './Views/Kiosk';
import UserView from './Views/User';

const App: React.FC = () => {
  const { mode } = useViewMode();

  if (mode === 'kiosk') {
    return (
      <Suspense fallback={<p>Lade Daten...</p>}>
        <KioskView />
      </Suspense>
    );
  }

  if (mode === 'user') {
    return <UserView />;
  }

  // default ot index mode
  return <IndexView />;
};

export default App;
