import charimg from './img/charimg.png'
import floatimg from './img/floatimg.png'
import intimg from './img/intimg.png'
import boolimg from './img/boolimg.png'
import doubleimg from './img/doubleimg.png'
import voidimg from './img/voidimg.png'
import { Navright } from '../../Navright'
import ReactPlayer from 'react-player'

const TypesVariables = () => {
  return (
    <div className="container-xl">
      <br/>
      <Navright con={true}/>
      <div className="rounded-3 border p-3">
        <hr />
        <h2>Tipos de Variables</h2>
        <hr/>
        <h3>Tipos Fundamentales</h3>
        <p>En C solo existen cinco tipos fundamentales y los tipos enumerados, C++ añade un septimo tipo, el bool, y el resto de los tipos son derivados de ellos. Los veremos uno por uno, y veremos cómo les afectan cada uno de los modificadores.
        </p>
        <p>
          [signed | unsigned] char (con un identificador) significa que se puede usar signed o unsigned o ninguna de las dos.
          <b>Ejemplo: char cadenadetexto; </b>
        </p>
        <hr />
        <h3>Tipo "char" o carácter: </h3>
        <p>
          Es el tipo básico alfanumérico, es decir que puede contener una carácter, un dígito númerico o un signo de puntuación. Desde el punto de vista del ordenador, todos esos valores son caracteres. En C y C++ este tipo siempre contiene un único caracter del codigo ASCII. El tamaño de memoria es de 1 byte u octeto. Hay que notar que en C un caracter es tratado en todo como un numero, de hecho puede ser declarado con y sin signo. Y si no se especifica el modificador de signo, se asume que es con signo.
          Este tipo de variables es apto para almacenar números pequeños, como los dedos que tiene una persona, o letras, como la inicial de mi nombre de pila.
        </p>
        <img className="img-fluid h-auto d-flex justify-content-center" src={charimg} alt="Variable char" style={{ width: "70%", margin: "0 auto" }} />
        <hr />
        <h3>Tipo "int" o entero: </h3>
        <p>
          Las variables enteras almacenan numeros enteros dentro de los limites de su tamaño, a su vez, ese tamaño depende de la plataforma del compilador, y del numero de bits que use por palabra de memoria: 8, 16, 23... No hay reglas fijas para saber el mayor numero que podemos almacenar en cada tipo: int, long int o short int; depende en gran medida del compilador y del ordenador. Solo podemos estar seguros de que ese numero en short int es menor o igual que en int, y este a su vez es menor o igual que en long int. Veremos como averiguar estos valores cuando estudiamos los operadores.
        </p>
        <img className="img-fluid h-auto d-flex justify-content-center" src={intimg} alt="Variable int" style={{ width: "70%", margin: "0 auto" }} />
        <hr />
        <h3>Tipo "float" o coma flotante: </h3>
        <p>Las variables de este tipo almacenan numeros en formato de coma flotante, mantisa y exponente, para entendernos, son numeros con decimales. Son aptos para variables de tipo real, como por ejemplo el cambio entre soles y dolares. O para numeros muy grandes, como la produccion mundial de trigo, contada en granos. El fuerte de estos numeros no es la precisión , sino el orden de magnitud, es decir lo gran o pequeño que es el numero que contiene. Por ejemplo, la siguiente cadena de operaciones no dará el resultado correcto.</p>
        <img className="img-fluid h-auto d-flex justify-content-center" src={floatimg} alt="Variable float" style={{ width: "70%", margin: "0 auto" }} />
        <hr />
        <h3>Tipo "bool" o Booleana:</h3>
        <p>
          Las variables de este tipo sólo pueden tomar dos valores "true" o "false". Sirven para evaluar expresiones lógicas. Este tipo de variables se puede usar para almacenar respuestas, por ejemplo: ¿Posees carné de conducir?. O para almacenar informaciones que sólo pueden tomar dos valores, por ejemplo: qué mano usas para escribir. En estos casos debemos acuñar una regla, en este ejemplo, podría ser diestro "true", zurdo "false".
        </p>
        <img className="img-fluid h-auto d-flex justify-content-center" src={boolimg} alt="Variable bool" style={{ width: "70%", margin: "0 auto" }} />
        <hr />
        <h4>Tipo "double o coma flotante de doble precisión: </h4>
        <p>
          Las variables de este tipo almacenan números en formato de coma flotante, mantisa y exponente, al igual que float, pero usan mayor precisión. Son aptos para variables de tipo real. Usaremos estas variables cuando trabajemos con números grandes, pero también necesitemos gran precisión. Lo siento, pero no se me ocurre ahora ningún ejemplo.
        </p>
        <p>
          Bueno, también me han preguntado por qué no usar siempre double o long double y olvidarnos de float. La respuesta es que C siempre ha estado orientado a la economía de recursos, tanto en cuanto al uso de memoria como al uso de procesador. Si tu problema no requiere la precisión de un double o long double, ¿por que derrochar recursos?. Por ejemplo, en el compilador Dev-C++ float requiere 4 bytes, double 8 y long double 12, por lo tanto, para manejar un número en formato de long double se requiere el triple de memoria y el triple o más tiempo de procesador que para manejar un float.
        </p>
        <img className="img-fluid h-auto d-flex justify-content-center" src={doubleimg} alt="Variable double" style={{ width: "70%", margin: "0 auto" }} />
        <hr />
        <h4>Tipo "void" o sin tipo: </h4>
        <p>
          Es un tipo especial que indica la ausencia de tipo. Se usa en funciones que no devuelven ningún valor, también en funciones que no requieren parámetros, aunque este uso sólo es obligatorio en C, y opcional en C++, también se usará en la declaración de punteros genéricos, lo veremos más adelante.
        </p>
        <p>
          Las funciones que no devuelven valores parecen una contradicción. En lenguajes como Pascal, estas funciones se llaman procedimientos. Simplemente hacen su trabajo, y no revuelven valores. Por ejemplo, funciones como borrar la pantalla, no tienen nada que devolver, hacen su trabajo y regresan. Lo mismo se aplica a funciones sin parámetros de entrada, el mismo ejemplo de la función para borrar la pantalla, no requiere ninguna entrada para poder hacer su cometido.
        </p>
        <img className="img-fluid h-auto d-flex justify-content-center" src={voidimg} alt="Variable void" style={{ width: "70%", margin: "0 auto" }} />
      </div>
      <hr/>
      <div className="container-xl h-auto">
        <ReactPlayer url={'https://www.youtube.com/watch?v=xBOpQN8jR54'}
      width="100%" controls/>
      </div>
    </div>
  )
}

export default TypesVariables;