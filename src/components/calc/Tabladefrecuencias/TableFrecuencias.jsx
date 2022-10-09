import { useState, useEffect } from 'react'
import Button from '@mui/joy/Button';
import Textarea from '@mui/joy/Textarea';
import Box from '@mui/joy/Box';
import FormLabel from '@mui/joy/FormLabel';

const TableFrecuencias = () => {
	useEffect((e) => {
		console.log(e)
	}, [])
	let [dat, setdat] = useState("")
	let [values, setvalues] = useState([])
	let [tamanio, settamanio] = useState(0)

	const calctable = () => {

		let newarr = dat.split(' ').map(Number)
		let max = Math.max(...newarr)
		let min = Math.min(...newarr)
		let rango = max - min
		let intervalos = parseInt(Math.sqrt(newarr.length))
		let amplitud = parseInt(rango / intervalos)
		settamanio(newarr.length)
		async function llenarintervalos() {
			let arrintervalos = []
			for (let i = 0; i < intervalos; i++) {
				let obj = {
					id: i,
					minimo: min,
					maximo: min + amplitud,
					veces: 0
				}
				min = amplitud + min
				arrintervalos.push(obj)
				obj = {}
			}
			return arrintervalos
		}
		async function llenarveces(arrveces, arrg) {

			for (let i = 0; i < arrveces.length; i++) {
				let contador = 0
				for (let j = 0; j < arrg.length; j++) {
					if ((i === arrveces.length - 1)) {
						if (arrg[j] >= arrveces[i].minimo && arrg[j] <= arrveces[i].maximo) {
							contador++;
							//console.log(`${arrg[j]} ${arrveces[i].minimo} ${arrveces[i].maximo}`)
						}
					}
					else {
						if (arrg[j] >= arrveces[i].minimo && arrg[j] < arrveces[i].maximo) {
							contador++;
							//console.log(`${arrg[j]} ${arrveces[i].minimo} ${arrveces[i].maximo}`)
						}
					}
				}
				arrveces[i].veces = contador
			}
			console.log(arrveces)
			setvalues(arrveces)
		}
		llenarintervalos().then(e => {
			llenarveces(e, newarr)
		})
	}

	return (
		<div className="container-lg">
			<br />
			<h2>Calcular Tabla de Frecuencias</h2>
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
					onClick={calctable}>Calcular
				</Button>
			</Box>

			<br />
			<div className="container-md text-white">
				<table className="table text-white">
					<thead>
						<tr>
							<th scope="col">#</th>
							<th scope="col">Intervalo</th>
							<th scope="col">Marca de clase</th>
							<th scope="col">F. absoluta</th>
							<th scope="col">F. Absoluta Acumulada</th>
							<th scope="col">F. Relativa</th>
							<th scope="col">F. Relativa Acumulada</th>
						</tr>
					</thead>
					<tbody>
						{values.map(e => (
							<tr key={e.id}>
								<td>{e.id + 1}</td>
								<td>{e.minimo} - {e.maximo}</td>
								<td>{(e.minimo + e.maximo) / 2}</td>
								<td>{e.veces}</td>
								<td>{e.veces}</td>
								<td>{e.veces / tamanio}</td>
								<td>{e.veces / tamanio}</td>
							</tr>
						))
						}
						<tr>
							<td><b>Total</b></td>
							<td></td>
							<td></td>
							<td>{tamanio}</td>
							<td></td>
							<td>{1}</td>
							<td></td>
						</tr>
					</tbody>
				</table>
			</div>
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

export default TableFrecuencias;