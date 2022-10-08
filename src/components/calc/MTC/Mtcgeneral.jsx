import { useState } from 'react'
import Button from '@mui/joy/Button';
import Textarea from '@mui/joy/Textarea';
import Box from '@mui/joy/Box';
import FormLabel from '@mui/joy/FormLabel';
function comparar(a, b) { return a - b; }
function compararob(a, b) { return a.veces - b.veces; }

function cmoda(listaM) {
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
			<Box
				sx={{
					py: 2,
					display: 'flex',
					flexDirection: 'column',
					gap: 2,
					alignItems: 'center',
					flexWrap: 'wrap',
				}}
			>
				<FormLabel size="lg">Datos: </FormLabel>
				<strong>Maximo 50 datos</strong>
				<Textarea
					placeholder="Deje su datos aqui: 1 5 2 4 6 2 1 2"
					required
					sx={{ minWidth: "330px" }}
					minRows={10}
					maxRows={20}
					size="lg"
					onChange={e => setdat(e.target.value)}
				/>
				<Button
					className="border"
					type="button"
					variant="solid"
					onClick={calcmedia}>Calcular
				</Button>
			</Box>
			<div className="container-md">
				<div className="container">
					Resultado de la Media: {media === 0 ? "Aun no calculado" : media}
				</div>
				<hr />
				<div className="container">
					Resultado de la Mediana: {mediana === 0 ? "Aun no calculado" : mediana}
				</div>
				<hr />
				<div className="container">
					Resultado de la Moda: {modaa === 0 ? "Aun no calculado" : modaa}
				</div>
			</div>
			<br />
			<hr />
			<p className="p-3">
				Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.
			</p>
			<p className="p-3">
				Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.
			</p>
		</div>
	)
}