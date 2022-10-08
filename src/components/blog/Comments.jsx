import React from 'react';
import Button from '@mui/joy/Button';
import Textarea from '@mui/joy/Textarea';
import Box from '@mui/joy/Box';
import { useState } from 'react';


export const Comments = () => {
	let [msg, setmsg] = useState("")
	let [email, setemail] = useState("")
	const submitcomment = () => {
		console.log(`Mensaje enviado con el correo: ${email}`)
		console.log(`${msg}`)
		alert('Comentario Enviado')
	}
	return (
		<>
			<hr/>
			<h2>Comentarios</h2>
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
				<form
					onSubmit={(event) => {
						event.preventDefault();
					}}
				>
					<Textarea
						placeholder="Deje su comentario acerca de esta pagina"
						required
						sx={{ minWidth: "330px" }}
						minRows={10}
						size="lg"
						onChange={e => setmsg(e.target.value)}
					/>
					<Textarea
						placeholder="Gmail@gmail.com"
						required
						sx={{ mb: 1, minWidth: "330px" }}
						minRows={3}
						size="lg"
						onChange = {e => setemail(e.target.value)}
					/>
					<Button 
						className="border" 
						type="submit" 
						variant="solid"
						onClick={submitcomment}>Submit</Button>
				</form>
			</Box>
		</>
	);
}