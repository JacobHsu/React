import React from 'react';
import logo from './logo.svg';
import './App.css';

import QRCode from 'qrcode.react'

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <QRCode value="http://facebook.github.io/react/" id="canvas"/>
        <br></br>
        <button type="button" onClick={()=>{
              var canvas = document.getElementById("canvas");
              var dataURL = canvas.toDataURL();

              var a = document.createElement('a');

              var fileName = 'qrCode.png';
              a.href = dataURL;
              a.download = fileName;
              a.click();
              window.URL.revokeObjectURL(dataURL);
          }}>
           download
        </button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      
    </div>
  );
}

export default App;
