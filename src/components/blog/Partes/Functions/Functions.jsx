import functionsimg from './img/functionsimg.png'
import { Navright } from '../../Navright'
export const Functions = () => {
  return (
    <div className="container-xl">
      <Navright/>
      <br/>
      <h2>Funciones</h2>
      <p>Las funciones son un conjunto de instrucciones que realizan una tarea especififica. En genreal toman unos valores de entrada, llamados parametros y proporcionan un valor de salida o valor de retorno; aunque tanto unos como el otro pueden no existir.
      </p>
      <p>
        Tal vez sorprenda que las introduzca tan pronto, pero como son una herramienta muy valiosa, y se usan en todos los programas C++, creo que debemos tener, al menos, una primera noción de su uso.
      </p>
      <p>Al igual que con las variables, las funciones pueden declararse y definirse.
      </p>
      <p>
        Una función muy especial es la función "main". Se trata de la función de entrada, y debe existir siempre, será la que tome el control cuando se ejecute un programa en C. Los programas Windows usan la función WinMain() como función de entrada, pero esto se explica en otro lugar.
      </p>
      <p>
        Existen reglas para el uso de los valores de retorno y de los parámetros de la función "main", pero de momento la usaremos como "int main()" o "int main(void)", con un entero como valor de retorno y sin parámetros de entrada. El valor de retorno indicará si el programa ha terminado sin novedad ni errores retornando cero, cualquier otro valor de retorno indicará un código de error.
      </p>
      <p>
        En C++ es obligatorio usar prototipos. Un prototipo es una declaración de una función. Consiste en una definición de la función sin cuerpo y terminado con un ";". La estructura de un prototipo es:
      </p>
      <hr />
      <img className="img-fluid h-auto d-flex justify-content-center" src={functionsimg} alt="Funciones" style={{ width: "70%", margin: "0 auto" }} />
      <br/>
    </div>
  )
}