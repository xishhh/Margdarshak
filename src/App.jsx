import { createContext, useEffect, useMemo, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import OnboardingPage from './pages/OnboardingPage';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import AppTasksPage from './pages/AppTasksPage';
import TutorialPage from './pages/TutorialPage';
import SafetyPage from './pages/SafetyPage';

export const AppContext = createContext(null);

function App() {
  const [language, setLanguage] = useState(() => localStorage.getItem('margdarshak-language') || 'hi');
  const [hasOnboarded, setHasOnboarded] = useState(() => localStorage.getItem('margdarshak-onboarded') === 'true');

  useEffect(() => {
    localStorage.setItem('margdarshak-language', language);
  }, [language]);

  useEffect(() => {
    localStorage.setItem('margdarshak-onboarded', hasOnboarded ? 'true' : 'false');
  }, [hasOnboarded]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      hasOnboarded,
      finishOnboarding: () => setHasOnboarded(true),
    }),
    [hasOnboarded, language],
  );

  return (
    <AppContext.Provider value={value}>
      <Routes>
        <Route path="/" element={<OnboardingPage />} />
        <Route path="/home" element={hasOnboarded ? <HomePage /> : <Navigate to="/" replace />} />
        <Route path="/category/:categoryId" element={hasOnboarded ? <CategoryPage /> : <Navigate to="/" replace />} />
        <Route path="/app/:appId" element={hasOnboarded ? <AppTasksPage /> : <Navigate to="/" replace />} />
        <Route
          path="/tutorial/:appId/:tutorialId"
          element={hasOnboarded ? <TutorialPage /> : <Navigate to="/" replace />}
        />
        <Route path="/safety" element={hasOnboarded ? <SafetyPage /> : <Navigate to="/" replace />} />
        <Route path="*" element={<Navigate to={hasOnboarded ? '/home' : '/'} replace />} />
      </Routes>
    </AppContext.Provider>
  );
}

export default App;
