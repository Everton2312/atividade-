import { useState } from 'react';
import './App.css';

function App() {
  // Estado numérico
  const [numero, setNumero] = useState(100);

  // Estado booleano
  const [visivel, setVisivel] = useState(true);

  // Função para alternar visibilidade
  const alternarVisibilidade = () => {
    setVisivel(prev => !prev);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Valor: {numero}</h1>
      <button onClick={() => setNumero(numero + 100)}>Adicionar 100</button>

      <div style={{ marginTop: '2rem' }}>
        <button onClick={alternarVisibilidade}>
          {visivel ? 'Esconder' : 'Mostrar'}
        </button>

        {visivel ? (
          <p>paragrafo para mostrar e Esconder</p>
        ) : null}
      </div>
    </div>
  );
}

export default App
