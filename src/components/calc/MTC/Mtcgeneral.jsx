import { useState } from 'react'
import Button from '@mui/joy/Button';
import Textarea from '@mui/joy/Textarea';
import Box from '@mui/joy/Box';
import FormLabel from '@mui/joy/FormLabel';
import { calcMediana1, calcmedia1, cmoda1} from './calculating/mtcformulas'
import TransitionAlerts from '../alerta/Alerta';

const Mtcgeneral = () => {
	let [dat, setdat] = useState("")
	let [media, setmedia] = useState(0)
	let [mediana, setmediana] = useState(0)
	let [modaa, setmodaa] = useState(0)
	let [hayerror, sethayerror] = useState(false)

	const calcall = () => {
		sethayerror(false)
		if(dat.length===0) {
			sethayerror(true)
			return alert("Alert Faltan Datos")
		}
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
				<div>
					{hayerror? <TransitionAlerts thererror={hayerror}/>: <p></p>}
				</div>
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
				Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno est??ndar de las industrias desde el a??o 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido us?? una galer??a de textos y los mezcl?? de tal manera que logr?? hacer un libro de textos especimen. No s??lo sobrevivi?? 500 a??os, sino que tambien ingres?? como texto de relleno en documentos electr??nicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creaci??n de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y m??s recientemente con software de autoedici??n, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.
			</p>
			<p className="p-3">
				Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno est??ndar de las industrias desde el a??o 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido us?? una galer??a de textos y los mezcl?? de tal manera que logr?? hacer un libro de textos especimen. No s??lo sobrevivi?? 500 a??os, sino que tambien ingres?? como texto de relleno en documentos electr??nicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creaci??n de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y m??s recientemente con software de autoedici??n, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.
			</p>
		</div>
	)
}

export default Mtcgeneral;