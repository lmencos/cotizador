//Obtiene la diferencia de años:
export const obtenerDiferenciaYear = (year) => {
  return new Date().getFullYear() - year;
}

//calcula el total a pagar según la marca
//value en selec "marca" de Formulario
    //Americano +15%
    //Asiático +5%
    //Europeo +30%
export const calcularMarca = (marca) => {
  let incremento = 0;

  switch(marca){
    case 'europeo':
      incremento = 1.3;
      break;
    case 'americano':
      incremento = 1.15;
      break;
    case 'asiatico':
      incremento = 1.05;
      break;

    default:
      incremento = 1;
      break;
  }
  return incremento;
}

//Calcular covertura básica o completa
export const obtenerPlan = (plan) => {
  return ( plan === 'basico' )? 1.2 : 1.5;
}

//Muestra laprimera letra en mayúscula (Resumen)
//slice(1) quita la primera letra
export const primeraMayuscula = ( texto ) => {
  return texto.charAt(0).toUpperCase() + texto.slice(1);
}