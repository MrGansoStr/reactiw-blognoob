import operatorssuma from './img/operatorssuma.png'
import operatorsresta from './img/operatorsresta.png'
import operatorsmult from './img/operatorsmult.png'
import operatorsdivision from './img/operatorsdivision.png'
import operatorsmodule from './img/operatorsmodule.png'

export const Carouseloperators2 = () => {
  return (
    <div className="justify-content-center align-items-center" style={{width: "70%", margin: "0 auto"}}>
      <div id="carouselExampleIndicators1" class="carousel slide" data-bs-ride="true">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide-to="3" aria-label="Slide 4"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide-to="4" aria-label="Slide 5"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={operatorssuma} className="d-block w-100 rounded-4" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={operatorsresta} className="d-block w-100 rounded-4" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={operatorsmult} className="d-block w-100 rounded-4" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={operatorsdivision} className="d-block w-100 rounded-4" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={operatorsmodule} className="d-block w-100 rounded-4" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}