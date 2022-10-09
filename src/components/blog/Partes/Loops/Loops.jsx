import dowhileimg from './img/dowhileimg.png'
import whileimg from './img/whileimg.png'
import forimg from './img/forimg.png'
import { Navright } from '../../Navright'
import ReactPlayer from 'react-player'

const Loops = () => {
  return (
    <div className="container-lg">
      <br />
      <Navright con={true}/>
      <br/>
      <div className="rounded-3 border p-3">
      <h2>Bucles</h2>
      <p>Estos tipos de sentencias son el núcleo de cualquier lenguaje de programación, y están presentes en la mayor parte de ellos. Nos permiten realizar tareas repetitivas, y se usan en la resolución de la mayor parte de los problemas</p>
      <hr />
      <h3 id="while" className="titulo">Bucles "while"</h3>
      <p>
        Es la sentencia de bucle más sencilla, y sin embargo es tremendamente potente. La sintaxis es la siguiente:
        While (condicion) sentencia
      </p>
      <p>
        La sentencia es ejecutada repetidamente mientras la condición sea verdadera, ("while" en inglés significa "mientras"). Si no se especifica condición se asume que es "true", y el bucle se ejecutará indefinidamente. Si la primera vez que se evalúa la condición resulta falsa, la sentencia no se ejecutará ninguna vez.
      </p>
      <hr />
      <img className="img-fluid h-auto d-flex justify-content-center rounded-4" src={whileimg} alt="If Else" style={{ width: "70%", margin: "0 auto" }} />
      <hr />
      <h3 id="dowhile" className="titulo">Bucles "do while"</h3>
      <p>Esta sentencia va un paso más allá que el "while". La sintaxis es la siguiente</p>
      <p>do (sentencia) while (condicion)</p>
      <p>
        La sentencia es ejecutada repetidamente mientras la condición resulte falsa. Si no se especifica condición se asume que es "true", y el bucle se ejecutará indefinidamente. A diferencia del bucle "while", la evaluación se realiza después de ejecutar la sentencia, de modo que se ejecutará al menos una vez.
      </p>
      <hr />
      <img className="img-fluid h-auto d-flex justify-content-center rounded-4" src={dowhileimg} alt="If Else" style={{ width: "70%", margin: "0 auto" }} />
      <hr />
      <h3 id="for" className="titulo">Bucle "for"</h3>
      <p>for( inicializacion; condicion; incremento ) sentencia</p>
      <p>
        Antes de la primera iteración se ejecutará la inicialización del bucle, que puede ser una expresión o una declaración. En este apartado se iniciarán las variables usadas en el bucle. Estas variables pueden ser declaradas en este punto, pero tendrán validez sólo dentro del bucle "for". Después de cada iteración se ejecutará el incremento de las variables del bucle.
      </p>
      <hr />
      <img className="img-fluid h-auto d-flex justify-content-center rounded-4" src={forimg} alt="If Else" style={{ width: "70%", margin: "0 auto" }} />
      <hr />
      </div>
      <hr/>
      <div className="container-xl h-auto">
      <ReactPlayer url={'https://www.youtube.com/watch?v=DTmMjJ-cd00'}
      width="100%" controls/>
      </div>
      <hr/>
      <div className="container-xl h-auto">
      <ReactPlayer url={'https://www.youtube.com/watch?v=_6AdtcVn4xs'}
      width="100%" controls/>
      </div>
      <hr/>
      <div className="container-xl h-auto">
      <ReactPlayer url={'https://www.youtube.com/watch?v=vHKWMR2WaIQ'}
      width="100%" controls/>
    </div>
    </div>
  )
}

export default Loops;