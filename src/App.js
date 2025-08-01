// src/App.jsx
import React, { useState, useEffect } from 'react';
import Loading from './Components/Quranly-loadingPage';
import MainContent from './Components/mainContent';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return isLoading
    ? <Loading message="Preparing Quranly…" />
    : <MainContent />;
}

export default App;

