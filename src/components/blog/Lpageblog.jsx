
import { Mainimg } from './Mainimg'
import { Introduction } from './Partes/Introduction'
import { Videotutorials } from './Videotutorials'
import { ContentMain } from './Partes/ContentMain'
import { Navright } from '../blog/Navright'
import { Comments } from '../blog/Comments'

const Lpageblog = () => {
	return (
		<>
			<br />
			<div className="container-xl" style={{ width: "97%" }}>
				<Mainimg />
				<br/>
				<div className="row" style={{ Width: "100%" }}>
					<div className="col-md-6 bg-dark border rounded">
						<ContentMain />
					</div>
					<div className="col-md-6 border bg-dark rounded">
						<Navright/>
					</div>
				</div>
				<div className="">
					<br/>
					<Introduction />
					<Videotutorials />
					<p>Parrafo de prueba </p>
					<Comments/>
				</div>
			</div>
		</>
	)
}

export default Lpageblog;