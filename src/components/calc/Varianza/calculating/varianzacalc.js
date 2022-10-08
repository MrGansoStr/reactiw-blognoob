import { calcmedia1 } from '../../MTC/calculating/mtcformulas';

export const calcvarm = (datos) => {
  if(datos.length === 0) {
    return (alert("Faltan datos"))
  }
  let media = calcmedia1(datos)
  let newarr = datos.split(' ').map(Number)
  let suma = 0;
  newarr.forEach(element => {
    suma = ((element - media) * (element - media)) + suma
  })
  return (suma/newarr.length)
}
export const calcvarp = (datos) => {
  if(datos.length === 0) {
    return (alert("Faltan datos"))
  }
  let media = calcmedia1(datos)
  let newarr = datos.split(' ').map(Number)
  let suma = 0
  newarr.forEach(element => {
    suma = ((element - media) * (element - media)) + suma
    //console.log(`${element} ${media} ${suma}`)
  })
  if(suma === 0){
    alert("Todos los datos son iguales")
  }
  return (suma/(newarr.length - 1))
}