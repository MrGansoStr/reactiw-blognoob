import ifelseimg from './img/ifelseimg.png'
import { Navright } from '../../Navright'

export const Setencesifelse = () => {
	return (
		<div className="container-xl">
			<br />
			<Navright />
			<br />
			<h2>Sentencias If Else</h2>
			<p>Implementa la ejecución condicional de una sentencia.</p>
			<p>Si la condicion es "true" se ejecutara la sentencial, si es "false" se ejecutara la segunda sentencia.
			</p>
			<p>
				El "else es opcional, y no pueden insertarse sentencias entre la sentencia1 y el "else".
			</p>
			<hr />
			<h3>If anidados</h3>
			<p className='p-3'>Los if pueden ir dentro de otro if y también dentro de un else</p>
			<hr />
			<img className="img-fluid h-auto d-flex justify-content-center rounded-3" src={ifelseimg} alt="If Else" style={{ width: "70%", margin: "0 auto" }} />
			<hr />
		</div>
	)
}