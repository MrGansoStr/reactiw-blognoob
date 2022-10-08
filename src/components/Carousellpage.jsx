import img1 from '../img/codeimg1.jpg'
import img2 from '../img/codeimg2.jpg'
import img3 from '../img/codeimg3.jpg'
import img4 from '../img/codeimg4.jpg'


export const Carousellpage = () => {
	return (
		<div className="container-md ">
			<div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" >
				<div className="carousel-inner">
					<div className="carousel-item active">
						<img src={img1} className="d-block w-100 rounded-3" alt="..."/>
					</div>
					<div className="carousel-item">
						<img src={img2} className="d-block w-100 rounded-3" alt="..."/>
					</div>
					<div className="carousel-item">
						<img src={img3} className="d-block w-100 rounded-3" alt="..."/>
					</div>
					<div className="carousel-item">
						<img src={img4} className="d-block w-100 rounded-3" alt="..."/>
					</div>
				</div>
				<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
					<span className="carousel-control-prev-icon" aria-hidden="true"></span>
					<span className="visually-hidden">Previous</span>
				</button>
				<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
					<span className="carousel-control-next-icon" aria-hidden="true"></span>
					<span className="visually-hidden">Next</span>
				</button>
			</div>
		</div>
	)
}