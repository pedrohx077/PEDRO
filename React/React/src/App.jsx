import { useState } from 'react';
import './App.css';

export default function App() {
  const [name, setName] = useState('');
  const [theme, setTheme] = useState(true);
  const [count, setCount] = useState(0);
  const [showTitle, setShowTitle] = useState(false);

  const handleCountAdd = () => setCount(count + 10);
  const handleCountSubtract = () => setCount(count - 10);

  return (
    <>
      <button onClick={() => setTheme(!theme)}>TROCAR A COR DO FUNDO</button>
      
      {theme ? 
        <div className='fundo-preto'>
          <h1>NOME: {name}</h1>
          <input type="text" onChange={(e) => setName(e.target.value)} />
        </div>
       : 
        <div className='fundo-branco'>
          <h1>NOME: {name}</h1>
          <input type="text" onChange={(e) => setName(e.target.value)} />
        </div>
      }

      <div>
        <button onClick={handleCountAdd}>Adicionar 10</button>
        <button onClick={handleCountSubtract}>Subtrair 10</button>
        <h2>Contador: {count}</h2>
      </div>

      <div>
        <button onClick={() => setShowTitle(!showTitle)}>
          {showTitle ? 'Esconder Título' : 'Mostrar Título'}
        </button>
        {showTitle && <h1>Balacobaco</h1>}
      </div>

      <div>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          placeholder="Digite algo..."
        />
        {name === "SENAI" && <h2>Apareci!</h2>}
      </div>
    </>
  );
}
