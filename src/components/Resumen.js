import React from 'react';
import styled from '@emotion/styled';
import { primeraMayuscula } from './Helper';

const ContenedorResumen = styled.div`
  padding: 1rem;
  display: block;
  align-items: center;
  text-align: center;
  background-color: #FFFF;
  margin-top: 1rem;
  border: 1px solid #00A1C4;
  border-radius: 3px;
`;

const Resumen = ( {datos} ) => {
//extraer datos
const { marca, year, plan } = datos;

  if( marca === '' || year === '' || plan === ''){
    return null;
  } else
      return ( 
        <ContenedorResumen>
          <h3>Resumen de cotización</h3>
          <ul>
            <li>Año: {year} </li>
            <li>Marca: {primeraMayuscula(marca)} </li>
            <li>Plan: {primeraMayuscula(plan)} </li>
          </ul>
        </ContenedorResumen>
     );
}
 
export default Resumen;