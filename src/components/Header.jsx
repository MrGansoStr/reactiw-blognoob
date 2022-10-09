import Fimg from '../img/finesiimg.jpg'
import { useState, useEffect } from 'react';

/*
const titl = ['manzana', 'pera', 'papaya', 'platano', 'una cosa', 'una cosa una cosa una cosa una cosa']
const titl1 = [
  {
    tit: "manzana",
    id: "1"
  },
  {
    tit: "pera",
    id: "2"
  },
  {
    tit: "papaya",
    id: "3"
  },
  {
    tit: "platano",
    id: "4"
  }
]*/
let titulos = []
function cargar () {
  let titles = document.getElementsByClassName("titulo")
	//console.log(titles)
  Array.from(titles).forEach(function (element) {
    let obj = {
      tit: element.textContent,
      ref: element.id
    }
    titulos.push(obj)
    //console.log(obj)
    obj={}
  })
  titulos.splice(titles.length, titles.length)
}

const Header = () => {
  let [word, setword] = useState("")
  cargar()
  useEffect(() => {
    console.log("Intento no se que")
  }, [word])
  return (
    <>
      <header className="container-xxl" >
        <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "rgba(43, 49, 54, 0.384)", borderBottom: "0.1rem solid white" }}>
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <img className="rounded" src={Fimg} alt="Logo" width="70px" />
            </a>
            <button id="btnnavigation" className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
              <span className="navbar-toggler-icon" style={{ backgroundColor: "white !important" }}></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="/" >Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/blog">Blog</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Otros Temas
                  </a>

                  <ul className="dropdown-menu listabug" style={{ backgroundColor: "rgba(43, 49, 54, 0.384)" }}>
                    <li><a className="dropdown-item disabled" href="/">Python</a></li>
                    <li><a className="dropdown-item disabled" href="/">C++</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item disabled" href="/">JavaScript</a></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">Calculadora Estadistica</a>
                  <ul className="dropdown-menu listabug" style={{ backgroundColor: "rgba(43, 49, 54, 0.384)" }}>
                    <li><a className="dropdown-item" href="/mtc">Medidas de Tendencia Central</a></li>
                    <li><a className="dropdown-item" href="/varianza">Varianza</a></li>
                    <li><a className="dropdown-item" href="/tablasdefrecuencias">Tablas de Frecuencia</a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" href="/">About Me</a>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <li className="dropdown" style={{listStyle: "none"}}>
                <input className="form-control me-2 dropdown dropdown-toggle "data-bs-toggle="dropdown" type="search" placeholder="Estadistica" aria-label="Search" onChange={e => setword(e.target.value.toLowerCase())}/>
                <ul className="dropdown-menu justify-content-center align-items-center listabug" style={{margin: "0 auto", backgroundColor: "rgba(43, 49, 54, 0.384)"}}>
                  {titulos.filter((val) => {
                    if(word === ""){
                      return val.tit
                    }
                    if((val.tit.toLowerCase()).includes(word)){
                      return val.tit
                    }
                    return 0
                  }).map((e, key) => (
                    <li key={key} ><a href={`#${e.ref}`} className="dropdown-item">{e.tit}</a></li>
                  ))}
                  <li className="dropdown-item"><b>C++</b></li>
                </ul>
                </li>
                <button className="btn btn-outline-primary col-5 text-white" type="submit">Buscar Tema</button>
              </form>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}
export default Header;