import { useState } from 'react'
import Button from '@mui/joy/Button';
import Textarea from '@mui/joy/Textarea';
import Box from '@mui/joy/Box';
import FormLabel from '@mui/joy/FormLabel';
import { calcMediana1, calcmedia1, cmoda1} from './calculating/mtcformulas'

const Mtcgeneral = () => {
	let [dat, setdat] = useState("")
	let [media, setmedia] = useState(0)
	let [mediana, setmediana] = useState(0)
	let [modaa, setmodaa] = useState(0)

	const calcall = () => {
		setmedia(calcmedia1(dat))
		setmediana(calcMediana1(dat))
		setmodaa(cmoda1(dat))
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
					onClick={calcall}>Calcular
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

export default Mtcgeneral;