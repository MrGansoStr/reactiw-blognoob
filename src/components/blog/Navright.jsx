import { MdMenu } from "react-icons/md"
export const Navright = () => {
  return (
    <>
      <div className="text-white">
        <nav class="navbar-expand-md">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation" style={{ width: "90%", alignItems: "center", fontSize: "22px"}}>
              Temas <MdMenu size={50}/>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
              <h3> <strong> C++ </strong> </h3>
              <hr/>
              <ul className="text-left" style={{ paddingLeft: "5px", paddingTop: "20px"}}>
                <a className="list-group-item list-group-item-action" href="/blog/tiposvariables">Tipos de Variables</a>
                <a className="list-group-item" href="/blog">Funciones</a>
                <a className="list-group-item" href="/">Parametros por valor y referencia</a>
                <a className="list-group-item" href="/blog">Operadores</a>
                <a className="list-group-item" href="/">Sentencias <b>if else</b></a>
                <a className="list-group-item" href="/">Bucles</a>
                <a className="list-group-item" href="/">Switch</a>
                <a className="list-group-item" href="/">Sentencias de salto</a>
                <a className="list-group-item" href="/">Librerias Estándar</a>
                <a className="list-group-item" href="/">Conversion de tipos "Casting"</a>
                <a className="list-group-item" href="/">Punteros (*)</a>
                <a className="list-group-item" href="/">Más Operadores</a>
                <a className="list-group-item" href="/">Clases</a>
                <a className="list-group-item" href="/">Private Protected Public</a>
                <a className="list-group-item" href="/">Constructores</a>
                <a className="list-group-item" href="/">Destructores</a>
                <a className="list-group-item" href="/">Herencia</a>
                <a className="list-group-item" href="/">Funciones y Métodos virtuales</a>
              </ul>
              <hr />
              <ul className="text-left" style={{ listStyle: "none", paddingLeft: "3px" }}>
                Videos:
                <a className="list-group-item" href="/blog">Otro link</a>
              </ul>
            </div>
          <div class="">
          </div>
        </nav>
      </div>
    </>
  )
}