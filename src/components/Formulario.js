import React, { useState } from 'react';
import styled from '@emotion/styled';

const Campo = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
  /* text-align: center; */
`;

const Label = styled.label`
  flex: 0 0 100px;
`;

const Select = styled.select`
  display: block;
  width: 81%;
  padding: 1rem;
  border: 1px solid #005CC8;
  border-radius: 3px;
  -webkit-appearance: none;
`;

const InputRadio = styled.input `
  margin: 0.5rem 0.5rem;
`;

const Boton = styled.button`
  background-color: #00A1C4;
  font-size: 1.2rem;
  width: 100%;
  padding: 1rem;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  transition: background-color .3s ease;

  &:hover {
    background-color: #26C6DA;
    cursor: pointer;
  }
`;

const Formulario = () => {

  //Creamos el objeto vacío para los campos a seleccionar:
  const [ datos, guardarDatos ] = useState({
    marca: '', 
    year: '',
    plan: ''
  })

  //Extraemos lo svalores:
  const { marca, year, plan } = datos;

  //Leer datos del formulario y colocarlos en el state
  const obtenerDatos = (e) => {
    guardarDatos({
      ...datos,
      [e.target.name]: e.target.value
    })
  }

  return ( 
    <form action="">
      <Campo>
        <Label htmlFor="">Marca</Label>
        <Select 
          name="marca" 
          value={marca}
          onChange={obtenerDatos}
        >
          <option value="">-- Seleccione --</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
        </Select>
      </Campo>
      <Campo>
        <Label htmlFor="">Año</Label>
        <Select 
          name="year" 
          value={year}
          onChange={obtenerDatos}
        >
          <option value="">-- Seleccione --</option>
          <option value="americano">Americano</option>
          <option value="europeo">Europeo</option>
          <option value="Aasiatico">Asiático</option>
        </Select>
      </Campo>

      <Campo>
        <Label htmlFor="">Plan: </Label>
        <InputRadio 
          type="radio"
          name="plan"
          value="basico"
          checked={plan=== "basico"}
          onChange={obtenerDatos}
        />Básico

        <InputRadio 
          type="radio"
          name="plan"
          value="completo"
          checked={plan === "completo"}
          onChange={obtenerDatos}
        />Completo
      </Campo>

      <Boton type="button" >Cotizar</Boton>
    </form>
   );
}
 
export default Formulario;