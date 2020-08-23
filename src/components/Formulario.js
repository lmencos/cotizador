import React from 'react';
import styled from '@emotion/styled';

const Campo = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
`;

const Label = styled.label`
  flex: 0 0 72px;
`;

const Select = styled.select`
  display: block;
  width: 50%;
  padding: 1rem;
  border: 1px solid #005CC8;
  border-radius: 3px;
  -webkit-appearance: none;
`;

const InputRadio = styled.input `
  margin: 0 0.5rem;
`;

const Formulario = () => {
  return ( 
    <form action="">
      <Campo>
        <Label htmlFor="">Marca</Label>
        <Select name="" id="">
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
        <Select name="" id="">
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
        />Básico

        <InputRadio 
          type="radio"
          name="plan"
          value="completo"
        />Completo
      </Campo>

      <button type="button" >Cotizar</button>
    </form>
   );
}
 
export default Formulario;