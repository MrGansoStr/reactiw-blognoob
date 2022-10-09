function comparar(a, b) { return a - b; }
function compararob(a, b) { return a.veces - b.veces; }

export const cmoda1 = (dat) => {
  let newarr = dat.split(' ').map(Number)
  let listaM = newarr.sort(comparar)

  let arr = []
  listaM.forEach(element => {
    let cont = 0
    for (let i = 0; i < listaM.length; i++) {
      if (element === listaM[i]) {
        cont++;
      }
    }
    let obj = {
      num: element,
      veces: cont,
    }
    arr.push(obj)
    obj = {}
  })
  arr.sort(compararob)
  return arr[arr.length - 1].num
}

export const calcmedia1 = (dat) => {
  let newarr = dat.split(' ')
  let sum = 0

  for (let i = 0; i < newarr.length; i++) {
    sum = parseInt(newarr[i]) + sum
  }
  console.log(`La media es: ${sum / newarr.length}`)
  return (sum / newarr.length)
}

export const calcMediana1 = (dat) => {
  let newarr = dat.split(' ').map(Number)
  newarr = newarr.sort(comparar)

  if ((newarr.length % 2) === 0) {
    let pos = newarr.length / 2
    pos = parseInt(pos)
    console.log(`${parseInt(newarr[pos - 1])} ${parseInt(newarr[pos])} ${pos}`)
    console.log(`La mediana es: ${(newarr[pos - 1] + newarr[pos]) / 2}`)
    return ((newarr[pos - 1] + newarr[pos]) / 2)
  }
  else {
    let pos = (newarr.length / 2) + 1
    pos = parseInt(pos)
    console.log(`La mediana es: ${newarr[pos]}`)
    return (newarr[pos])
  }
}