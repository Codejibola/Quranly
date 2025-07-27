import React from 'react';
import Search from './search';

export default function MainContent() {
  return (
    <div className="bg-[#0d0d0d] min-h-screen flex flex-col items-center justify-center px-4 py-12 text-text">
      <div className="text-center space-y-4">
        <h1 className="text-accent text-4xl sm:text-5xl font-bold tracking-tight">
          Welcome to Quranly
        </h1>
        <p className="text-[#e5e7eb] text-lg font-light">
          ...your Quran memorization aid
        </p>
        <Search />
      </div>
    </div>
  );
}

