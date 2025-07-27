// src/components/QuranlyLogo.jsx
import React from 'react';

export default function QuranlyLogo({ className = "" }) {
  return (
    <svg
      className={`w-full max-w-[300px] h-auto ${className}`}
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
    >
      <path
        d="M10,160 L10,80 C10,60 40,20 100,20 C160,20 190,60 190,80 L190,160 L100,120 Z"
        fill="#0055aa"
      />
      <path stroke="#0099ff" strokeWidth="4" fill="none"
        d="M60,100 C70,90 80,110 90,100"
      />
      <path stroke="#0099ff" strokeWidth="4" fill="none"
        d="M80,110 C90,100 100,120 110,110"
      />
      <path stroke="#0099ff" strokeWidth="4" fill="none"
        d="M100,120 C110,110 120,130 130,120"
      />
    </svg>
  );
}
