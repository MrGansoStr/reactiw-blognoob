import { useState } from 'react'

function comparar(a, b) { return a - b; }
function compararob(a, b) { return a.veces - b.veces; }

function cmoda(listaM) {
	let arr = []
	listaM.forEach(element => {
		let cont = 0
		for(let i = 0; i < listaM.length; i++) {
			if(element === listaM[i]){
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

export const Mtcgeneral = () => {
	let [dat, setdat] = useState("")
	let [media, setmedia] = useState(0)
	let [mediana, setmediana] = useState(0)
	let [modaa, setmodaa] = useState(0)
	const calcmedia = () => {
		if (dat.length === 0) {
			return (alert("Faltan datos"))
		}
		let newarr = dat.split(' ')
		let sum = 0
		for (let i = 0; i < newarr.length; i++) {
			sum = parseInt(newarr[i]) + sum
		}
		console.log(`La media es: ${sum / newarr.length}`)
		setmedia(sum / newarr.length)
		calcMediana()
		calcModa()
	}
	const calcMediana = () => {
		if (dat.length === 0) {
			return (alert("Faltan datos"))
		}
		let newarr = dat.split(' ').map(Number)
		newarr = newarr.sort(comparar)

		if ((newarr.length % 2) === 0) {
			let pos = newarr.length / 2
			pos = parseInt(pos)
			console.log(`${parseInt(newarr[pos - 1])} ${parseInt(newarr[pos])} ${pos}`)
			console.log(`La mediana es: ${(newarr[pos - 1] + newarr[pos]) / 2}`)
			setmediana((newarr[pos - 1] + newarr[pos]) / 2)
		}
		else {
			let pos = (newarr.length / 2) + 1
			pos = parseInt(pos)
			console.log(`La mediana es: ${newarr[pos]}`)
			setmediana(newarr[pos])
		}
	}
	const calcModa = () => {
		if (dat.length === 0) {
			return (alert("Faltan datos"))
		}
		let newarr = dat.split(' ').map(Number)
		newarr = newarr.sort(comparar)
		let moda1 = cmoda(newarr)
		setmodaa(moda1)
	}
	return (
		<div className="container-lg">
			<br />
			<h2>Calcular Medidas de Tendencia Central: </h2>
			<div className="container-md">
				<label htmlFor="dato">Datos:</label>
				<input id="dato" placeholder="1 2 3 4 5 6 3 2 " type="text" onChange={e => setdat(e.target.value)} required />
				<br />
				<button className="btn btn-primary" type="button" onClick={calcmedia}>Calcular</button>
				<div className="container">
					Resultado de la Media: {media === 0 ? "Aun no calculado" : media}
				</div>
				<div className="container">
					Resultado de la Mediana: {mediana === 0 ? "Aun no calculado" : mediana}
				</div>
				<div className="container">
					Resultado de la Moda: {modaa === 0 ? "Aun no calculado" : modaa}
				</div>
			</div>
			<br/>
			<hr/>
		</div>
	)
}