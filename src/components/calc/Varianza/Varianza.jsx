import { useState } from 'react'
import Button from '@mui/joy/Button';
import Textarea from '@mui/joy/Textarea';
import Box from '@mui/joy/Box';
import FormLabel from '@mui/joy/FormLabel';
import { calcvarm, calcvarp } from './calculating/varianzacalc';

const Varianza = () => {
  let [dat, setdat] = useState("")
  let [varm, setvarm] = useState(0)
  let [varp, setvarp] = useState(0)

  const calcallvar = () => {
    setvarm(calcvarm(dat))
    setvarp(calcvarp(dat))
  }
  return (
    <div className="container-lg">
			<br />
			<h2>Calcular Varianza: </h2>
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
					onClick={calcallvar}>Calcular
				</Button>
			</Box>
			<div className="container-md">
				<div className="container">
					Resultado de la Varianza Muestral: {varm === 0 ? "Aun no calculado" : varm}
				</div>
				<hr />
				<div className="container">
					Resultado de la Varianza Poblacional: {varp === 0 ? "Aun no calculado" : varp}
				</div>
				<hr />
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

export default Varianza;