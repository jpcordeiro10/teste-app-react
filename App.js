import React, { useState } from 'react';
import './App.css';

function App() {
  const [status, setStatus] = useState('');

  const toggleRelay = (action) => {
    // Código para enviar comando à ESP32
    setStatus(`Rele ${action === 'on' ? 'ligado' : 'desligado'}`);
  };

  return (
    <div className="App">
      <h1>Controle do Relé</h1>
      <p>Status: {status}</p>
      <button onClick={() => toggleRelay('on')}>Ligar</button>
      <button onClick={() => toggleRelay('off')}>Desligar</button>
    </div>
  );
}

export default App;
