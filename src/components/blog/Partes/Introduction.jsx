import i_a_o from './imgblog/entradasalida.JPG'
import Mcascada from './imgblog/cascada.JPG'
export const Introduction = () => {
	return (
		<>
			<h2 id="introduccion">Introduccion</h2>
			<div className="rounded-1 border p-3">
				<h3 id="originc">Origen del C++</h3>
				<p>Fue diseñado a mediados de los años 80 por el danés Bjarne Stroustrup. Si intención fue la de extender el lenguaje de programación C (con mucho éxito en ese momento) para que tuviese los mecanismos necesarios para manipular objetos. Por lo tanto C++ contiene los paradigmas de la programación estructurada y orientada a objetos, por lo que se le conoce como un lenguaje de programación multiparadigma.</p>
				<hr />
				<h3 id="cmeans">Qué significa C++</h3>
				<p>A <strong>C++</strong> primero se le conoció como “C con clases”. Luego se cambió a C++ que significa “incremento de C”, dando a entender que se trata de una extensión del lenguaje de programación C.</p>
				<hr />
				<h3 id="programingmeans">Que es programar? </h3>
				<p>Especificar la estructura y el comportamiento de un programa o algoritmo, así como probar que el programa realiza su tarea adecuadamente y con un rendimiento aceptable.</p>
				<b>Programa:</b><p>Transforma entrada en salida</p>
				<img className="img-fluid" src={i_a_o} alt="Entrada y salida" style={{ maxHeight: "110px" }} />
				<p><b>Algoritmo: </b>Secuencia de pasos y operaciones que debe realizar el programa para resolver el problema.</p>
				<p>El programa implemeta el algoritmo en un lenguaje concreto.</p>
				<hr />
				<h3 id="ingsoft">La ingenieria de Software</h3>
				<p>La programación es solo una etapa del proceso de desarrollo de alguna aplicación</p>
				<p>Modelo de desarrollo "en <b>cascada</b>:"</p>
				<img src={Mcascada} className="img-fluid" alt="Model-Cascada" />
				<hr />
				<h3 id="libs">Librerias</h3>
				<p>Junto con los compiladores de C y C++, se incluyen ciertos ficheros llamados librerías. Las librerías contienen el código objeto de muchos programas que permiten hacer cosas comunes, como leer el teclado, escribir en la pantalla, manejar números, realizar funciones matemáticas, etc. Las librerías están clasificadas por el tipo de trabajos que hacen, hay librerias de entrada y salida, matemáticas, de manejo de memoria, de manejo de textos, etc.</p>
				<p>Hay un conjutno de librerías muy especiales, que se incluyen con todos los compiladores de C y de C++. Son las librerías <b>ANSI</b> o estándar. Pero también hay librerias no estándar, y dentro de estas las hay públicas y comerciales. En éste blog sólo usaremos librerías <b>ANSI</b></p>
				<hr />
				<h3 id="errors">Errores: </h3>
				<p>Por supuesto, somos humanos, y por lo tanto nos equivocamos. Los errores de programación pueden clasificarse en varios tipos, dependiendo de la fase en que se presenten.</p>
				<h4 id="errorssintaxis">Errores de sintaxis: </h4>
				<p>Son errores en el programa fuente. Pueden deberse a las palabras reservadas mal escritas, expresiones errónesas o incompletas, variables que no existen, etc. Los errores de sintaxis se detectan en la fase de compilación. El compilador, además de generar el código objeto, nos dará una lista de errores de sintaxis, De hecho nos dará solo una cosa o la otra, ya que si hay errores no es posible generar un código objeto.</p>
				<h4 id="warnigs">Avisos: </h4>
				<p>Además de errores, el compilador puede dar también avisos(<b>Warnings</b>). Los avisos son errores, pero no lo suficientemente graves como para impedir la generación del código objeto. No obstante, es imporante corregir estos avisos, ya que el compilador que tiene que decidir entre varias opciones, y sus decisiones no tienen por qué coincidir con lo que nosotros pretendemos, se basan en las directivas que los creadores del compilador decidieron durante su creación.</p>
				<h4 id="errorsbound">Errores de enlazado: </h4>
				<p>El programa enlazador también puede encontrar errores. Normalmente se refiere funciones que no están definidas en ninguno de los ficheros objetos ni en las librerías. Puede que hayamos olvidado incluir alguna librería, o algún fichero objeto, o puede que hayamos olvidado definir alguna función o variable, o lo hayamos hecho mal. </p>
				<h4 id="errorsexecution">Errores de ejecución: </h4>
				<p>Incluso después de obtener un fichero ejecutable, es posible que se produzcan errores. En el caso de los errores de ejecución normalmente no obtendremos mensajes de error, sino que simplemente el programa terminará bruscamente. Estos errores son más difíciles de detectar y corregir. Existen programas auxiliares para buscar estos errores, son los llamados depuradores (debuggers). Estos programas permiten detener la ejecución de nuestros programas, inspeccionar variables y ejecutar nuestro programa paso a paso. Esto resulta útil para detectar excepciones, errores sutiles, y fallos que se presentan dependiendo de circunstancias distintas.</p>
				<h4 id="errorsdesign">Errores de Diseño:</h4>
				<p>Finalmente los errores más difíciles de corregir y prevenir. Si nos hemos equivocado al diseñar nuestro algoritmo, no habrá ningún programa que nos pueda ayudar a corregir los nuestros. Contra estos errores sólo cabe practicar y pensar</p>
				<hr />
				<h3 id="purpouse">Propósito de C++</h3>
				<p>¿Qué clase de programas y aplicaciones se pueden crear usando C y C++</p>
				<p>La respuesta es muy sencilla: <b>TODOS</b></p>
				<p>Tanto <strong>C</strong> y <strong>C++</strong> son lenguajes de programación de propósito general. Todo duede programarse en ellos, desde sitemas operativos y compiladores hasta aplicaiones a medida, etc.</p>
				<br />
				<p>Oirás y leerás mucho sobre éste tema. Sobre todo diciendo que estos lenguajes son complicados y que requieren páginas y páginas de código para hacer cosas que con otro lenguaje se hacen con pocas líneas. Esto es una verdad a medias. Es cierto que un listado completo de un programa en C o C++ para gestión de base de datos (por poner un ejemplo puede requerir varios miles de líneas de código, y que su equivalente en Visual Basic sólo requiere unos pocos cientos. Pero detrás de cada línea de estos compiladores de alto nivel hay cientos de líneas de código en C, la mayor parte de estos compiladores están respaldados por enormes librerías escritas en C. Nada te impide a ti, como programador, usar librerias, e incluso crear las tuyas propias. </p>
			</div>
		</>
	)
}