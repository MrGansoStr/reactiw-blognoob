import operatorslogicimg1 from './img/operatorslogicimg1.JPG'
import operatorslogicimg2 from './img/operatorslogicimg2.JPG'
import operatorslogicimg3 from './img/operatorslogicimg3.JPG'
import operatorslogicimg4 from './img/operatorslogicimg4.JPG'

export const Carouseloperators1 = () => {
  return (
    <div className="justify-content-center align-items-center" style={{width: "70%", margin: "0 auto"}}>
      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true" style={{maxHeight: "30%"}}>
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={operatorslogicimg1} className="d-block w-100 rounded-4" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={operatorslogicimg2} className="d-block w-100 rounded-4" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={operatorslogicimg3} className="d-block w-100 rounded-4" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={operatorslogicimg4} className="d-block w-100 rounded-4" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}