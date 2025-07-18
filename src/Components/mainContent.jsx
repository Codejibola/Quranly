// src/components/MainContent.jsx
import React from 'react';
import './mainContent.css';
import Search from './search';

export default function MainContent() {
  document.body.style.backgroundColor = "#000000";

    return (
        <div className='master-div'>
    <div>
          <h1 style={{ color: "#0000ff", fontFamily: "cursive", fontSize: "40px", margin:"30px 0px 0px 0px" }}> Welcome to Quranly </h1>
          <p style={{color: "#ffffff",margin:"0px"}}>...your Quran memorization aid</p>
          {/* search button */}
          <Search />
          
    </div>
        </div> 
  );
}
