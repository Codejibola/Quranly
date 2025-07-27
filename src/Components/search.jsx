import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Search() {
  const [surah, setSurah] = useState("");
  const [ayah, setAyah] = useState([]);
  const [i, setI] = useState(0);

  async function searchSurah() {
    try {
      const response = await fetch(
        `https://api.alquran.cloud/v1/surah/${surah}/ar.alafasy`
      );
      const data = await response.json();
      setAyah(data.data.ayahs);
      setI(0);
    } catch (error) {
      setAyah("Ayah not found");
      setI("");
    }
  }

  function playNextAyah() {
    setI((prev) => prev + 1);
  }

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-[#e5e7eb] font-sans flex flex-col items-center px-4 py-12 space-y-8">
      <motion.h2
        className="text-3xl font-semibold text-accent"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        🔍 Quran Surah Search
      </motion.h2>

      <div className="flex flex-col sm:flex-row items-center gap-4">
        <input
          type="search"
          placeholder="Enter surah chapter (e.g. 2)"
          onChange={(e) => setSurah(e.target.value)}
          className="w-72 sm:w-80 px-5 py-3 text-base rounded-lg bg-[#1a1a1a] text-white border-none outline-none focus:ring-2 focus:ring-accent transition-all duration-300"
        />

        <motion.button
          onClick={searchSurah}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="px-6 py-3 bg-accent text-white rounded-lg shadow-md transition duration-300"
        >
          Search
        </motion.button>
      </div>

      <div className="mt-6 text-lg leading-relaxed text-center w-full max-w-2xl space-y-6">
        {ayah[i] && (
          <motion.div
            className="bg-[#1a1a1a] p-6 rounded-xl shadow-md"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <p className="text-xl font-arabic mb-4">{ayah[i].text}</p>
            <audio
              src={ayah[i].audio}
              autoPlay
              onEnded={playNextAyah}
              controls
              className="w-full mt-2"
            />
          </motion.div>
        )}

        {/* Example default audio player */}
        <div className="bg-[#1a1a1a] p-4 rounded-lg shadow-sm">
          <audio controls className="w-full">
            <source
              src="https://cdn.islamic.network/quran/audio/128/ar.alafasy/1.mp3"
              type="audio/mp3"
            />
            Your browser does not support the audio element.
          </audio>
        </div>
      </div>
    </div>
  );
}
