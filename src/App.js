import React, { useState } from 'react';
import './App.css';

function App() {
  const [imageData, setImageData] = useState('');

  const generateRandomImage = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 50;
    canvas.height = 50;
    const ctx = canvas.getContext('2d');

    const imageData = ctx.createImageData(50, 50);
    const data = imageData.data;

    for (let i = 0; i < data.length; i += 4) {
      data[i] = Math.floor(Math.random() * 256); 
      data[i + 1] = Math.floor(Math.random() * 256); 
      data[i + 2] = Math.floor(Math.random() * 256); 
      data[i + 3] = 255; 
    }

    ctx.putImageData(imageData, 0, 0);

    const imageUrl = canvas.toDataURL();
    setImageData(imageUrl);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Gerador de Imagens Aleatórias</h1>
        <div className="image-container">
          {imageData && <img src={imageData} alt="Random" />}
        </div>
        <button onClick={generateRandomImage}>Gerar imagem</button>
      </header>
    </div>
  );
}

export default App;