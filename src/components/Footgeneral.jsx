import Fimg from '../img/finesiimg.jpg'
import { RiTwitterLine, RiFacebookLine, RiInstagramLine } from "react-icons/ri";

const Footgeneral = () => {
	return (
		<footer className="d-flex flex-wrap justify-content-between align-items-center py-3 border-top" style={{bottom: "0 !important", height: "95%"}}>
    <div className="col-md-4 d-flex align-items-center">
      <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
        <img className="rounded-3" src={Fimg} width="55px" alt="Logo de la facultad"/>
      </a>
      <span className="mb-3 mb-md-0"><strong>Facultad de Ingenieria Estadistica e Informatica</strong></span>
    </div>
    <ul className="nav col-md-6 justify-content-end list-unstyled " style={{paddingRight: "10px !important"}}>
      <li className="ms-3"><a className="text-muted" href="/"><RiFacebookLine size={25}/></a></li>
      <li className="ms-3"><a className="text-muted" href="/"><RiTwitterLine size={25}/></a></li>
      <li className="ms-3"><a className="text-muted" href="/"><RiInstagramLine size={25}/></a></li>
    </ul>
  </footer>
	)
}

export default Footgeneral;