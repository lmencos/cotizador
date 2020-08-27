import React, { useState } from 'react';
import Header from './components/Header';
import styled from '@emotion/styled';
import Formulario from './components/Formulario';
import Resumen from './components/Resumen';
import Resultado from './components/Resultado';
import Spinner from './components/Spinner';

const Contenedor = styled.div`
  max-width: 450px;
  margin: 0 auto;
`;

const ContenedorFormulario = styled.div`
  background-color: #FFF;
  padding: 3rem;
  border-radius: 6px;
`;

function App() {
  // 
  const [ resumen, guardarResumen ] = useState({
    cotizacion: 0,
    datos: {
      marca: '',
      year: '',
      plan: ''
    }
  });

  //Spinner
  const [ cargando, guardarCargando ] = useState(false);

  //Extraer datos
  const { datos, cotizacion } = resumen;

  return (
    <Contenedor className="App">
      <Header 
        titulo='Cotizador de Seguros'
      />
    <ContenedorFormulario>
      <Formulario 
        guardarResumen={guardarResumen}
        guardarCargando={guardarCargando}
      />

      { cargando ? <Spinner />  : null }

      <Resumen
        datos={datos}
      />

      { !cargando ?   
        <Resultado 
        cotizacion={cotizacion}
        />
      : null }

    </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;
