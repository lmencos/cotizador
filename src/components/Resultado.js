import React from 'react';
import styled from '@emotion/styled';

const Mensaje = styled.p`
  background-color: rgb(127, 224, 237);
  margin-top: 0.5rem;
  padding: 0.5rem;
  text-align: center;
  border-radius: 3px;
`;

const ResultadoCotizacion = styled.div`
  text-align: center;
  padding: 0.5rem;
  border: 1px solid #00A1C4;
  border-radius: 3px;
  background-color: #FFF;
  margin-top: 1rem;
  position: relative;
`;

const TextoCotizacion = styled.p`
  color: #00A1C4;
  padding: 0.9rem;
  text-transform: uppercase;
  font-weight: bold;
  margin: 0;
  text-align: center;
`;

const Resultado = ({ cotizacion }) => {
  
  return (
    (cotizacion === 0) 
      ? <Mensaje>Elige el año, la marca y el tipo de plan</Mensaje> 
      : 
      (
        <ResultadoCotizacion>
          <TextoCotizacion>El total es de: $ {cotizacion} pesos</TextoCotizacion>
        </ResultadoCotizacion>
      )
  )
}
 
export default Resultado;