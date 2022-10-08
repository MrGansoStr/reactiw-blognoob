import operatorsasignimg from './img/operatorsasignimg.JPG'
import operatorsrelimg from './img/operatorsrelimg.JPG'
import operatorssameimg from './img/operatorssameimg.JPG'
import { Carouseloperators1 } from './Carouseloperators1'
import { Carouseloperators2 } from './Carouseloperators2'
import { Navright } from '../../Navright'

const Operators = () => {
	return (
		<div className="container-xl">
			<Navright/>
			<br/>
			<h2>Operadores </h2>
			<p>
				Los operadores son elementos que disparan ciertos cálculos cuando son aplicados a variables o a otros objetos en una expresión
			</p>
			<p>
				Existe una división en los operadores atendiendo al número de operandos que afectan. Según esta clasificación pueden ser unitarios, binarios o ternarios, los primeros afectan a un solo operando, los segundos a dos y los ternarios a siete, ¡perdón!, a tres.
			</p>
			<p>
				Hay varios tipos de operadores, clasificados según el tipo de objetos sobre los que actúan.
			</p>

			<hr />
			<h3>Operadores Aritmeticos</h3>
			<p>variable1 + variable2 <b>Suma</b></p>
			<p>variable1 - variable2 <b>Resta</b></p>
			<p>Asignan valores positivos o negativos a la expresión a la que se aplican.</p>
			<p>variable1 * variable2 <b>Multiplicacion</b></p>
			<p>variable1 / variable2 <b>Division</b></p>
			<b>Operador Modulo</b>
			<p>variable1 % variable2 <b>Residuo</b></p>
			<Carouseloperators2 />
			<hr />
			<h3>Incremento y Decremento</h3>
			<p>variable1++ <b>Post - Incremento</b></p>
			<p>++variable1 <b>Pre - Incremento</b></p>
			<p>variable1-- <b>Post - Decremento</b></p>
			<p>--variable1 <b>Pre - Decremento</b></p>
			<hr />
			<h3>Operadores de asignacion</h3>
			<p>Existen varios operadores de asignacion, el mas evidente y el mas usado es el "=", pero no es el unico.</p>
			<img src={operatorsasignimg} className="d-block w-35 rounded-4 justify-content-center align-items-center" style={{margin: "0 auto"}} alt="Operadores de asignacion" />
			<hr />
			<h3>Operadores de Igualdad</h3>
			<p>Los operadores de igualdad son "==", (dos signos = seguidos) y "!=", que comprueban la igualdad o desigualdad entre dos valores aritmeticos.</p>
			<img src={operatorssameimg} className="d-block w-35 rounded-4 justify-content-center align-items-center" style={{margin: "0 auto"}} alt="Operadores de igualdad" />
			<hr />
			<div>

				<h3>Operadores Logicos</h3>
				<p>Los operadores "&amp;&amp;", "||" y "!" relacionan expresiones logicas, formando a su vez nuevas expresiones logicas.</p>
				<Carouseloperators1 />
			</div>
			<hr />
			<h3>Operadores relacionales</h3>
			<p>Los operadores son:</p>
			<img src={operatorsrelimg} className="d-block w-35 rounded-4 justify-content-center align-items-center" style={{margin: "0 auto"}} alt="Operadores relacionales" />
			<hr />
			<br />

		</div>
	)
}

export default Operators;