import React from 'react';
import Header from './components/Header';
import styled from '@emotion/styled';
import Formulario from './components/Formulario';

const Contenedor = styled.div`
  max-width: 450px;
  margin: 0 auto;
`;

const ContenedorFormulario = styled.div`
  background-color: #FFF;
  padding: 3rem;
  border-radius: 6px;
`

function App() {
  return (
    <Contenedor className="App">
      <Header 
        titulo='Cotizador de Seguros'
      />
    <ContenedorFormulario>
      <Formulario 
        
      />
    </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;
