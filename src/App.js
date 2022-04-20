import React, { useState, useEffect } from 'react';
import "./ styles.css";

// https://sujeitoprogramador.com/rn-api/?api=posts

function App() {
  const [nutri, setNutri] = useState([]);

  useEffect(() => {
    function loadApi() {
      const url = 'https://sujeitoprogramador.com/rn-api/?api=posts';

      fetch(url).then((resultado) => resultado.json()).then((json) => {
        setNutri(json);
        console.log(json);
      });
    }

    loadApi();
  }, []);

  return (

    <div className="container">

      <header>
        <strong>React Nutri</strong>
      </header>
      {nutri.map((item) => (
        <article key={item.id} className="post">
          <h3>
            Categoria:
            {item.categoria}
          </h3>
          <hr />
          <strong className="titulo">{item.titulo}</strong>
          <img src={item.capa} alt={item.titulo} className="capa" />
          <p className="subtitulo">
            {item.subtitulo}
          </p>
          <a className="botao">Acessar</a>
        </article>
      ))}

    </div>
  );
}

export default App;
