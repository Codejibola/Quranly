import React, {useState} from "react";

export default function Search() {
    const [surah, setSurah] = useState('');
    const [ayah, setAyah] = useState([]);
    const [i, setI] = useState(0);
    

    async function searchSurah() {
        try {
            const response = await fetch(`https://api.alquran.cloud/v1/surah/${surah}/ar.alafasy`);
            const data = await response.json();
            setAyah(data.data.ayahs)
            setI(0)
            console.log(data.data)
        } catch (error) {
            setAyah("Ayah not found")
            setI("")
        }
    }

    function playNextAyah() {
        setI((prev)=>prev += 1)
    }

    
    return (
        <div style={{
            padding: '40px',
            background: 'linear-gradient(to right, #000000,rgb(0, 0, 0),rgb(0, 0, 0))',
            minHeight: '100vh',
            color: 'white',
            textAlign: 'center',
            fontFamily: 'Arial, sans-serif'
          }}>
            <h2 style={{ marginBottom: '20px' }}>🔍 Quran Surah Search</h2>
      
            <input
              type="search"
              placeholder="Enter surah chapter (e.g. 2)"
              onChange={(e) => setSurah(e.target.value)}
              style={{
                padding: '12px 20px',
                width: '320px',
                fontSize: '16px',
                borderRadius: '8px',
                border: 'none',
                outline: 'none',
                margin: "60px 15px 0px",
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
                transition: '0.3s ease',
              }}
            />
      
            <button
              onClick={searchSurah}
              style={{
                padding: '12px 20px',
                background: 'linear-gradient(to right, #00c6ff, #0072ff)',
                color: 'white',
                fontSize: '16px',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)',
                transition: '0.3s ease',
              }}
              onMouseOver={(e) => (e.target.style.opacity = 0.65)}
              onMouseOut={(e) => (e.target.style.opacity = 1)}
            >
              Search
            </button>
      
            <div style={{ marginTop: '30px', fontSize: '22px', lineHeight: '1.8' }}>
            {ayah[i] && (
        <div>
          <p>{ayah[i].text}</p>
          <audio  src={ayah[i].audio} autoPlay onEnded={playNextAyah} controls />
          {/* <button onClick={togglePause}>
            {isPaused ? 'Resume' : 'Pause'}
          </button> */}
        </div>
      )}
                <div><audio controls>
                <source src="https://cdn.islamic.network/quran/audio/125/ar.alafasy/11.mp3" type="audio/mp3" />
                Your browser does not support the audio element.
                </audio></div> 
                {/* {ayah && <p>{ayah}</p>} */}
            </div>
          </div>
    )
}