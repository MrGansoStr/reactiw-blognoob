import parametersimg from './img/parametersimg.png'
import { Navright } from '../../Navright'
import ReactPlayer from 'react-player'
const Parameters = () => {
  return (
    <div className="container-xl">
      <br/>
      <Navright con={true}/>
      <div className="rounded-3 border p-3">
        <h3 id="referenciayvalor" className="titulo">
          Funciones con Parametros por Referencia y por valor
        </h3>
        <p>
          Hasta ahora siempre hemos declarado los parámetros de nuestras funciones del mismo modo. Sin embargo, éste no es el único modo que existe para pasar parámetros.
        </p>
        <p>
          La forma en que hemos declarado y pasado los parámetros de las funciones hasta ahora es la que normalmente se conoce como "por valor". Esto quiere decir que cuando el control pasa a la función, los valores de los parámetros en la llamada se copian a "variables" locales de la función, estas "variables" son de hecho los propios parámetros.
        </p>
        <p><b>Ejemplo: </b></p>
        <hr />
        <img className="img-fluid h-auto d-flex justify-content-center" src={parametersimg} alt="Parametros por referencia y por valor" style={{ width: "70%", margin: "0 auto" }} />
      </div>
      <hr/>
      <div className="container-xl h-auto">
      <ReactPlayer url={'https://www.youtube.com/watch?v=XNXdytXmYVM'}
      width="100%" controls/>
    </div>
    </div>
  )
}

export default Parameters;