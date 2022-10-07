import Fimg from '../img/finesiimg.jpg'

export const Header = () => {
  return (
    <>
      <header className="container-xxl" >
        <nav className="navbar navbar-expand-lg" style={{backgroundColor: "rgba(43, 49, 54, 0.384)", borderBottom: "0.1rem solid white"}}>
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <img className="rounded" src={Fimg} alt="Logo" width="70px"/>
            </a>
            <button id="btnnavigation" className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
              <span className="navbar-toggler-icon" style={{backgroundColor: "white !important"}}></span>
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

                  <ul id="listabug" className="dropdown-menu" style={{backgroundColor: "rgba(43, 49, 54, 0.384)"}}>
                    <li><a className="dropdown-item" href="/">Estadistica Basica</a></li>
                    <li><a className="dropdown-item" href="/">Programación</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="/">JavaScript</a></li>
                  </ul>
                </li>
                <li className="nav-item ">
                  <a className="nav-link" href="/">Calculadora Estadistica</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">About Me</a>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Estadistica" aria-label="Search"/>
                <button className="btn btn-outline-primary col-5 text-white" type="submit">Buscar Tema</button>
              </form>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}