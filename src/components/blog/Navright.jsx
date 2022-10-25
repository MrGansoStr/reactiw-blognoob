import { MdMenu } from "react-icons/md"
export const Navright = (props) => {
  return (
    <>
      <div className="text-white align-items-center justify-content-center" style={{paddingBottom: "15px", paddingTop: "15px" , border: `${props.con? "0.5px solid": "0px"}`, borderRadius: `${props.con? "7px": "0px"}`}}>
        <nav className="navbar-expand-md">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation" style={{ width: "90%", alignItems: "center", fontSize: "22px"}}>
              Temas <MdMenu size={50}/>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
              <h1 style={{padding: "15px"}}> <strong> C++ </strong> </h1>
              <hr/>
              <ul className="text-left border border-top-0 border-bottom-0" style={{ padding: "40px"}}>
                <a className="list-group-item" href="/blog">Introduccion</a>
                <a className="list-group-item" href="/blog/tiposvariables">Tipos de Variables</a>
                <a className="list-group-item" href="/blog/funciones">Funciones</a>
                <a className="list-group-item" href="/blog/parametrosvalorreferencia">Parametros por valor y referencia</a>
                <a className="list-group-item" href="/blog/operadores">Operadores</a>
                <a className="list-group-item" href="/blog/ifelse">Sentencias <b>if else</b></a>
                <a className="list-group-item" href="/blog/bucles">Bucles</a>
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
              <hr/>
              <ul className="text-left" style={{ listStyle: "none", padding: "15px" }}>
                <h2>PDFs</h2>
                <hr/>
                <a className="list-group-item" href="./PDF/03_Proyecto_web.pdf">PAsda</a>
                <a className="list-group-item"  href="/blog/pdfs">Proyecto</a>
              </ul>
              <hr />
              <ul className="text-left" style={{ listStyle: "none", padding: "15px" }}>
                Videos:
                <a className="list-group-item" href="/blog">Otro link</a>
              </ul>
            </div>
        </nav>
      </div>
    </>
  )
}