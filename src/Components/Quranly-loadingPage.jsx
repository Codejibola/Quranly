// src/Loading.js
// src/components/Loading.jsx
import React from 'react';
import QuranlyLogo from './QuranlyLogo';

export default function Loading({ message = 'Loading…' }) {
  const styles = {
    container: {
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      height: '100vh', background: '#fff'
    },
    message: {
      color: '#0055aa', fontSize: 18, marginTop: 12
    }
  };

  return (
    <div style={styles.container}>
      <QuranlyLogo className="w-36 h-36" />
      <p style={styles.message}>{message}</p>
    </div>
  );
}
